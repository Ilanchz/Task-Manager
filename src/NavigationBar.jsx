function showNavBar(event){
    document.querySelector("#navigation-bottom-bar").classList.toggle("hidden");
   
}

function openLoginForm(event){
    document.querySelector("#login-form").classList.toggle("hidden");
}

function NavigationBar() {
    return (
        <div className="sticky top-0 ">
        <div id="navigation-top-bar" className="flex w-full bg-blue-500 p-4 rounded-b-md span backdrop-blur">
            <div className="text-xl font-mono text-white p-2 m-1">
                Task Manager
            </div>
            <div className="ml-auto">
                <button className="md:block hidden text-xl font-mono text-white p-2 m-1 bg-red-400 rounded-lg" onClick={openLoginForm}>Login</button>
                <button id="expand-button" className="md:hidden w-7 h-7 rounded-sm text-white m-2" onClick={showNavBar}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
  </svg>
            
            
            </button>
            </div>
        </div>
        <div id="navigation-bottom-bar" className="hidden md:hidden">
            <div className="flex flex-col justify-center bg-gray-500 text-white">
            <button type="button" className="sticky p-3 w-full my-0.5 rounded-xl bg-red-500 text-white border-2 hover:bg-red-400 focus: transform active:scale-x-75 transition-transform">Pending</button>
            <button type="button" className="sticky p-3 w-full my-0.5 rounded-xl bg-green-600 text-white border-2 hover:bg-green-500 focus: transform active:scale-x-75 transition-transform">Completed</button>
            <button type="button" className="sticky p-3 w-full my-0.5 rounded-xl bg-gray-600 text-white border-2 hover:bg-gray-500 focus: transform active:scale-x-75 transition-transform">Stats</button>
            <button className="text-xl font-mono text-white p-2 m-8 bg-red-400 rounded-lg" onClick={openLoginForm}>Login</button>
            </div>
        </div>
        </div>
    );
}


export default NavigationBar;