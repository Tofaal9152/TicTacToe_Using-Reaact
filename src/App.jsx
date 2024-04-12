import React, { useState, useEffect } from 'react';
import TictacButton from './components/TictacButton';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const calculateWinner = () => {
      const winPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
      ];

      for (let i = 0; i < winPattern.length; i++) {
        const [a, b, c] = winPattern[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          setWinner(squares[a]);
          return squares[a];

        }
      }
      return null;
    };

    calculateWinner();
  }, [squares]);

  const handleClick = (i) => {

    if (winner || squares[i]) {
      return 0;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = isNext ? "X" : "O";
    setSquares(nextSquares);
    setIsNext(!isNext);

  };
  const handleReset = () => {
    setIsNext(true);
    setWinner(null);
    setSquares(Array(9).fill(null));
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen '>
      <h2 className='text-2xl bg-black text-white font-serif font-semibold mb-[1rem]'>Tic Tac Toe</h2>
      <div className="tictactoe">
        <div className='Row-1'>
          <TictacButton props={squares[0]} handlebtnClick={() => handleClick(0)} />
          <TictacButton props={squares[1]} handlebtnClick={() => handleClick(1)} />
          <TictacButton props={squares[2]} handlebtnClick={() => handleClick(2)} />
        </div>
        <div className='Row-2'>
          <TictacButton props={squares[3]} handlebtnClick={() => handleClick(3)} />
          <TictacButton props={squares[4]} handlebtnClick={() => handleClick(4)} />
          <TictacButton props={squares[5]} handlebtnClick={() => handleClick(5)} />
        </div>
        <div className='Row-3'>
          <TictacButton props={squares[6]} handlebtnClick={() => handleClick(6)} />
          <TictacButton props={squares[7]} handlebtnClick={() => handleClick(7)} />
          <TictacButton props={squares[8]} handlebtnClick={() => handleClick(8)} />
        </div>
      </div>
      <div className="bg-transparent hover:bg-blue-500  font-semibold text-white py-1 px-2 mt-[1rem] border border-blue-500 hover:border-transparent rounded">{winner ? `Winner: ${winner}` : `Turn: ${isNext ? "X" : "O"}`}</div>
      <button className="bg-transparent hover:bg-blue-500 font-semibold text-white py-1 px-2 mt-[1rem] border border-blue-500 hover:border-transparent rounded"
        onClick={handleReset}
      >Reset !</button>
    </div>
  );
};

export default App;
