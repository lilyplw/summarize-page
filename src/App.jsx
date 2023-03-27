import React, { useState, useEffect, createContext } from "react";
import MainPage from "./components/MainPage";
import "./App.css";

export const DataContext = createContext();

function App() {
	const [data, setData] = useState([]);
	const value = {
		data,
		setData,
	};
	useEffect(() => {
		fetch("https://api.sssapi.app/jNGrwTiYU4i1Sdjj1oCEl")
			.then((response) => response.json())
			.then((json) => setData(json));
	}, []);

	return (
		<DataContext.Provider value={value}>
			<MainPage />
		</DataContext.Provider>
	);
}

export default App;
