import NavigationBar from "./NavigationBar";
import NavigationLeftBar from "./NavigationLeftBar";
import TaskPage from "./TaskPage";
import LoginForm from "./LoginForm";
import { useState } from "react";

function App(){

    const [tasks,setTask]=useState([]);

    const [name,setName]=useState([""]);
    
    console.log(tasks);
    return <div className=" bg-violet-100">
            <NavigationBar />
            <div className="grid grid-cols-5">
            <LoginForm tasks={tasks} setTask={setTask} name={name} setName={setName}/>
            <NavigationLeftBar />
            <TaskPage tasks={tasks} setTask={setTask} name={name} setName={setName}/>
            </div>
        </div>
}

export default App;