import { StyledFooter } from "../styles/StyledComponents"

const Footer = () => {
    return (
        <StyledFooter>
            <h2>MADE WITH</h2>
            <div className="icon-footer-div">
                <img width={"35px"} height={"35px"} src=".\public\reactIcon.svg" alt="React Icon" />
                <img width={"35px"} height={"35px"} src=".\public\nodeIcon.svg" alt="Node Icon" />
                <img width={"35px"} height={"35px"} src=".\public\muiIcon.svg" alt="MUI Icon" />
            </div>
        </StyledFooter>
    )
}
export default Footer