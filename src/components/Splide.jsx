import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Img1 from "../assets/imgKimonofun1.webp";
import Img2 from "../assets/imgKimonofun2.webp";
import Img3 from "../assets/imgKimonofun3.webp";

const SplideComponent = () => {
	return (
		<Splide
			options={{
				rewind: true,
				// type: "fade",
				gap: "1rem",
				// autoplay: true,
				// interval: 3000,
				// speed: 2000,
			}}
		>
			<SplideSlide>
				<img src={Img1} alt="Image 1" />
			</SplideSlide>
			<SplideSlide>
				<img src={Img2} alt="Image 2" />
			</SplideSlide>
			<SplideSlide>
				<img src={Img3} alt="Image 3" />
			</SplideSlide>
		</Splide>
	);
};

export default SplideComponent;
