import React, { useContext } from "react";
import { DataContext } from "../App";
import ItemList from "./ItemList";
import styled from "@emotion/styled";
import CategoryButton from "./CategoryButton";
import ToTopButton from "./ToTopButton";

const MainPage = () => {
	const { data, setData } = useContext(DataContext);
	const categories = data.map((item) => item.category);
	const setArr = new Set(categories);
	const uniqueCategories = Array.from(setArr);

	return (
		<MainPageComponent>
			<Center>
				<h2 id="categoryTop">カテゴリを選択して下さい</h2>
				{uniqueCategories.map((value) => (
					<CategoryButton category={value} key={value} />
				))}
			</Center>
			<Center>
				{uniqueCategories.map((value) => (
					<ItemList category={value} key={value} />
				))}
			</Center>
			<ToTopButton />
			<MarginArea />
		</MainPageComponent>
	);
};

const MainPageComponent = styled.div`
	#categoryTop {
		margin: 0 0 20px 0;
	}
`;

const Center = styled.div`
	text-align: center;
	margin: 40px 0;
`;

const MarginArea = styled.div`
	content: "";
	width: 100%;
	height: 100px;
`;

export default MainPage;
