import React from 'react';
import Content from "./Content";
import {Link} from "react-router-dom";
import Twemoji from "./Twemoji/Twemoji";

const Main = () => {
    return (
        <>
            <div className="info">
                <Link to='/'>
                    <h1 className="name">Bernardo<br/>Oliveira</h1>
                </Link>
                <nav className="🧾">
                    <Link to='/about'>
                        <h2>About Me</h2>
                    </Link>
                    <Link to='/tech'>
                        <h2>Technologies I use</h2>
                    </Link>
                    <Link to='/interests'>
                        <h2>Interests</h2>
                    </Link>
                </nav>
                <footer>Made with Love <Twemoji emoji='❤'/> and Coffee <Twemoji emoji='☕'/> | <a href="https://github.com/bernawastaken/bernawastaken.github.io">This website is <strong>Open Source</strong></a></footer>
            </div>
            <div className="gradient">
                <Content/>
            </div>
        </>
    )
};

export default Main;
