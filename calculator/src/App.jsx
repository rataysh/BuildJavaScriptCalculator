/** @format */

import "./App.css";
import React, {useState} from "react";
import {evaluate} from "mathjs";

export default function App() {
    const [display, setDisplay] = useState("0");
    const [result, setResult] = useState("0");

    const handleInputNumber = (event) => {
        const input = event.target.innerText;
        if (display === "0") {
            setDisplay(input);
            setResult(input);
        } else {
            setDisplay(display + input);
            setResult(display + input);
        }
    };

    const handleInputOperators = (event) => {
        const operator = event.target.innerText;
        setDisplay(display + " " + operator + " ");
    };

    const handleEqual = () => {
        setDisplay(evaluate(display));
        setResult(display + " = " + evaluate(display));
    };

    const handleDicimal = () => {
        const array = display.split(" ");
        const lastElement = array[array.length - 1];
        if (!lastElement.includes(".")) {
            setDisplay(display + ".");
        }
    };

    const handleClear = () => {
        setDisplay("0");
        setResult("0");
    };

    return (
        <div className='App'>
            <div id='container'>
                <div className='display'>
                    <div>{result}</div>
                    <div id='display'>{display}</div>
                </div>
                <div id='clear' className='button' onClick={handleClear}>
                    AC
                </div>
                <div
                    id='divide'
                    className='button'
                    onClick={handleInputOperators}>
                    /
                </div>
                <div
                    id='multiply'
                    className='button'
                    onClick={handleInputOperators}>
                    *
                </div>
                <div id='seven' className='button' onClick={handleInputNumber}>
                    7
                </div>
                <div id='eight' className='button' onClick={handleInputNumber}>
                    8
                </div>
                <div id='nine' className='button' onClick={handleInputNumber}>
                    9
                </div>
                <div
                    id='subtract'
                    className='button'
                    onClick={handleInputOperators}>
                    -
                </div>
                <div id='four' className='button' onClick={handleInputNumber}>
                    4
                </div>
                <div id='five' className='button' onClick={handleInputNumber}>
                    5
                </div>
                <div id='six' className='button' onClick={handleInputNumber}>
                    6
                </div>
                <div id='add' className='button' onClick={handleInputOperators}>
                    +
                </div>
                <div id='one' className='button' onClick={handleInputNumber}>
                    1
                </div>
                <div id='two' className='button' onClick={handleInputNumber}>
                    2
                </div>
                <div id='three' className='button' onClick={handleInputNumber}>
                    3
                </div>
                <div id='equals' className='button' onClick={handleEqual}>
                    =
                </div>
                <div id='zero' className='button' onClick={handleInputNumber}>
                    0
                </div>
                <div id='decimal' className='button' onClick={handleDicimal}>
                    .
                </div>
            </div>
        </div>
    );
}
