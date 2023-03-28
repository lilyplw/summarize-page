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
	a img {
		width: 100%;
		height: auto;
	}
`;

export default ItemCard;
