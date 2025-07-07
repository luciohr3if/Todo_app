const StyledFooter = () => {
    return (
        <div style={{display: "flex", margin: 0, width: "1440px", backgroundColor: "grey", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "auto"}}>
            <h2>MADE WITH</h2>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px"}}>
                <img src=".\public\muiIcon.svg" alt="MUI Icon" />
                <img src=".\public\reactIcon.svg" alt="React Icon" />
                <img src=".\public\nodeIcon.svg" alt="Node Icon" />
            </div>
        </div>
    )
}
export default StyledFooter