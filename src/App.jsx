import NavigationBar from "./NavigationBar";
import NavigationLeftBar from "./NavigationLeftBar";
import TaskPage from "./TaskPage";
import LoginForm from "./LoginForm";

function App(){
    return <div className=" bg-violet-100">
            <NavigationBar/>
            <div className="grid grid-cols-5">
            <LoginForm/>
            <NavigationLeftBar/>
            <TaskPage/>
            </div>
        </div>
}

export default App;