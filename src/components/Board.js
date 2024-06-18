import React, { Component, useState } from 'react';
import Square from './Square';

// export default class Board extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//     };
//   }

//   handleClick(index) {
//     const squares = [...this.state.squares];
//     squares[index] = 'X';
//     this.setState({ squares });
//   }
//   renderSquare(index) {
//     return (
//       <Square
//         value={this.state.squares[index]}
//         onClick={() => this.handleClick(index)}
//       />
//     );
//   }
//   render() {
//     return (
//       <div>
//         <div className='mb-[10px]'>Next Player : X, O</div>
//         <div className='flex'>
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className='flex'>
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className='flex'>
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

const Board = ({ squares, onClick }) => {
  const renderSquare = (index) => {
    return <Square value={squares[index]} onClick={() => onClick(index)} />;
  };

  return (
    <div className='size-full rounded-[15px] overflow-hidden'>
      <div className='flex'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='flex'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='flex'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
