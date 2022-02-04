import React, { Component } from 'react';
import Board from '../board/Board';
import './Game.css';

class Game extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
            board: Array(9).fill(''),
            x: true,
            disabled: false,
        };
    }

    checkWinner (cell) {
        const winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winCombinations.length; i++) {
            const [a, b, c] = winCombinations[i];
            if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
                return cell[a];
            }
        }
        return null;
    }

    moveHandler = move => {
        const currentBoard = this.state.board;
        const winner = this.checkWinner(currentBoard);

        if (winner || currentBoard[move]) {
            return this.setState({
                disabled: true,
            });
        }

        currentBoard[move] = this.state.x ? 'X' : 'O';

        this.setState({
            board : currentBoard,
            x: !this.state.x,
        });


    }

    newGame = () => {
        const newGameHandler = () => {
            this.setState({
                board: Array(9).fill(''),
                disabled: false
            })
        };
        return <button className="start-btn" onClick={newGameHandler}>New game</button>
    }
    
    render () {
        return (
            <div className="wrapper">
                <Board disabled={this.state.disabled} cells={this.state.board} moveHandler={this.moveHandler}/>
                {this.newGame()}
                <p className="game-text">
                    {
                        this.checkWinner(this.state.board) ? `${this.checkWinner(this.state.board)} won!` : `${this.state.x ? 'X' : 'O'} move`    
                    }
                </p>
            </div>
        );
    }
}

export default Game;
