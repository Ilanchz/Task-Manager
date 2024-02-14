

function LoginForm(props){

    const tasks=props.tasks;
    const setTask=props.setTask;

    const name=props.name;
    const setName=props.setName;
    
    function SignUpForm(event){
        document.querySelector("#signup-form").classList.toggle("hidden");
    }

    async function triggerLogin(event) {
        event.preventDefault(); 
    
        const username = document.querySelector("#login-username").value;
        const password = document.querySelector("#login-password").value;
    
        try {
        const response = await fetch(`http://localhost:5000/api/taskdata/${username}/${password}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
        const responseData = await response.json();
        if (!response.ok) {
            alert("Wrong Password!");
        }else{
            console.log(" Hello bvgdfnghfd");
            console.log(responseData.tasks);
            setTask(responseData.tasks);
            console.log(tasks);
            setName(username);
        }
    
        
        console.log('User data:', responseData);
        closeLoginPage();
        
        } catch (error) {
        console.error('Error fetching user data:', error.message);
        }
    }
    

    async function triggerSignUp(event){
        alert("Sign Up!");
        const username=document.querySelector("#signup-username").value;
        const password=document.querySelector("#signup-password").value;
        const data=[];
        const userData={username,password,data};
        try{
            const response = await fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            });

            if (response.ok) {
                setName(username);   
                alert("Created New User!");
            }
            console.log(response.data);
            closeLoginPage();
        }catch(Error){
            console.log("Signup Error: "+Error);
        }
        
    }

    function closeLoginPage(event){
        document.querySelector("#login-form").classList.add("hidden");
        document.querySelector("#signup-form").classList.add("hidden");
    }




    return <div id="login-form" className="hidden fixed top-0 left-0 w-full h-full z-10 bg-slate-400">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            
            <div className="flex flex-col items-center justify-center shadow-2xl h-96 w-96 p-1 bg-slate-700 rounded-lg">
            <div className="self-end">
                <button className="bg-red-500 p-2 m-2 text-white rounded-xl" onClick={closeLoginPage}>Back</button>
            </div>
            <label for="username" className="text-white">Username</label>
            <input type="text" id="login-username" className="w-60 h-8 text-lg text-center"></input>
            <br/>
            <label for="password" className="text-white">Password</label>
            <input type="password" id="login-password" className="w-60 h-8 text-lg text-center"></input>
            <br/>
            <button className="bg-green-400 rounded-md p-2 m-2 w-16 text-black hover:bg-green-100" onClick={triggerLogin}>Login</button>
            <button className="w-16 underline text-yellow-400 hover:text-white" onClick={SignUpForm}>Sign-up</button>
            </div>
            
            
        
        </div>
        
        <div id="signup-form" className="hidden fixed top-0 left-0 w-full h-full z-10 bg-slate-400">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center justify-center shadow-2xl h-96 w-96 bg-slate-700 rounded-lg">
            <label for="username" className="text-white">Username</label>
            <input type="text" id="signup-username" className="w-60 h-8 text-lg text-center"></input>
            <br/>
            <label for="password" className="text-white">Password</label>
            <input type="password" id="signup-password" className="w-60 h-8 text-lg text-center"></input>
            <br/>
            <button className="bg-red-400 rounded-md p-2 m-2 w-20 text-black hover:bg-red-100" onClick={triggerSignUp}>Sign-Up</button>
            <button className="w-40 underline text-yellow-400 hover:text-white" onClick={SignUpForm}>Already have a login</button>
            </div>
        
        </div>
        
        </div>
        
    </div>

}
export default LoginForm;