import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const ToTopButton = () => {
	return (
		<a href="#categoryTop">
			<CustomButton variant="contained">▲</CustomButton>
		</a>
	);
};

const CustomButton = styled(Button)`
	border-radius: 50%;
	padding: 20px;
	position: fixed;
	bottom: 5%;
	left: 5%;
	background-color: #ef9a9a;
	&:hover {
		background-color: #ef5350;
	}
`;

export default ToTopButton;
