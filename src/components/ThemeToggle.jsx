import { StyledDarkModeIcon, StyledLightModeIcon } from "../Icons/Icons";
import { StyledSwitch, StyledThemeToggle } from "../styles/StyledComponents";

const ThemeToggle = ({ currentTheme, toggleTheme }) => {
  const isDark = currentTheme === "dark";

  return (
    <StyledThemeToggle>
      <StyledLightModeIcon />
      <StyledSwitch checked={isDark} onChange={toggleTheme} />
      <StyledDarkModeIcon />
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
