import { useState } from 'react';
import Board from './components/Board';

function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNum, setStepNum] = useState(0);

  const calculateWinner = (squares) => {
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const current = history[stepNum];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = 'Winner : ' + winner;
  } else {
    status = `Next Player : ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (index) => {
    const newHistory = history.slice(0, stepNum + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = [...newCurrent.squares];
    if (calculateWinner(newSquares) || newSquares[index]) return;
    newSquares[index] = xIsNext ? 'X' : 'O';
    setHistory([...newHistory, { squares: newSquares }]);
    setXIsNext((state) => !state);
    setStepNum(newHistory.length);
  };

  const moves = history.map((step, index) => {
    const desc = index ? 'Go to move #' + index : 'Go to game start';
    return (
      <li className='m-0 p-0' key={JSON.stringify(step)}>
        <button
          onClick={() => jumpTo(index)}
          className='w-[200px] bg-[#e94057] p-[10px] rounded-[5px] text-white'
        >
          {desc}
        </button>
      </li>
    );
  });

  const jumpTo = (step) => {
    setStepNum(step);
    setXIsNext(step % 2 === 0);
  };

  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='w-[500px] my-[20px] flex flex-col justify-center items-center'>
        <p className='text-[35px] my-[30px]'>Tic Tac Toe</p>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-xl my-[10px]'>{status}</p>
        <div className='h-[310px] overflow-y-scroll scrollbar-hide'>
          <ol className='flex flex-col justify-center items-center gap-[10px] m-0 p-0'>
            {moves}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
