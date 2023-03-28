import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Img1 from "../assets/imgKimonofun1.webp";
import Img2 from "../assets/imgKimonofun2.webp";
import Img3 from "../assets/imgKimonofun3.webp";
import styled from "@emotion/styled";

const SplideComponent = () => {
	return (
		<FlexComponent>
			<CustomSplide
				options={{
					rewind: true,
					autoplay: true,
					type: "fade",
					gap: "1rem",
					interval: 3000,
					speed: 2000,
					arrows: false,
					pauseOnHover: false,
					pagination: false,
				}}
			>
				<CustomSplideSlide>
					<img src={Img1} alt="" />
				</CustomSplideSlide>
				<CustomSplideSlide>
					<img src={Img2} alt="" />
				</CustomSplideSlide>
				<CustomSplideSlide>
					<img src={Img3} alt="" />
				</CustomSplideSlide>
			</CustomSplide>
			<TextArea>
				<h1>
					<span>大切な</span>
					<span>お母さんに</span>
					<span>送るギフト</span>
				</h1>
				<p>
					きものfunではギフト包装に力を入れています。きものfunではギフト包装に力を入れています。
					きものfunではギフト包装に力を入れています。きものfunではギフト包装に力を入れています。きものfunではギフト包装に力を入れています。きものfunではギフト包装に力を入れています。
					きものfunではギフト包装に力を入れています。
					きものfunではギフト包装に力を入れています。
					きものfunではギフト包装に力を入れています。
					きものfunではギフト包装に力を入れています。
					きものfunではギフト包装に力を入れています。
				</p>
			</TextArea>
		</FlexComponent>
	);
};

const FlexComponent = styled.div`
	display: flex;
	align-items: center;
`;

const TextArea = styled.div`
	flex-basis: 30%;
	padding: 40px;
	h1 {
		font-size: 80px;
	}
`;

const CustomSplide = styled(Splide)`
	width: 100%;
	flex-basis: 70%;
`;

const CustomSplideSlide = styled(SplideSlide)`
	padding: 40px;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
		border-radius: 20px;
		margin: 0;
		padding: 0;
	}
`;

export default SplideComponent;
