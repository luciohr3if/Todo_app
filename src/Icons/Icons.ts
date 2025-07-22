import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PushPinIcon from '@mui/icons-material/PushPin';

interface PinIconProps {
  $important?: boolean;
}

export const StyledPushPinIcon = styled(PushPinIcon)<PinIconProps>`
  color: ${({ theme, $important }) => 
    $important
    ? theme.mode === "dark"
      ? "#9d0208"
      : "#c60b0b"
    : theme.inputText
  };
  margin-right: auto;
  cursor: pointer;
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