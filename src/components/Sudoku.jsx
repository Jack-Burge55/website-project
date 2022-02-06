import React, { useEffect } from "react";

function Sudoku() {
    

    function Square() {
        const [temp, setTemp] = React.useState("")
        return (
            <input 
            type = "text"
            value={temp}
            className="square"
            onChange={(e) => "123456789".includes(e.target.value.slice(-1)) && setTemp(e.target.value.slice(-1))}
            />
        );
      }

    function Row() {
        return (
            <div className="SudokuRow">
                {Square()}
                {Square()}
                {Square()}
                {Square()}
                {Square()}
                {Square()}
                {Square()}
                {Square()}
                {Square()}
            </div>
        )
    }

    return (
        <>
            <h1>This is the Sudoku page</h1>
            <div className="divBack">
                {Row()}
                {Row()}
                {Row()}
                {Row()}
                {Row()}
                {Row()}
                {Row()}
                {Row()}
                {Row()}
            </div>
        </>
    );
}

export default Sudoku;