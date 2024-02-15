function openLoginForm(event){
    document.querySelector("#login-form").classList.toggle("hidden");
}

function NavigationLeftBar(){
    function displayclick(){
        console.log("clicked!");
    }
    return <div className="fixed md:w-1/5 hidden h-screen bg-blue-300 md:flex flex-col items-center overflow-y-scroll">
            <button type="button" className="sticky p-3 w-full my-0.5 rounded-xl bg-red-500 text-white border-2 hover:bg-red-400 focus: transform active:scale-x-75 transition-transform" onClick={displayclick}>Pending</button>
            <button type="button" className="sticky p-3 w-full my-0.5 rounded-xl bg-green-600 text-white border-2 hover:bg-green-500 focus: transform active:scale-x-75 transition-transform">Completed</button>
            <button type="button" className="sticky p-3 w-full my-0.5 rounded-xl bg-gray-600 text-white border-2 hover:bg-gray-500 focus: transform active:scale-x-75 transition-transform">Stats</button>
            <button id="login-button" className="md:hidden text-xl font-mono text-white p-2 m-1 bg-red-400 rounded-lg" onClick={openLoginForm}>Login</button>
    </div>
}

export default NavigationLeftBar;