import React, { useContext } from "react";
import { DataContext } from "../App";
import ItemList from "./ItemList";
import styled from "@emotion/styled";

const MainPage = () => {
	const { data, setData } = useContext(DataContext);
	const categories = data.map((item) => item.category);
	const setArr = new Set(categories);
	const uniqueCategories = Array.from(setArr);

	return (
		<MainPageComponent>
			{uniqueCategories.map((value) => (
				<ItemList category={value} key={value} />
			))}
		</MainPageComponent>
	);
};

const MainPageComponent = styled.div``;

export default MainPage;
