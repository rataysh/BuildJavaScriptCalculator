/** @format */

import "./App.css";
import React, {useState} from "react";
import {evaluate} from "mathjs";

function App() {
    const [display, setDisplay] = useState(0);
    const [result, setResult] = useState("");

    const calc = () => {
        setDisplay(evaluate(result));
        setResult(result + " = " + evaluate(result));
    };

    const handleInputNumber = (data) => {
        const Operator = (value) => {
            return isNaN(value) && value !== ".";
        };

        setDisplay(
            display == 0
                ? data
                : /=/.test(result)
                ? Operator(data)
                    ? display + data
                    : data
                : /\.\d*$/.test(display) === true && data === "."
                ? display
                : Operator(data) | Operator(display)
                ? data
                : display + data
        );
        setResult(
            /=/.test(result)
                ? Operator(data)
                    ? display + " " + data
                    : data
                : result === 0
                ? data
                : /\.\d*$/.test(display) === true && data === "."
                ? result
                : /[\*\/\+]+\-$/.test(result) && Operator(data)
                ? result.replace(/[\*\/\+]+\-$/, "") + " " + data
                : Operator(display) && Operator(data) && data !== "-"
                ? result.slice(0, -1) + data
                : result + data
        );
    };

    const clear = () => {
        setDisplay(0);
        setResult("");
    };

    const handleDicimal = () => {
        const arrDisp = display.split(" ");
        const lastElementDisp = arrDisp[arrDisp.length - 1];
        if (!lastElementDisp.includes(".")) {
            setDisplay(display + ".");
        }
        const arrResult = result.split(/\+|\-|\*|\\/);
        const lastElementResult = arrResult[arrResult.length - 1];
        if (!lastElementResult.includes(".")) {
            setResult(result + ".");
        }
    };

    return (
        <div className='App'>
            <div id='container'>
                <div className='display'>
                    <p id='output'>{result}</p>
                    <h1 id='display'>{display}</h1>
                </div>
                <div id='clear' className='button' onClick={clear}>
                    AC
                </div>
                <div
                    id='divide'
                    className='button'
                    onClick={() => handleInputNumber("/")}>
                    /
                </div>
                <div
                    id='multiply'
                    className='button'
                    onClick={() => handleInputNumber("*")}>
                    *
                </div>
                <div
                    id='seven'
                    className='button'
                    onClick={() => handleInputNumber("7")}>
                    7
                </div>
                <div
                    id='eight'
                    className='button'
                    onClick={() => handleInputNumber("8")}>
                    8
                </div>
                <div
                    id='nine'
                    className='button'
                    onClick={() => handleInputNumber("9")}>
                    9
                </div>
                <div
                    id='subtract'
                    className='button'
                    onClick={() => handleInputNumber("-")}>
                    -
                </div>
                <div
                    id='four'
                    className='button'
                    onClick={() => handleInputNumber("4")}>
                    4
                </div>
                <div
                    id='five'
                    className='button'
                    onClick={() => handleInputNumber("5")}>
                    5
                </div>
                <div
                    id='six'
                    className='button'
                    onClick={() => handleInputNumber("6")}>
                    6
                </div>
                <div
                    id='add'
                    className='button'
                    onClick={() => handleInputNumber("+")}>
                    +
                </div>
                <div
                    id='one'
                    className='button'
                    onClick={() => handleInputNumber("1")}>
                    1
                </div>
                <div
                    id='two'
                    className='button'
                    onClick={() => handleInputNumber("2")}>
                    2
                </div>
                <div
                    id='three'
                    className='button'
                    onClick={() => handleInputNumber("3")}>
                    3
                </div>
                <div id='equals' className='button' onClick={calc}>
                    =
                </div>
                <div
                    id='zero'
                    className='button'
                    onClick={() => handleInputNumber("0")}>
                    0
                </div>
                <div id='decimal' className='button' onClick={handleDicimal}>
                    .
                </div>
            </div>
        </div>
    );
}

export default App;
