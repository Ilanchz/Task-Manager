

function NavigationLeftBar(props){

    const currentTask=props.currentTask;
    const setCurrentTask=props.setCurrentTask;

    function openLoginForm(event){
        document.querySelector("#login-form").classList.toggle("hidden");
    }

    function displayAll(event){
        const input=event.target.value;
        setCurrentTask(input);
    }
    function displayPending(event){
        const input=event.target.value;
        setCurrentTask(input);
    }
    function displayCompleted(event){
        const input=event.target.value;
        setCurrentTask(input);
    }
    return <div className="fixed md:w-1/5 hidden h-screen bg-blue-300 md:flex flex-col items-center overflow-y-scroll">
            <button type="button" value="all" className="sticky p-3 w-full my-0.5 rounded-xl bg-zinc-500 text-white border-2 hover:bg-zinc-400 focus: transform active:scale-x-75 transition-transform" onClick={displayAll}>All</button>
            <button type="button" value="pending" className="sticky p-3 w-full my-0.5 rounded-xl bg-red-500 text-white border-2 hover:bg-red-400 focus: transform active:scale-x-75 transition-transform" onClick={displayPending}>Pending</button>
            <button type="button" value="completed" className="sticky p-3 w-full my-0.5 rounded-xl bg-green-600 text-white border-2 hover:bg-green-500 focus: transform active:scale-x-75 transition-transform" onClick={displayCompleted}>Completed</button>
            <button type="button" value="stats" className="sticky p-3 w-full my-0.5 rounded-xl bg-gray-600 text-white border-2 hover:bg-gray-500 focus: transform active:scale-x-75 transition-transform">Stats</button>
            <button id="login-button" className="md:hidden text-xl font-mono text-white p-2 m-1 bg-red-400 rounded-lg" onClick={openLoginForm}>Logout</button>
    </div>
}

export default NavigationLeftBar;