
import GreetingsPage from "./GreetingsPage";
import TaskCard from "./TaskCard";


function TaskPage(props){

        const tasks=props.tasks
        const setTask=props.setTask;

        const name=props.name;
        const setName=props.setName;
        
        function addNewTaskDiv(event){
                document.querySelector("#task-form-div").classList.toggle("hidden");
        }

        async function addNewTask(event){
                let tname=document.querySelector("#tname").value;
                
                let sdate=document.querySelector("#startdate").value;
                let deadline=document.querySelector("#deadline").value;
                if (tname!=="" && sdate!=="" && deadline!==""){
                        if (name !== "") {
                                // Update tasks in atlas
                                await fetch(`http://localhost:5000/api/pushNewTask/${name}`, {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify([{ "name": tname, "startdate": sdate, "deadline": deadline ,"status":"pending"}]),
                                });
                              
                                // Handle the response if needed
                        }
                        let tasks_arr = [...tasks, { "name": tname, "startdate": sdate, "deadline": deadline,"status":"pending" }];
                        setTask(tasks_arr);
                        document.querySelector("#tname").value="";
                        document.querySelector("#startdate").value="";
                        document.querySelector("#deadline").value="";

                }
                
        }

        

        return <div className="col-span-5 md:col-start-2 md:col-span-4 pl-2 m-3">
        <GreetingsPage name={name}/>
        <div className="my-4 w-full">
        <button id="task-button" className="hover:border-l-sky-950 rounded-xl w-16 h-16 focus:animate-spin" onClick={addNewTaskDiv}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path fill="#fff" d="M64 9A55 55 0 1 0 64 119A55 55 0 1 0 64 9Z" transform="rotate(-45.001 64 64.001)"></path><path fill="#444b54" d="M64,122c-14.9,0-29.7-5.7-41-17C0.4,82.4,0.4,45.6,23,23c22.6-22.6,59.4-22.6,82,0c0,0,0,0,0,0 c22.6,22.6,22.6,59.4,0,82C93.7,116.3,78.9,122,64,122z M64,12c-13.3,0-26.6,5.1-36.8,15.2C7,47.5,7,80.5,27.2,100.8 c20.3,20.3,53.3,20.3,73.5,0c20.3-20.3,20.3-53.3,0-73.5C90.6,17.1,77.3,12,64,12z"></path><path fill="#71c2ff" d="M83,61H67V45c0-1.7-1.3-3-3-3s-3,1.3-3,3v16H45c-1.7,0-3,1.3-3,3s1.3,3,3,3h16v16c0,1.7,1.3,3,3,3s3-1.3,3-3 V67h16c1.7,0,3-1.3,3-3S84.7,61,83,61z"></path>
        </svg></button>
        </div>
        <div id="task-form-div" className="hidden">
                <div className="flex flex-col w-1/2 m-4 p-4 shadow-2xl bg-blue-200">
                    <label for="tname">Task Name: </label>    
                    <textarea id="tname" name="tname" row="2" cols="20" required></textarea>

                    <label for="startdate">Start Date: </label>
                    <input type="date" id="startdate" name="startdate" required></input>

                    <label for="deadline">Deadline: </label>
                    <input type="date" id="deadline" name="deadline" required></input>


                    <button id="add-task-button" className="p-4 m-4 w-32 ml-auto bg-red-500 text-white rounded-md" onClick={addNewTask}>Add Task</button>
                </div>
        </div>
        <div class="w-full p-4 mb-4 text-center border-b-2 border-b-slate-950 font-serif">
                Tasks are displayed below
        </div>
        <TaskCard tasks={tasks} setTask={setTask} name={name} setName={setName}/>
        
        </div>;

    
}



export default TaskPage;
