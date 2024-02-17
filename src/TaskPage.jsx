
import GreetingsPage from "./GreetingsPage";
import TaskCard from "./TaskCard";


function TaskPage(props){

        const tasks=props.tasks
        const setTask=props.setTask;

        const name=props.name;
        const setName=props.setName;

        const currentTask=props.currentTask;
        const setCurrentTask=props.setCurrentTask;
        
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
        <button id="task-button" className="hover:border-l-sky-950 rounded-xl  focus:animate-bounce" onClick={addNewTaskDiv}><svg class="w-10 h-10 rounded-full text-white bg-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
  </svg>
  
  
  
  </button>
        </div>
        <div id="task-form-div" className="hidden">
                <div className="flex flex-col w-1/2 m-4 p-4 shadow-2xl bg-blue-200">
                    <label for="tname">Task Name: </label>    
                    <textarea id="tname" name="tname" row="2" cols="20" required></textarea>

                    <label for="startdate">Start Date: </label>
                    <input type="date" id="startdate" name="startdate" required></input>

                    <label for="deadline">Deadline: </label>
                    <input type="date" id="deadline" name="deadline" required></input>


                    <button id="add-task-button" className="p-4 m-4 ml-auto bg-red-500 text-white rounded-md" onClick={addNewTask}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4.7 4.5 9.3-9"/>
  </svg></button>
                </div>
        </div>
        <div class="w-full p-4 mb-4 text-center border-b-2 border-b-slate-950 font-serif">
                Tasks are displayed below
        </div>
        <TaskCard tasks={tasks} setTask={setTask} name={name} setName={setName} currentTask={currentTask} setcurrentTask={setCurrentTask}/>
        
        </div>;

    
}



export default TaskPage;
