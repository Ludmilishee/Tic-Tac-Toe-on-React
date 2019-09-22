import React from "react";
import { Square } from '../square/square';
import './board.css';

export class Board extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td>{ this.renderSquare(0) }</td>
                    <td>{ this.renderSquare(1) }</td>
                    <td>{ this.renderSquare(2) }</td>
                </tr>
                <tr>
                    <td>{ this.renderSquare(3) }</td>
                    <td>{ this.renderSquare(4) }</td>
                    <td>{ this.renderSquare(5) }</td>
                </tr>
                <tr>
                    <td>{ this.renderSquare(6) }</td>
                    <td>{ this.renderSquare(7) }</td>
                    <td>{ this.renderSquare(8) }</td>
                </tr>
                </tbody>
            </table>
        );
    }

    renderSquare(i) {
        return (
            <Square value={ this.props.squares[i] }
                    onSquareClick={ () => this.props.onSquareClick(i) }
            />
        );
    }
}
