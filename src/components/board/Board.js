import React from 'react';
import Cell from '../cell/Cell';
import './Board.css';

const Board = ({cells, moveHandler, disabled}) => {
    const cellsToRender = cells.map((cell, index) => {
        return <Cell key={index} value={cell} disabled={disabled} moveHandler={() => moveHandler(index)} /> 
    });

    return <div className="board">{cellsToRender}</div>;
}

export default Board;
