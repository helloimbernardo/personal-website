import React from 'react';
import Main from "./Components/Main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FourZeroFour from "./Components/404";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact={true}>
                    <div className="App">
                        <Main/>
                    </div>
                </Route>
                <Route path='/about'>
                    <div className="App">
                        <Main/>
                    </div>
                </Route>
                <Route path='/tech'>
                    <div className="App">
                        <Main/>
                    </div>
                </Route>
                <Route path='/interests'>
                    <div className="App">
                        <Main/>
                    </div>
                </Route>
                <Route>
                    <FourZeroFour/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
