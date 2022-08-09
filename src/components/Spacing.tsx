import React from "react";

interface SpacingProps {
	direction?: "h" | "v";
	qtd: number;
}

export default function Spacing({ direction = "v", qtd }: SpacingProps) {
	const styles: Object =
		direction === "v"
			? {
					height: qtd > 0 ? qtd : 0,
			  }
			: {
					width: qtd > 0 ? qtd : 0,
			  };
	return <div style={styles}></div>;
}
