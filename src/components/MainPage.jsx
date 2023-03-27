import React, { useContext } from "react";
import { DataContext } from "../App";
import ItemList from "./ItemList";
import styled from "@emotion/styled";

const MainPage = () => {
	const { data, setData } = useContext(DataContext);
	const categories = data.map((item) => item.category);
	const uniqueCategories = new Set(categories);

	console.log(uniqueCategories);

	// const result = data.filter((item) => {
	// 	return item.category === "ストール";
	// });

	console.log(uniqueCategories);

	return (
		<MainPageComponent>
			<ItemList />
		</MainPageComponent>
	);
};

const MainPageComponent = styled.div``;

export default MainPage;
