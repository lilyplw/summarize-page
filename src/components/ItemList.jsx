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
			<h2>{props.category}</h2>
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

const ItemListComponent = styled.div``;

const ItemListData = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 800px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export default ItemList;
