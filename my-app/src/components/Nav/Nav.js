import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav>
        <ul>
            <li className="brand animated lightSpeedIn">
                <a href="/clicky-game/"> {props.title} </a>
            </li>
            <li id="msg">
                {props.message}
            </li>
            <li id="currentScore">
                Current Score: {props.score}
            </li>
            <li id="highScore">
                Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
);

export default Nav;