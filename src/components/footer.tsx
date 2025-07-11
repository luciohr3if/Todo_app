import { StyledFooter } from "../styles/StyledComponents"

const Footer = () => {
    return (
        <StyledFooter>
            <h2>MADE WITH</h2>
            <div className="icon-footer-div">
                <img src=".\public\reactIcon.svg" alt="React Icon" />
                <img src=".\public\nodeIcon.svg" alt="Node Icon" />
                <img src=".\public\muiIcon.svg" alt="MUI Icon" />
            </div>
        </StyledFooter>
    )
}
export default Footer