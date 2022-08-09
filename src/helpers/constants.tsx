import { User, ProductType } from "./types";
import avatar from "../assets/avatar.svg";
import Nike1 from "../assets/nike-1.svg";
import Nike2 from "../assets/nike-2.svg";
import Nike3 from "../assets/nike-3.svg";

export const defaultUser: User = {
	name: "Emily Dougrer",
	job: "Developer",
	avatar: avatar,
};
export const defaultDetails: string =
	"Hi there. 👋 We use Boards to share initial goals and ideas.";

export const defaultProductList: Array<ProductType> = [
	{
		brand: "Nike",
		model: "Nike Air Max 270",
		price: "$195.80",
		image: Nike1,
	},
	{
		brand: "Nike",
		model: "Nike Air Max 90",
		price: "$195.80",
		image: Nike2,
	},
	{
		brand: "Nike",
		model: "Nike Air Max Plus",
		price: "$195.80",
		image: Nike3,
	},
];
