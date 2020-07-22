import React from "react"

const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em"
}

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Simple Todo App</h1>
            <p>Please add to-do items through the input field</p>
        </header>
    )
}

export default Header