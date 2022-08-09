import React from "react";

// MUI
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

// Internal
import { User } from "../helpers/types";
import { defaultUser, defaultDetails } from "../helpers/constants";
import "./Chat.css";

interface ChatProps {
	user?: User;
	details?: string;
}

export default function Chat({
	user = defaultUser,
	details = defaultDetails,
	...props
}: ChatProps) {
	return (
		<div id="chat-box">
			<div className="chat-box-info-div">
				<div className="chat-box-content">
					<div className="chat-box-content-row">
						<img
							className="avatar-image"
							src={user.avatar}
							alt="avatar"
						/>
						<div className="user-details">
							<span className="user-name">{user.name}</span>
							<span className="user-job">{user.job}</span>
						</div>
						<div className="close-icon-div">
							<IconButton
								aria-label="close"
								className="close-icon-button"
							>
								<CloseIcon />
							</IconButton>
						</div>
					</div>
					<div className="chat-box-content-row">
						<span className="details">{details}</span>
					</div>
				</div>
			</div>
			<div className="chat-box-message-div">
				<div className="chat-box-input-div">
					<input
						name="Input"
						className="custom-input"
						placeholder="Type your message..."
					/>
					<Button variant="text" className="send-button">
						Send
					</Button>
				</div>
			</div>
		</div>
	);
}
