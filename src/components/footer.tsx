import { StyledCopyrightIcon, StyledGitHubIcon } from "../Icons/Icons"
import { StyledFooter } from "../styles/StyledComponents"

const Footer = () => {
    return (
        <StyledFooter>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "0.6rem", justifyContent: "center"}}>
                <StyledGitHubIcon />
                <a href="https://github.com/luciohr3if" target="_blank">luciohr3if</a>
            </div>
            <h2>MADE WITH</h2>
            <div className="icon-footer-div">
                <img src=".\public\reactIcon.svg" alt="React Icon" />
                <img src=".\public\nodeIcon.svg" alt="Node Icon" />
                <img src=".\public\muiIcon.svg" alt="MUI Icon" />
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "0.6rem", justifyContent: "center"}}>
                <StyledCopyrightIcon/> 
                <p>
                    {new Date().getFullYear()} All rights reserved
                </p>
            </div>
        </StyledFooter>
    )
}
export default Footer