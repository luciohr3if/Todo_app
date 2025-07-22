import { StyledDarkModeIcon, StyledLightModeIcon } from "../Icons/Icons";
import { StyledSwitch, StyledThemeToggle } from "../styles/StyledComponents";

const ThemeToggle = ({ currentTheme, toggleTheme }) => {
  const isDark = currentTheme === "dark";

  return (
    <StyledThemeToggle>
      <StyledLightModeIcon />
       <StyledSwitch
        name="theme-switch"
        checked={isDark}
        onChange={toggleTheme}
        color="default"
      />
      <StyledDarkModeIcon />
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
