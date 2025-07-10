import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PushPinIcon from '@mui/icons-material/PushPin';

interface PinIconProps {
  important?: boolean;
}

export const StyledPushPinIcon = styled(PushPinIcon)<PinIconProps>`
  color: ${({ theme, important }) => {
    if (important) {
      return theme.mode === "dark" ? "#9d0208" : "#c1121f";
    }
    return theme.mode === "dark" ? "#CED4DA" : "#998c8b";
  }};
  cursor: pointer;
  margin-right: 10px;
  transition: color 0.3s ease;
`;

export const StyledArrowUpwardIcon = styled(ArrowUpwardIcon)`
    color: ${({ theme }) => theme.cardIconColor};
`

export const StyledArrowDownwardIcon = styled(ArrowDownwardIcon)`
    color: ${({ theme }) => theme.cardIconColor};
`

export const StyledEditNoteIcon = styled(EditNoteIcon)`
    color: ${({ theme }) => theme.cardIconColor};
`

export const StyledDeleteIcon = styled(DeleteIcon)`
    color: ${({ theme }) => theme.cardIconColor};
`

export const StyledLightModeIcon = styled(LightModeIcon)`
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease;
`

export const StyledDarkModeIcon = styled(DarkModeIcon)`
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease;
`