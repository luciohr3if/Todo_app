import { useState } from "react";
import { StyledMoreVertIcon } from "../Icons/Icons"
import Modal from '@mui/material/Modal';
import { StyledEditNoteIcon, StyledDeleteIcon } from "../Icons/Icons"
import Tooltip from "@mui/material/Tooltip"


const CardOptions = () => {
    const stylerow = {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: "flex-end",
        gap: "10px"
    }
   
    const style = {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "auto",
        bgcolor: 'background.paper',
        backgroundColor: "#fff",
        boxShadow: 24,
        padding: "0px 20px 10px 20px",
        border: "None",
        borderRadius: "10px",
        textAlign: "right",
        gap: "7.5px"
    };

    const [open, setOpen] = useState(false)
    const handleOpendModal = () => setOpen(true)
    const handleCloseModal = () => setOpen(false)
    return (
        <div style={{backgroundColor: "transparent"}}>
            <button onClick={handleOpendModal} style={{backgroundColor: "transparent"}}>
                <Tooltip title="Delete Note" placement="right">
                    <StyledDeleteIcon/>
                </Tooltip>
            </button>
            <button onClick={handleOpendModal} style={{backgroundColor: "transparent"}}>
                <Tooltip title="Edit Note" placement="right">
                    <StyledEditNoteIcon/>
                </Tooltip>
            </button>
            <Modal open={open} onClose={(handleCloseModal)}>
                <div style={style}>
                    <p>Are you sure you want to <b style={{color: "red"}}>delete</b> this <b>Note</b>?</p>
                    <div style={stylerow}>
                        <button onClick={() => setOpen(false)} style={{backgroundColor: "lightgray"}}>
                            No
                        </button>
                        <button style={{backgroundColor: "red", color: "white"}}>
                            Delete
                        </button>
                    </div>
                </div>
                
            </Modal>
        </div>
    )
}
export default CardOptions