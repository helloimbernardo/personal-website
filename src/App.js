import React from 'react';
import Main from "./Components/Main";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Main/>
            </Router>
        </div>
    );
}

export default App;
