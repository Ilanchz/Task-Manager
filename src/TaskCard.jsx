
function generateCard(task){
    return <div className="h-40 w-64 p-4 rounded-md bg-white shadow-2xl">
        <ol className="list-none">
            <li>{task.name}</li>
            <li>{task.start}</li>
            <li>{task.deadline}</li>
        </ol>
    </div>;
}

function TaskCard(props){
    let Tasks=props.tasks;
    return <div className="flex flex-wrap gap-4">
        {Tasks.map(generateCard)}
    </div>
}


export default TaskCard;