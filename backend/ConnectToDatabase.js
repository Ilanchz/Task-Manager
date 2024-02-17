const uri = process.env.REACT_APP_URI;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection 
// Replace with your actual MongoDB URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the application if unable to connect
  });

// Schema and Model
const taskDataSchema = new mongoose.Schema({
  username: String,
  password: String,
  data: [{ name: String, startdate: String, deadline: String, status: String}],
});

const TaskData = mongoose.model('task-collection', taskDataSchema);

// Create a new user endpoint
//Login Route and to Fetch Tasks
app.get('/api/taskdata/:username/:password', async (req, res) => {
  const { username,password } = req.params;
  try {
    const user = await TaskData.findOne({ username: username });
    if (user){
      if (user.password===password) {
        res.status(200).json({ tasks: user.data});
      } else {
        res.status(401).json({error:"Unauthorised"});
      }
    }else{
      res.status(404).json({ error: 'User not found' });
      
    }
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

app.get('/api/deletedata/:username/:taskindex', async (req, res) => {
  const { username, taskindex } = req.params;

  try {
    const user = await TaskData.findOne({ username: username });

    if (user) {
      const tasks = user.data;

      if (tasks && tasks.length > 0) {
        if (taskindex >= 0 && taskindex < tasks.length) {
          // Splice the task from the data array
          const poppedTask = tasks.splice(taskindex, 1);

          // Update only the data field and save the user
          user.data = tasks;
          await user.save();

          // Respond with the updated tasks array
          res.status(200).json({ tasks: user.data });
        } else {
          res.status(400).json({ error: 'Invalid task index' });
        }
      } else {
        res.status(404).json({ error: 'No tasks found for the user' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

app.get('/api/updatedata/:username/:taskindex', async (req, res) => {
  const { username, taskindex } = req.params;
  try {
    const user = await TaskData.findOne({ username: username });

    if (user) {
      const tasks = user.data;

      if (tasks && tasks.length > 0) {
        if (taskindex >= 0 && taskindex < tasks.length) {
          // Splice the task from the data array
          tasks[taskindex].status="completed";

          // Update only the data field and save the user
          user.data = tasks;
          await user.save();

          // Respond with the updated tasks array
          res.status(200).json({ tasks: user.data });
        } else {
          res.status(400).json({ error: 'Invalid task index' });
        }
      } else {
        res.status(404).json({ error: 'No tasks found for the user' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});


app.post('/api/users', async (req, res) => {
  const { username, password, dataArray } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await TaskData.findOne({ username: username });
    if (existingUser){
      return res.status(400).json({ error: 'User already exists' });
    }
    const taskData = new TaskData({
      username: username,
      password: password,
      data: dataArray || [],
    });

    await taskData.save();

    res.status(201).json({ message: 'User created successfully', user: taskData });
  } catch (error) {
    console.error('Error adding data to MongoDB:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.post('/api/pushNewTask/:username', async (req, res) => {
  const { username } = req.params;
  const  newArray = req.body;

  try {
    const user = await TaskData.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Concatenate the new array into the existing data array
    user.data = user.data.concat(newArray);

    // Save the updated document
    await user.save();

    return res.status(200).json({ message: 'Task pushed successfully', user: user });
  } catch (error) {
    console.error('Error pushing array:', error);
    return res.status(500).json({ error: 'Failed to push array' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
