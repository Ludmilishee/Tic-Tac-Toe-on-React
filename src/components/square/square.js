import React from 'react';
import './square.css';

export function Square(props) {
    return (
        <button className="square"
                onClick={ () => props.onSquareClick() }
        >
            { props.value }
        </button>
    );
}
