import React from 'react'

function Header() {
    const headerStyle = {
        padding: "20px 50px",
        textAlign: "center"
    }
    return(
        <header style={headerStyle}>
            <h1>Colored Photo Collage Generator</h1>
            <hr />
        </header>
    )
}

export default Header