import React from "react";

// Internal
import "./Product.css";

interface ProductProps {
	brand: string;
	model: string;
	price: string;
	image: string;
}

export default function Product({ brand, model, price, image }: ProductProps) {
	return (
		<div className="product-main-div">
			<img src={image} className="product-image" alt="product" />
			<div className="product-details">
				<span className="product-model">{model}</span>
				<span className="product-brand">{brand}</span>
				<span className="product-price">{price}</span>
			</div>
		</div>
	);
}
