function deleteCard(event){
    const card=event.target.value;
    console.log(card);
}

function generateCard(task,index){
    return <div key={index} className="h-40 w-64 p-4 rounded-md bg-white shadow-2xl hover:m-1">
        <ol className="list-none">
            <li>{task.name}</li>
            <li>{"Start Date: "+task.startdate}</li>
            <li>{"Deadline: "+task.deadline}</li>
            <button className="p-1 m-1 bg-red-400 text-indigo-50 rounded-md border-2 ml-auto block hover:bg-black" value={index} onClick={deleteCard}>Delete</button>
        </ol>
    </div>;
}

function TaskCard(props){
    let Tasks=props.tasks;
    return <div className="flex flex-wrap gap-4">
        {Tasks.map((task, index) => generateCard(task, index))}
    </div>
}


export default TaskCard;