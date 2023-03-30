import React from "react";
import styled from "@emotion/styled";

const ItemCard = (props) => {
	return (
		<ItemCardComponent>
			<a href={props.link}>
				<img src={props.image} alt={props.code} />
				<h3>¥ {props.price.toLocaleString()}</h3>
			</a>
		</ItemCardComponent>
	);
};

const ItemCardComponent = styled.div`
	width: 48%;
	margin: 2% 0;
	padding: 20px;
	border-radius: 10px;
	box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
		rgba(17, 17, 26, 0.1) 0px 0px 8px;
	a img {
		width: 100%;
		height: auto;
	}
`;

export default ItemCard;
