import React from "react";

// MUI
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Internal
import "./Collapsible.css";

interface CollapsibleProps {
	title: string;
}

export default function Collapsible({ title }: CollapsibleProps) {
	return (
		<div className="collapsible-div">
			<span className="collapsible-title">{title}</span>
			<ExpandMoreIcon />
		</div>
	);
}
