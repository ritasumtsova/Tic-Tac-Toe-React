import React from 'react';
import './Cell.css';

const Cell = ({value, moveHandler, disabled}) => <button className="cell" disabled={disabled} onClick={moveHandler}>{value}</button>;

export default Cell;
