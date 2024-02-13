const { MongoClient } = require('mongodb');

// Replace the connection string with your MongoDB Atlas connection string
const uri = "mongodb+srv://ilanpariv66:Ilanchezhiyan%402004@cluster0.uv5o8qk.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
}

async function insertData(data) {
  try {
    await connectToDatabase();
    const database = client.db('task-database');
    const collection = database.collection('task-collection');

    const result = await collection.insertOne(data);
    console.log(`Inserted ${result.insertedCount} document into the collection`);
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

async function getAllTasks(user) {
  try {
    const database = client.db('task-database');
    const collection = database.collection('task-collection');

    const cursor = collection.find({"username":user});
    const result = await cursor.toArray();

    return result;
  } catch (error) {
    return -1;
  }
}

async function closeConnection() {
  try {
    await client.close();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error closing connection:', error);
  }
}

async function checkUserExistence(user){
    const database = client.db('task-database');
    const collection = database.collection('task-collection');
    const user_exists = await collection.findOne({"username":user});
    return user_exists;

}

async function createNewUser(user,password){
    let user_exists=await checkUserExistence(user);
    console.log("user_exists"+user_exists);
    if (user_exists){
        return 0;
    }else{
        await insertData({"username":user,"password":password,"data":[]});
        console.log("inserted user,password");
        return 1;
    }
    
}

async function addTask(newDataObject, user) {
    try {
      await connectToDatabase();
      const database = client.db('task-database');
      const collection = database.collection('task-collection');
      const query = { "username": user };
      const updateResult = await collection.updateOne(query, { $push: { data: newDataObject } }, { upsert: true });
  
      if (updateResult.modifiedCount === 0 && updateResult.upsertedCount === 0) {
        console.log("User not found, task not added.");
      } else {
        console.log("Updated data!");
      }
    } catch (error) {
      console.error('Error adding task:', error);
    } finally {
      await closeConnection();
    }
  }
  

createNewUser("admin","password").then();
addTask({"name":"Task1","start":"13-01-2004","deadline":"31-01-2024"},"admin").then();

getAllTasks("admin").then((x)=>{
    console.log(x);
});


//export {addTask,createNewUser,getAllTasks};


