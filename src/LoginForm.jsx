
function SignUpForm(event){
    document.querySelector("#signup-form").classList.toggle("hidden");
}

function triggerLogin(event){
    alert("Login!");
    //Login Code
}

function triggerSignUp(event){
    alert("Sign Up!");
    //Sign Up Code
}

function closeLoginPage(event){
    document.querySelector("#login-form").classList.add("hidden");
    document.querySelector("#signup-form").classList.add("hidden");
}

function LoginForm(){
    return <div id="login-form" className="hidden absolute top-0 left-0 w-full h-full z-10 bg-slate-400">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            
            <div className="flex flex-col items-center justify-center shadow-2xl h-96 w-96 p-1 bg-slate-700 rounded-lg">
            <div className="self-end">
                <button className="bg-red-500 p-2 m-2 text-white rounded-xl" onClick={closeLoginPage}>Back</button>
            </div>
            <label for="username" className="text-white">Username</label>
            <input type="text" className="w-60 h-8 text-lg text-center"></input>
            <br/>
            <label for="username" className="text-white">Password</label>
            <input type="password" className="w-60 h-8 text-lg text-center"></input>
            <br/>
            <button className="bg-green-400 rounded-md p-2 m-2 w-16 text-black hover:bg-green-100" onClick={triggerLogin}>Login</button>
            <button className="w-16 underline text-yellow-400 hover:text-white" onClick={SignUpForm}>Sign-up</button>
            </div>
            
            
        
        </div>
        
        <div id="signup-form" className="hidden absolute top-0 left-0 w-full h-full z-10 bg-slate-400">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center justify-center shadow-2xl h-96 w-96 bg-slate-700 rounded-lg">
            <label for="username" className="text-white">Username</label>
            <input type="text" className="w-60 h-8 text-lg text-center"></input>
            <br/>
            <label for="username" className="text-white">Password</label>
            <input type="password" className="w-60 h-8 text-lg text-center"></input>
            <br/>
            <button className="bg-red-400 rounded-md p-2 m-2 w-20 text-black hover:bg-red-100" onClick={triggerSignUp}>Sign-Up</button>
            <button className="w-40 underline text-yellow-400 hover:text-white" onClick={SignUpForm}>Already have a login</button>
            </div>
        
        </div>
        
        </div>
        
    </div>

}
export default LoginForm;