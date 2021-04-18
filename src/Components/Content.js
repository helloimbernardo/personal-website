import React from 'react';
import Twemoji from './Twemoji/Twemoji'
import {Route, Switch} from "react-router-dom";

const Content = (props) => {
    return (
        <Switch>
            <Route path='/' exact={true}>
                <></>
            </Route>
            <Route path='/about'>
                <div className='content'>
                    <AboutMe/>
                </div>
            </Route>
            <Route path='/tech'>
                <div className='content'>
                    <Tech/>
                </div>
            </Route>
            <Route path='/interests'>
                <div className='content'>
                    <Interests/>
                </div>
            </Route>
        </Switch>
    )
}

const AboutMe = () => (
    <div className='text aboutme'>
        <h3>Hi, I'm <span className='highlight'>Bernardo Oliveira</span></h3>
        <p>I'm a development student from Portugal <Twemoji emoji='🇵🇹'/></p>
        <p>I'm passionate about technology <Twemoji emoji='💻'/>, design <Twemoji emoji='🎨'/>, nature <Twemoji
            emoji='🌲'/>, music <Twemoji emoji='🎵'/> and equality <Twemoji emoji='🌍'/>.</p>
        <div className="links">
            <a href="https://github.com/bernawastaken/" className='ghlink'>You can check out my <span
                className='highlight'>GitHub</span></a>
        </div>
    </div>
);

const Tech = () => (
    <div className='text tech'>
        <h3>Techonologies I use</h3>
        <p>I am extremely familiar with Web Development related languages like <strong>HTML</strong> <i
            className="devicon-html5-plain colored"/>, <strong>CSS</strong> <i className="devicon-css3-plain colored"/>,
            and <strong>JavaScript</strong> <i className="devicon-javascript-plain colored"/>. I also use server-side
            technologies such as <strong>PHP</strong> <i
                className="devicon-php-plain colored"/> and <strong>Node.JS</strong> <i
                className="devicon-nodejs-plain colored"/></p>
        <p>I am also familiar with <strong>React.JS</strong> <i className="devicon-react-original colored"/> and
            the <strong>NPM</strong> <i className="devicon-npm-original-wordmark colored"/> and <strong>Yarn</strong> <i
                className="devicon-yarn-plain colored"/> package managers for Node.JS</p>
        <p>I am also very comfortable with the <strong>Git</strong> <i className="devicon-git-plain colored"/> Version
            Control system as well with <strong>Linux</strong> <i className="devicon-linux-plain colored"/> based
            operating systems</p>
    </div>
);

const Interests = () => (
    <div className='text interests'>
        <h3>My Interests</h3>
        <p className='nomargin'>I love listening to music <Twemoji emoji='🎧'/>, and <a
            href="https://open.spotify.com/user/bernardooliveirajb">you can check out what I've been listening to on
            spotify</a></p>
        <iframe src="https://open.spotify.com/follow/1/?uri=spotify:user:bernardooliveirajb&size=detail&theme=light"
                width="300" height="56" scrolling="no" frameBorder="0"
                allowTransparency="true"/>
        <p>I also like reading <Twemoji emoji='📚'/>, photography <Twemoji emoji='📷'/>, enjoying nature <Twemoji
            emoji='🏞'/> and travelling <Twemoji emoji='✈'/>.</p>
    </div>
);

export default Content;
