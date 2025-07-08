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
        color="default"
      />
      <StyledDarkModeIcon />
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
