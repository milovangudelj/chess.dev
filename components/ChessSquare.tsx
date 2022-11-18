import { Color } from "chess.js";
import Image, { StaticImageData } from "next/image";
import bb from "../public/assets/images/pieces/bb.png";
import bk from "../public/assets/images/pieces/bk.png";
import bn from "../public/assets/images/pieces/bn.png";
import bp from "../public/assets/images/pieces/bp.png";
import bq from "../public/assets/images/pieces/bq.png";
import br from "../public/assets/images/pieces/br.png";
import wb from "../public/assets/images/pieces/wb.png";
import wk from "../public/assets/images/pieces/wk.png";
import wn from "../public/assets/images/pieces/wn.png";
import wp from "../public/assets/images/pieces/wp.png";
import wq from "../public/assets/images/pieces/wq.png";
import wr from "../public/assets/images/pieces/wr.png";

const pieceMap: {
	[key: string]: { label: string; color: string; src: StaticImageData };
} = {
	b: { label: "bishop", color: "Black", src: bb },
	k: { label: "king", color: "Black", src: bk },
	n: { label: "knight", color: "Black", src: bn },
	p: { label: "pawn", color: "Black", src: bp },
	q: { label: "queen", color: "Black", src: bq },
	r: { label: "rook", color: "Black", src: br },
	B: { label: "bishop", color: "White", src: wb },
	K: { label: "king", color: "White", src: wk },
	N: { label: "knight", color: "White", src: wn },
	P: { label: "pawn", color: "White", src: wp },
	Q: { label: "queen", color: "White", src: wq },
	R: { label: "rook", color: "White", src: wr },
};

const ChessSquare = ({ color, piece }: { color: Color; piece?: string }) => {
	return (
		<div
			className={`${
				color === "w"
					? "bg-emerald-50 text-black"
					: "bg-emerald-700 text-white"
			} flex h-16 w-16 items-center justify-center whitespace-pre`}
		>
			{piece && (
				<Image
					src={pieceMap[piece].src}
					alt={`${pieceMap[piece].color}'s ${pieceMap[piece].label}`}
					title={`${pieceMap[piece].color}'s ${pieceMap[piece].label}`}
				/>
			)}
		</div>
	);
};

export default ChessSquare;
