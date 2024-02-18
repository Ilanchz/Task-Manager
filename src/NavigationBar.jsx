function showNavBar(event){
    document.querySelector("#navigation-bottom-bar").classList.toggle("hidden");
   
}

function openLoginForm(event){
    document.querySelector("#login-form").classList.toggle("hidden");
}

function NavigationBar(props) {

    const currentTask=props.currentTask;
    const setCurrentTask=props.setCurrentTask;


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

    return (
        <div className="sticky top-0 ">
        <div id="navigation-top-bar" className="flex w-full bg-blue-500 p-4 rounded-b-md span backdrop-blur">
            <div className="text-xl font-mono text-white p-2 m-1">


            <svg class="w-9 h-9 text-gray-800 dark:text-white inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M8 3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Zm2 5c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clip-rule="evenodd"/>
            </svg>Grand Line Manager 

                
  

            </div>
            <div className="ml-auto">
                <button id="login-button" className="md:block hidden text-xl font-mono text-white p-2 m-1 bg-red-400 rounded-lg" onClick={openLoginForm}>Logout</button>
                <button id="expand-button" className="md:hidden w-7 h-7 rounded-sm text-white m-2" onClick={showNavBar}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
  </svg>
            
            
            </button>
            </div>
        </div>
        <div id="navigation-bottom-bar" className="hidden md:hidden">
            <div className="flex flex-col justify-center bg-gray-500 text-white">
            <button type="button" value="all" className="sticky p-3 w-full my-0.5 rounded-xl bg-zinc-500 text-white border-2 hover:bg-zinc-400 focus: transform active:scale-x-75 transition-transform" onClick={displayAll}>All</button>
            <button type="button" value="pending" className="sticky p-3 w-full my-0.5 rounded-xl bg-red-500 text-white border-2 hover:bg-red-400 focus: transform active:scale-x-75 transition-transform" onClick={displayPending}>Pending</button>
            <button type="button" value="completed" className="sticky p-3 w-full my-0.5 rounded-xl bg-green-600 text-white border-2 hover:bg-green-500 focus: transform active:scale-x-75 transition-transform" onClick={displayCompleted}>Completed</button>
            <button type="button" value="stats" className="sticky p-3 w-full my-0.5 rounded-xl bg-gray-600 text-white border-2 hover:bg-gray-500 focus: transform active:scale-x-75 transition-transform">Stats</button>
            <button id="login-button"  className="text-xl font-mono text-white p-2 m-8 bg-red-400 rounded-lg" onClick={openLoginForm}>LogOut</button>
            </div>
        </div>
        </div>
    );
}


export default NavigationBar;