import React from 'react';
import Content from "./Content";
import {Link, NavLink} from "react-router-dom";
import Twemoji from "./Twemoji/Twemoji";
import '../App.css';

const Main = () => {
    return (
        <>
            <div className="info">
                <Link to='/'>
                    <h1 className="name">Bernardo<br/>Oliveira</h1>
                </Link>
                <nav className="🧾">
                    <NavLink to='/about' activeClassName='selected' allowtransparency='true'>
                        <h2>About Me</h2>
                    </NavLink>
                    <NavLink to='/tech' activeClassName='selected' allowtransparency='true'>
                        <h2>Technologies I use</h2>
                    </NavLink>
                    <NavLink to='/interests' activeClassName='selected' allowtransparency='true'>
                        <h2>Interests</h2>
                    </NavLink>
                </nav>
                <footer>Made with Love <Twemoji emoji='❤'/> and Coffee <Twemoji emoji='☕'/> | <a
                    href="https://github.com/bernawastaken/bernawastaken.github.io">This website is <strong>Open
                    Source</strong></a></footer>
            </div>
            <div className="gradient">
                <Content/>
            </div>
        </>
    )
};

export default Main;
