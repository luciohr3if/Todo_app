import Switch from "@mui/material/Switch";
import { StyledDarkModeIcon, StyledLightModeIcon } from "../Icons/Icons";
import { StyledThemeToggle } from "../styles/StyledComponents";

const ThemeToggle = ({ currentTheme, toggleTheme }) => {
  const isDark = currentTheme === "dark";

  return (
    <StyledThemeToggle>
      <StyledLightModeIcon />
      <Switch 
        checked={isDark}
        onChange={toggleTheme}
        sx={{
          '& .MuiSwitch-thumb': {
            backgroundColor: isDark ? '#CED4DA' : '#DEE2E6', 
          },
          '& .MuiSwitch-track': {
            backgroundColor: '#ADB5BD', 
            opacity: 1,
          },
          '& .Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#495057',
            opacity: 1,
          },
        }}
      />
      <StyledDarkModeIcon />
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
