import React from 'react';
import './style.css';

function FourZeroFour() {
    /**
     * Random number generator between given minimum and maximum
     * Both values are included Ex.: genRandom(0, 10) gives random between 0 and 10
     * @param {number} min - Minimum value (included)
     * @param {number} max - Maximum value (included)
     */
    function genRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /**
     * Returns the length of an object
     * @param {object} obj - Object to read the length of
     */
    function length(obj) {
        return Object.keys(obj).length
    }

    /**
     * Changes the colors to the generated values
     * @param {array} currentColor - Array containing the colors to be used
     */
    function setColor(currentColor) {
        let root = document.documentElement;
        root.style.setProperty('--color1', currentColor[0]);
        root.style.setProperty('--color2', currentColor[1]);
    }

    /** Object with all the gradients.
     * Gradients obtained from https://uigradients.com */
    let data = {
        "gradients": [
            {"name": "By Design", "colors": ["#009FFF", "#ec2F4B"]},
            {"name": "Rainbow Blue", "colors": ["#00F260", "#0575E6"]},
            {"name": "Crystal Clear", "colors": ["#159957", "#155799"]},
            {"name": "Chitty Chitty Bang Bang", "colors": ["#007991", "#78ffd6"]},
            {"name": "Mini", "colors": ["#30E8BF", "#FF8235"]},
            {"name": "Can You Feel The Love Tonight", "colors": ["#4568DC", "#B06AB3"]},
            {"name": "Ibiza Sunset", "colors": ["#ee0979", "#ff6a00"]},
            {"name": "Ali", "colors": ["#ff4b1f", "#1fddff"]},
        ]
    }

    let gradients = data.gradients;
    let col = gradients[genRandom(0, length(gradients))].colors;
    setColor(col);


    return (
        <div className='holder'>
            <div className="error-message">
                <h1>
                    Seems like the page you are looking for doesn't exist
                </h1>
                <h2>
                    Visit the <a id="homelink" href="https://bernawastaken.github.io/">homepage</a> to try to
                    find what you're looking for
                </h2>
            </div>
        </div>
    );
}

export default FourZeroFour;
