import React from "react";
import './game.css';
import { Board } from '../board/board';

export class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [
                { squares: Array(9).fill(null), }
            ],
            stepNumber: 0,
            xIsNext: true
        }
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);
        const status = winner
            ? 'Winner: ' + winner
            : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        const moves = history.map((step, index) => {
            const description = index ?
                'Перейти к ходу #' + index :
                'К началу игры';
            return (
                <li key={index}>
                    <button onClick={() => this.jumpTo(index)}>{description}</button>
                </li>
            );
        });

        return (
            <div>
                <h1>{ status }</h1>
                <Board
                    squares={ current.squares }
                    onSquareClick={ (i) => this.onSquareClick(i) }
                />
                <ol>{ moves }</ol>
            </div>
        );
    }

    onSquareClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history.slice(-1)[0];
        const squares = current.squares.slice();

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: [
                ...history,
                { squares: squares }
            ],
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }
}
