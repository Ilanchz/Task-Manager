import NavigationBar from "./NavigationBar";
import NavigationLeftBar from "./NavigationLeftBar";
import TaskPage from "./TaskPage";
import LoginForm from "./LoginForm";
import { useState } from "react";

function App(){

    const [tasks,setTask]=useState([]);
    const [name,setName]=useState([""]);
    const [currentTask,setCurrentTask]=useState("all");
    
    return <div className="bg-violet-100">
            <NavigationBar currentTask={currentTask} setCurrentTask={setCurrentTask}/>
            <div className="grid grid-cols-5">
            <LoginForm tasks={tasks} setTask={setTask} name={name} setName={setName} currentTask={currentTask} setCurrentTask={setCurrentTask}/>
            <NavigationLeftBar currentTask={currentTask} setCurrentTask={setCurrentTask}/>
            <TaskPage tasks={tasks} setTask={setTask} name={name} setName={setName} currentTask={currentTask} setCurrentTask={setCurrentTask}/>
            </div>
        </div>
}

export default App;