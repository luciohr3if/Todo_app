import Switch from "@mui/material/Switch";
import { StyledDarkModeIcon, StyledLightModeIcon } from "../Icons/Icons";

const ThemeToggle = ({ currentTheme, toggleTheme }) => {
  const isDark = currentTheme === "dark";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", alignSelf: "flex-end" }}>
      <StyledLightModeIcon />
      <Switch
        checked={isDark}
        onChange={toggleTheme}
        color="default"
      />
      <StyledDarkModeIcon />
    </div>
  );
};

export default ThemeToggle;
