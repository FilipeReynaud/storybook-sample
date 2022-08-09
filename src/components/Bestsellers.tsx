import React from "react";

// Internal
import Product from "./Product";
import Collapsible from "./Collapsible";
import Spacing from "./Spacing";
import { ProductType } from "../helpers/types";
import { defaultProductList } from "../helpers/constants";
import "./Bestsellers.css";

interface BestsellersProps {
	productList: Array<ProductType>;
}

export default function Bestsellers({
	productList = defaultProductList,
}: BestsellersProps) {
	return (
		<div className="bestsellers-box">
			<div id="bestsellers-main-div">
				<span className="bestsellers-span">Bestsellers</span>
				<Spacing qtd={24} />
				{productList.map((product) => (
					<Product
						brand={product.brand}
						model={product.model}
						price={product.price}
						image={product.image}
					/>
				))}
				<Spacing qtd={14} />
				<Collapsible title="Free Shipping" />
				<Spacing qtd={10} />
				<Collapsible title="Reviews (180)" />
			</div>
		</div>
	);
}
