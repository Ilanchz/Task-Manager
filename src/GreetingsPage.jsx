function GreetingsPage(props){
    return <div>
        <h1 className="font-serif font-bold">Greetings, {" "+props.name}</h1>
        <hr/>
    </div>
}

export default GreetingsPage;