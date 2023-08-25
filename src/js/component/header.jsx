import React from "react";

function Header (props) {
    return (
        <nav className="navbar bg-dark text-light">
            <h3 className="ms-3">{props.title}</h3>
            <div>
                <a className="m-3" href="#">Home</a>
                <a className="m-3" href="#">About</a>
                <a className="m-3" href="#">Service</a>
                <a className="m-3" href="#">Contact</a>
            </div>
        </nav>
    )
}

export default Header