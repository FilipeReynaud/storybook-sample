import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Internal
import Bestsellers from "../components/Bestsellers";
import { defaultProductList } from "../helpers/constants";

export default {
	title: "Components/Bestsellers",
	component: Bestsellers,
	parameters: {
		layout: "fullscreen",
	},
} as ComponentMeta<typeof Bestsellers>;

const Template: ComponentStory<typeof Bestsellers> = (args) => (
	<Bestsellers {...args} />
);

export const Default = Template.bind({});
Default.args = { productList: defaultProductList };

export const OneProduct = Template.bind({});
OneProduct.args = { productList: defaultProductList.slice(0, 1) };

export const TwoProducts = Template.bind({});
TwoProducts.args = { productList: defaultProductList.slice(0, 2) };

export const ThreeProducts = Template.bind({});
ThreeProducts.args = { productList: defaultProductList.slice(0, 3) };
