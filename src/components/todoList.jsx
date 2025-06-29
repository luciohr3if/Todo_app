import TodoCard from "./TodoCard"

const TodoList = () => {
    return (
            <>  
                <div style={{background: "white", marginTop: "20px",borderRadius: "10px", display: "flex", height: "auto", width: "300px", flexDirection: "column", gap: "15px"}}>
                    <TodoCard text="Clean the house"/>
                    <TodoCard text="Wash the dishes"/>
                    <TodoCard text="Play Videogames"/>
                </div>
            </>
            
    )
}
export default TodoList