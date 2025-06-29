
const TodoForm = () => {
    
    return (
        <div style={{display: "flex", flexDirection: "row", gap: "10px", alignItems: "center"}}>
            <input type="text" style={{fontSize: "28px", borderRadius: "7.5px"}} placeholder="Type anything"/>
            <button style={{backgroundColor: "#0096c7", color: "white"}}>Submit</button>
        </div>
    )
}
export default TodoForm;