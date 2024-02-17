
function TaskCard(props){
    const name=props.name;
    const tasks=props.tasks;
    const setTask=props.setTask;
    async function deleteCard(event){
        const card_index=event.target.value;
    
        const response = await fetch(`http://localhost:5000/api/deletedata/${name}/${card_index}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        });

        if (response.ok){
            const updatedTasks = tasks.filter((_, index) => index !== card_index);
            setTask(updatedTasks);
        }

    }

    async function updateCardStatus(event){
        const card_index=event.target.value;

        const response = await fetch(`http://localhost:5000/api/updatedata/${name}/${card_index}`, {
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

        if (task.status==="pending"){
            return <div key={index} className="h-40 w-64 p-4 rounded-md bg-white shadow-md hover:m-1 shadow-red-200 border-2 border-red-400">
            <ol className="list-none">
                <li>{task.name}</li>
                <li>{"Start Date: "+task.startdate}</li>
                <li>{"Deadline: "+task.deadline}</li>
                <li>{"Status: "}{(task.status === "pending") ? (<span className="text-red-400">{task.status}</span>) : (<span className="text-green-400">{task.status}</span>)}</li>
                <div className="block float-right">
                    <button className="p-1 m-1 bg-green-400 text-indigo-50 rounded-md border-2 ml-auto inline-block hover:bg-black" value={index} onClick={updateCardStatus}>Done</button>
                    <button className="p-1 m-1 bg-red-400 text-indigo-50 rounded-md border-2 ml-auto inline-block hover:bg-black" value={index} onClick={deleteCard}>Delete</button>
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
                    <button className="p-1 m-1 bg-green-400 text-indigo-50 rounded-md border-2 ml-auto inline-block hover:bg-black" value={index} onClick={updateCardStatus}>Done</button>
                    <button className="p-1 m-1 bg-red-400 text-indigo-50 rounded-md border-2 ml-auto inline-block hover:bg-black" value={index} onClick={deleteCard}>Delete</button>
                </div>
            </ol>
        </div>;
        }

        
    }


    let Tasks=props.tasks;
    return <div className="flex flex-wrap gap-4">
        {Tasks.map((task, index) => generateCard(task, index))}
    </div>
}


export default TaskCard;