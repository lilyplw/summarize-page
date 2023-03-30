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
					きものfunは福岡県柳川市にて創業55周年を迎えた呉服屋です。2017年に楽天市場に出店し現在までに、『お客様からの高評価上位1%』である月間優良ショップに9回選出いただきました。大切な方に贈るギフトはぜひ『きものfun』におまかせください。
				</p>
			</TextArea>
		</FlexComponent>
	);
};

const FlexComponent = styled.div`
	display: flex;
	align-items: center;
	@media only screen and (max-width: 1024px) {
		flex-direction: column-reverse;
	}
`;

const TextArea = styled.div`
	flex-basis: 30%;
	padding: 40px;
	h1 {
		font-size: 4vw;
		@media screen and (max-width: 1024px) {
			font-size: 8vw;
		}
		@media only screen and (max-width: 767px) {
			font-size: 14vw;
		}
	}
	p {
		margin: 40px 0 0 0;
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
		@media screen and (max-width: 1024px) {
			height: 40vh;
		}
		@media only screen and (max-width: 767px) {
			height: 30vh;
		}
	}
`;

export default SplideComponent;
