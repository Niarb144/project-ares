"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type Player = "X" | "O" | null;

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [current, setCurrent] = useState<"X" | "O">("X");
  const [playing, setPlaying] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [twoPlayer, setTwoPlayer] = useState(true);
  type Difficulty = "easy" | "medium" | "hard";

  const [difficulty, setDifficulty] = useState<Difficulty>("medium");


  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const checkWin = (b: Player[]) => {
  for (const [a, b1, c] of winningCombos) {
    if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
      return { winner: b[a] };
    }
  }
  if (b.every(cell => cell !== null)) return { draw: true };
  return null;
};


  const handleClick = (i: number) => {
    if (!playing || board[i]) return;

    const newBoard = [...board];
    newBoard[i] = current;
    setBoard(newBoard);

    const result = checkWin(newBoard);

    if (result) {
      setPlaying(false);
      if ((result as any).winner) {
        const winner = (result as any).winner as "X" | "O";
        setScores(prev => ({ ...prev, [winner]: prev[winner] + 1 }));
      }
      return;
    }

    const next = current === "X" ? "O" : "X";
    setCurrent(next);

    if (!twoPlayer && next === "O") {
      setTimeout(aiMove, 200);
    }
  };

  const aiMove = () => {
  if (difficulty === "easy") {
    easyAIMove();
  } else if (difficulty === "medium") {
    mediumAIMove();
  } else {
    hardAIMove();
  }
};

const easyAIMove = () => {
  const empty = board
    .map((v, i) => (v === null ? i : null))
    .filter(i => i !== null) as number[];

  const move = empty[Math.floor(Math.random() * empty.length)];
  handleClick(move);
};

const mediumAIMove = () => {
  // Win if possible
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const copy = [...board];
      copy[i] = "O";
      if (checkWin(copy)?.winner === "O") return handleClick(i);
    }
  }

  // Block X
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const copy = [...board];
      copy[i] = "X";
      if (checkWin(copy)?.winner === "X") return handleClick(i);
    }
  }

  // Priority order
  const order = [4, 0, 2, 6, 8, 1, 3, 5, 7];
  for (const i of order) if (!board[i]) return handleClick(i);
};

const minimax = (b: Player[], isMax: boolean): number => {
  const result = checkWin(b);
  if (result?.winner === "O") return 10;
  if (result?.winner === "X") return -10;
  if (result?.draw) return 0;

  if (isMax) {
    let best = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (!b[i]) {
        b[i] = "O";
        best = Math.max(best, minimax(b, false));
        b[i] = null;
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < 9; i++) {
      if (!b[i]) {
        b[i] = "X";
        best = Math.min(best, minimax(b, true));
        b[i] = null;
      }
    }
    return best;
  }
};

const hardAIMove = () => {
  let bestScore = -Infinity;
  let move = 0;

  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const copy = [...board];
      copy[i] = "O";
      const score = minimax(copy, false);
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  handleClick(move);
};


  const restart = () => {
    setBoard(Array(9).fill(null));
    setCurrent("X");
    setPlaying(true);
  };

  return (
    <main>
        <Navbar />
        <div className="w-full max-w-md mx-auto md:mt-14 p-6 bg-slate-900 text-slate-100 rounded-2xl shadow-xl border border-slate-800">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Xs & Os</h1>
                <button
                onClick={() => setTwoPlayer(!twoPlayer)}
                className="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600"
                >
                {twoPlayer ? "2-Player" : "1-Player (AI)"}
                </button>

                <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                    disabled={twoPlayer}
                    className="ml-2 px-2 py-1 bg-slate-700 rounded text-sm"
                    >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

            </div>

            <p className="text-slate-400 mb-3">{playing ? `Player ${current}'s turn` : "Game Over"}</p>

            <div className="grid grid-cols-3 gap-3">
                {board.map((val, i) => (
                <button
                    key={i}
                    onClick={() => handleClick(i)}
                    className={`aspect-square rounded-lg flex items-center justify-center text-4xl font-bold shadow bg-slate-800 hover:bg-slate-700 ${
                    val === "X" ? "text-cyan-300" : val === "O" ? "text-pink-300" : ""
                    }`}
                >
                    {val}
                </button>
                ))}
            </div>

            <div className="flex justify-between items-center mt-6">
                <button
                onClick={restart}
                className="px-4 py-2 bg-cyan-400 text-slate-900 rounded-lg font-semibold hover:bg-cyan-300"
                >
                Restart
                </button>
                <div className="text-sm text-slate-400">
                Score — X: <span className="text-cyan-300 font-bold">{scores.X}</span> | O: <span className="text-pink-300 font-bold">{scores.O}</span>
                </div>
            </div>
        </div>
        <Footer />
    </main>
    
  );
}
