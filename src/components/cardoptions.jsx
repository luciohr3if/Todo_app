import { useState } from "react";
import { StyledMoreVertIcon } from "../Icons/Icons"
import Modal from '@mui/material/Modal';
import { StyledEditNoteIcon, StyledDeleteIcon } from "../Icons/Icons"
import Tooltip from "@mui/material/Tooltip"


const CardOptions = () => {
    const stylerow = {
        display: 'flex',
        flexDirection: 'row'
    }
   
    const style = {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
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
                    <p>Want to delete this Note?</p>
                    <div style={stylerow}>
                        <button onClick={() => setOpen(!open)}>
                            No
                        </button>
                        <button>
                            Delete
                        </button>
                    </div>
                </div>
                
            </Modal>
        </div>
    )
}
export default CardOptions