import React, { useContext } from "react";
import { DataContext } from "../App";
import ItemCard from "./ItemCard";
import styled from "@emotion/styled";

const ItemList = () => {
	const { data } = useContext(DataContext);
	return (
		<ItemListComponent>
			{data.map((data) => (
				<ItemCard
					key={data.code}
					code={data.code}
					image={data.image}
					link={data.link}
					price={data.price}
				/>
			))}
		</ItemListComponent>
	);
};

const ItemListComponent = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 800px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export default ItemList;
