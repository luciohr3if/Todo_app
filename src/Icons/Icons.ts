import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export const StyledEditNoteIcon = styled(EditNoteIcon)`
    color: black;
`

export const StyledDeleteIcon = styled(DeleteIcon)`
    color: black;
`

export const StyledMoreVertIcon = styled(MoreVertIcon)`
    color: black;
`

export const StyledLightModeIcon = styled(LightModeIcon)`
    color: ${({ theme }) => theme};
    transition: color 0.3s ease;
`

export const StyledDarkModeIcon = styled(DarkModeIcon)`
    color: ${({ theme }) => theme};
    transition: color 0.3s ease;
`

export const StyledArrowUpwardIcon = styled(ArrowUpwardIcon)`
    color: black;
`

export const StyledArrowDownwardIcon = styled(ArrowDownwardIcon)`
    color: black;
`