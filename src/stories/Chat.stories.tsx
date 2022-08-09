import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chat from "../components/Chat";
import { defaultUser } from "../helpers/constants";

export default {
	title: "Components/Chat",
	component: Chat,
	parameters: {
		layout: "fullscreen",
	},
} as ComponentMeta<typeof Chat>;

const Template: ComponentStory<typeof Chat> = (args) => <Chat {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const UserTest = Template.bind({});
UserTest.args = {
	user: defaultUser,
};

export const DetailsTest = Template.bind({});
DetailsTest.args = {
	details: "This is another really cool description for this card.",
};
