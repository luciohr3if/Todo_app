import TodoCard from "./TodoCard"

const TodoList = () => {
    return (

            <div style={{background: "white", borderRadius: "10px", display: "grid", height: "auto", width: "300px"}}>
                <TodoCard text="Clean the house"/>
                <TodoCard text="Wash the dishes"/>
                <TodoCard text="Play Videogames"/>
            </div>
    )
}
export default TodoList