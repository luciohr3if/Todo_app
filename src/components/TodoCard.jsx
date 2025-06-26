import CardOptions from "./cardoptions"

const TodoCard = ({text}) => {
    const card_note = text
    return (
        <div style={{display: "flex", color: "black", textAlign: "center", fontSize: "15px", height: "75px", alignItems: "center", justifyContent: "center"}}>
            
            <p>{card_note}</p>
            <CardOptions />
        </div>
    )
}
export default TodoCard