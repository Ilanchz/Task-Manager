const url=process.env.REACT_APP_URL;
function TaskCard(props){
    const name=props.name;
    const tasks=props.tasks;
    const setTask=props.setTask;
    const currentTask=props.currentTask;
    const setCurrentTask=props.setCurrentTask;

    async function deleteCard(event){
        const card_index=event.currentTarget.value;
        const response = await fetch(`${url}api/deletedata/${name}/${card_index}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        });
        if (response.ok){
            const updatedTasks = tasks.filter((_, index) => index != card_index);
            setTask(updatedTasks);
        }

    }

    async function updateCardStatus(event){
        const card_index=event.currentTarget.value;
        const response = await fetch(`${url}api/updatedata/${name}/${card_index}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        });
        if (response.ok){
            const updatedTasks=[...tasks];
            for (let i=0;i<updatedTasks.length;i++){
                if (i==card_index){
                    updatedTasks[i].status="completed";
                    break;
                }
            }
            setTask(updatedTasks);
        }

    }

    function generateCard(task,index){
        if (currentTask==="all"){
            if (task.status==="pending"){
                return <div key={index} className="h-40 w-64 p-4 rounded-md bg-white shadow-md hover:m-1 shadow-red-200 border-2 border-red-400">
                <ol className="list-none">
                    <li>{task.name}</li>
                    <li>{"Start Date: "+task.startdate}</li>
                    <li>{"Deadline: "+task.deadline}</li>
                    <li>{"Status: "}{(task.status === "pending") ? (<span className="text-red-400">{task.status}</span>) : (<span className="text-green-400">{task.status}</span>)}</li>
                    <div className="block float-right">
                        <button id="done-button" className="p-1 m-1 bg-green-400 text-indigo-50 rounded-md border-2 ml-auto inline-block hover:bg-black" value={index} onClick={updateCardStatus}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2c0-.6-.4-1-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.7 8.7a1 1 0 0 0-1.4-1.4L11 14.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l4-4Z" clip-rule="evenodd"/>
  </svg>
  </button>
                        <button id="remove-button" className="p-1 m-1 bg-red-400 text-indigo-50 rounded-md border-2 ml-auto inline-block hover:bg-black" value={index} onClick={deleteCard}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
  </svg>
  </button>
                    </div>
                    
                </ol>
            </div>;
            }else{
                return <div key={index} className="h-40 w-64 p-4 rounded-md bg-white shadow-md hover:m-1 shadow-green-200 border-2 border-green-400">
                <ol className="list-none">
                    <li>{task.name}</li>
                    <li>{"Start Date: "+task.startdate}</li>
                    <li>{"Deadline: "+task.deadline}</li>
                    <li>{"Status: "}{(task.status === "pending") ? (<span className="text-red-400">{task.status}</span>) : (<span className="text-green-400">{task.status}</span>)}</li>
                    <div className="block float-right">
                        <button className="p-1 m-1 bg-green-400 text-indigo-50 rounded-md border-2 ml-auto inline-block hover:bg-black" value={index} onClick={updateCardStatus}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2c0-.6-.4-1-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.7 8.7a1 1 0 0 0-1.4-1.4L11 14.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l4-4Z" clip-rule="evenodd"/>
  </svg>
  </button>
                        <button className="p-1 m-1 bg-red-400 text-indigo-50 rounded-md border-2 ml-auto inline-block hover:bg-black" value={index} onClick={deleteCard}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
  </svg>
  </button>
                    </div>
                </ol>
            </div>;
            }
        }else if(currentTask==="pending"){
            if (task.status==="pending"){
                return <div key={index} className="h-40 w-64 p-4 rounded-md bg-white shadow-md hover:m-1 shadow-red-200 border-2 border-red-400">
                <ol className="list-none">
                    <li>{task.name}</li>
                    <li>{"Start Date: "+task.startdate}</li>
                    <li>{"Deadline: "+task.deadline}</li>
                    <li>{"Status: "}{(task.status === "pending") ? (<span className="text-red-400">{task.status}</span>) : (<span className="text-green-400">{task.status}</span>)}</li>
                    <div className="block float-right">
                        <button className="p-1 m-1 bg-green-400 text-indigo-50 rounded-md border-2 ml-auto inline-block hover:bg-black" value={index} onClick={updateCardStatus}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2c0-.6-.4-1-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.7 8.7a1 1 0 0 0-1.4-1.4L11 14.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l4-4Z" clip-rule="evenodd"/>
  </svg>
  </button>
                        <button className="p-1 m-1 bg-red-400 text-indigo-50 rounded-md border-2 ml-auto inline-block hover:bg-black" value={index} onClick={deleteCard}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
  </svg>
  </button>
                    </div>
                    
                </ol>
            </div>;
            }
        }else if(currentTask==="completed"){
            if(task.status==="completed"){
                return <div key={index} className="h-40 w-64 p-4 rounded-md bg-white shadow-md hover:m-1 shadow-green-200 border-2 border-green-400">
                <ol className="list-none">
                    <li>{task.name}</li>
                    <li>{"Start Date: "+task.startdate}</li>
                    <li>{"Deadline: "+task.deadline}</li>
                    <li>{"Status: "}{(task.status === "pending") ? (<span className="text-red-400">{task.status}</span>) : (<span className="text-green-400">{task.status}</span>)}</li>
                    <div className="block float-right">
                        <button className="p-1 m-1 bg-green-400 text-indigo-50 rounded-md border-2 ml-auto inline-block hover:bg-black" value={index} onClick={updateCardStatus}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2c0-.6-.4-1-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.7 8.7a1 1 0 0 0-1.4-1.4L11 14.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l4-4Z" clip-rule="evenodd"/>
  </svg>
  </button>
                        <button className="p-1 m-1 bg-red-400 text-indigo-50 rounded-md border-2 ml-auto inline-block hover:bg-black" value={index} onClick={deleteCard}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
  </svg>
  </button>
                    </div>
                </ol>
            </div>;
            }else{
                return;
            }
        }
            
    }


    let Tasks=props.tasks;
    return <div className="flex flex-wrap gap-4">
        {Tasks.map((task, index) => generateCard(task, index))}
    </div>
}


export default TaskCard;