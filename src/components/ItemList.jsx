import React, { useContext } from "react";
import { DataContext } from "../App";
import ItemCard from "./ItemCard";
import styled from "@emotion/styled";

const ItemList = (props) => {
	const { data } = useContext(DataContext);

	const result = data.filter((item) => {
		return item.category === props.category;
	});

	console.log(props.category);

	return (
		<ItemListComponent>
			<h2 id={props.category}>
				<span>{props.category}</span>
			</h2>
			<ItemListData>
				{result.map((data) => (
					<>
						<ItemCard
							key={data.code}
							code={data.code}
							image={data.image}
							link={data.link}
							price={data.price}
						/>
					</>
				))}
			</ItemListData>
		</ItemListComponent>
	);
};

const ItemListComponent = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	@media screen and (max-width: 1024px) {
		padding: 10px;
	}
	h2 {
		position: relative;
		margin: 60px 10% 40px;
		text-align: center;
	}

	h2:before,
	h2:after {
		position: absolute;
		z-index: 0;
		bottom: -10px;
		display: block;
		content: "";
		border: 1em solid #d90606;
	}

	h2:before {
		left: -30px;
		border-left-width: 15px;
		border-left-color: transparent;
	}

	h2:after {
		right: -30px;
		border-right-width: 15px;
		border-right-color: transparent;
	}

	h2 span {
		position: relative;
		z-index: 1;
		display: block;
		padding: 1rem 2rem;
		color: #fff;
		background: #fa4141;
	}

	h2 span:before,
	h2 span:after {
		position: absolute;
		bottom: -10px;
		display: block;
		width: 10px;
		height: 10px;
		content: "";
		border-style: solid;
		border-color: #b70505 transparent transparent transparent;
	}

	h2 span:before {
		left: 0;
		border-width: 10px 0 0 10px;
	}

	h2 span:after {
		right: 0;
		border-width: 10px 10px 0 0;
	}
`;

const ItemListData = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 800px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export default ItemList;
