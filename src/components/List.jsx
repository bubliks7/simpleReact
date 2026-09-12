import { useState } from "react";
import '../styles/List.css';

const List = () => {
    const [quests, setQuests] = useState([
        {id: 1, quest: "Learn React", done: false}, 
        {id: 2, quest: "Get good job", done: false},
        {id: 3, quest: "Build portfolio", done: false},
    ])
    const [newQuestText, setNewQuestText] = useState("")
    const [filter, setFilter] = useState("all");

    const filteredQuests = quests.filter((filtred) => {
        if(filter === "active") return !filtred.done;
        if(filter === "done") return filtred.done;
        return true;
    });

    return(
        <>
            <h1>My To-do list</h1>

            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("done")}>Done</button>

            <ul>
                {filteredQuests.map((todo) => (
                    <li key={todo.id}>
                        {todo.quest}
                        <input checked={todo.done} type="checkbox" onChange={(e) => {
                            setQuests(quests.map((isDone) =>
                                isDone.id === todo.id ? {...isDone, done: !isDone.done} : isDone
                            ))
                        }} />

                        <button onClick={() => {
                            setQuests(quests.filter((check) => check.id !== todo.id))
                        }}>delete</button>
                    </li>
                ))}
            </ul>
            
            <input value={newQuestText} type="text" onChange={(e) => setNewQuestText(e.target.value)} />
            <button 
            onClick={() => {
                const newQuest = {id: Date.now(), quest: newQuestText, done: false}
                setQuests([...quests, newQuest])
                setNewQuestText("")
            }}>Add quest</button>
        </>
    )
}

export default List
