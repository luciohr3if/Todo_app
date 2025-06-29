import Switch from '@mui/material/Switch';
import { StyledDarkModeIcon, StyledLightModeIcon } from '../Icons/Icons';


const ThemeComponent = () => {
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    
    return (
        <div style={{display: "flex", alignItems: "center", alignSelf: "end"}}>
            <StyledLightModeIcon/>
            <Switch {...label} defaultChecked color="default" />
            <StyledDarkModeIcon />
        </div>
    )
}
export default ThemeComponent