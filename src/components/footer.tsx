import { StyledGitHubIcon } from "../Icons/Icons"
import { StyledFooter, StyledSpan } from "../styles/StyledComponents"

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <StyledFooter>
            <StyledSpan>
                <StyledGitHubIcon />
                <a href="https://github.com/luciohr3if" target="_blank">luciohr3if</a>
            </StyledSpan>    
            <StyledSpan>© {date}</StyledSpan>
        </StyledFooter>
    )
}
export default Footer