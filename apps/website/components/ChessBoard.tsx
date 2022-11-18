"use client";

import { useEffect, useState } from "react";
import { Color, Move, PieceSymbol, Square, Chess } from "chess.js";

import init, { greet } from "chess_dev-chessboard";

import ChessSquare from "./ChessSquare";

const printBoard = (
	board: ({
		square: Square;
		type: PieceSymbol;
		color: Color;
	} | null)[][]
): JSX.Element => {
	return (
		<>
			{board.map((rank, r) => {
				return (
					<div key={`cr_0${r}`} className="flex">
						{rank.map((file, f) => {
							const color: Color = (r + f) % 2 === 0 ? "w" : "b";
							if (!file)
								return (
									<ChessSquare
										key={`cs_${r}${f}`}
										color={color}
										piece=""
									/>
								);

							return (
								<ChessSquare
									key={`cs_${r}${f}`}
									color={color}
									piece={
										file.color === "w"
											? file.type.toUpperCase()
											: file.type
									}
								/>
							);
						})}
					</div>
				);
			})}
		</>
	);
};

const ChessBoard = () => {
	const [chess, setChess] = useState<Chess>(new Chess());
	const [board, setBoard] = useState<JSX.Element>(printBoard(chess.board()));

	useEffect(() => {
		init().then((_exports) => {
			greet(); // Coming straight from rust baby
		});

		const playRandom = () => {
			setBoard(printBoard(chess.board()));

			if (!chess.isGameOver()) {
				const moves = chess.moves({ verbose: true }) as Move[];
				const move = moves[Math.floor(Math.random() * moves.length)];
				chess.move(move);

				setTimeout(playRandom, 1000);
			}
		};
		playRandom();

		let italianMoves = ["e4", "e5", "Nf3", "Nc6", "Bc4", "d6"];

		const playItalian = () => {
			if (italianMoves.length > 0) {
				chess.move(italianMoves[0]);
				italianMoves = italianMoves.slice(1);
				if (italianMoves.length === 0)
					chess.loadPgn(
						"1. e4 e5 2. Nf3 Nc6 3. Bc4 d6 {Italian opening} *"
					);

				setTimeout(playItalian, 1000);
			}
			setBoard(printBoard(chess.board()));
		};
		// chess.reset();
		// playItalian();
	}, [chess]);

	return (
		<div>
			<span className="block">
				{`Last move: ${
					chess.history()[chess.history().length - 1] ?? "None"
				}`}
			</span>
			<span className="block">
				{`Comment: ${chess.getComment() ?? "No comment"}`}
			</span>
			<div className="my-4 whitespace-pre-line font-mono">{board}</div>
			<button
				onClick={() => {
					chess.reset();
					setBoard(printBoard(chess.board()));
				}}
				className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-bold uppercase text-white transition will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:bg-emerald-600"
			>
				Reset board
			</button>
		</div>
	);
};

export default ChessBoard;
