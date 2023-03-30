import React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const CategoryButton = (props) => {
	return (
		<a href={`#${props.category}`}>
			<CustomButton variant="contained">
				<span>{props.category}</span>
			</CustomButton>
		</a>
	);
};

const CustomButton = styled(Button)`
	margin: 10px;
	padding: 20px 40px;
	background-color: #ef9a9a;
	&:hover {
		background-color: #ef5350;
	}
	span {
		color: white;
		font-size: 20px;
	}
`;

export default CategoryButton;
