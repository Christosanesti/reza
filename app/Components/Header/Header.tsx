"use client";

import React, { useRef } from 'react';
import Image from "next/image";


import logo from "../../../public/images/logo.png";



import styled from 'styled-components';

import Button from "../Button/Button";

import { FaMailBulk } from "react-icons/fa";

import hover3d from "../../utils/hover"

	


function Header() {

	const hero = useRef<HTMLDivElement>(null);
	const hoverHero = hover3d(hero, {
		x:30,
		y:-40,
		z:30,

	});

	const imageHover = hover3d(hero, {
		x:20,
		y:-4,
		z:11,

	});
	return (
		<HeaderStyled ref={hero}>
			<nav>
				<div className="logo">
					<Image src={logo} alt="logo" width={90}  />
					<h2>HMcutter</h2>
				</div>
				<ul className="nav-items">
					<li>
						<a href="#">اصلی</a>
					</li>
					<li>
						<a href="#">خدمات سازمانی</a>
					</li>
					<li>
						<a href="#">تصاویر</a>
					</li>
					<li>
						<a href="#">درباره ما</a>
					</li>
					
					
				</ul>
				
			</nav>
			<div className="header-content">
				<div className="text-content">
					<h1 className="font">چاپ و برش و نصب برچسب</h1>
					<p>استیکر متریالی نازک از جنس PVC است که پشت چسب‌دار است و به علت ویژگی‌های فراوانی از جمله ضد آب و قابلیت شستشو، مقاومت در برابر پارگی، نصب و جداسازی آسان، مقاوم در برابر نور و سایر عوامل محیطی در انواع، ابعاد، طرح و رنگ‌های مختلف کاربرد فراوانی دارد.</p>
					<div className="buttons">
						<Button 
							name="تماس با ما"
							background="#C7B550"
							color="#fff"
							border="1px solid #C7B550"
							icon={<FaMailBulk />}
						/>						
						
					</div>
				</div>

				<div className="image-content">
					<div className="image" style={{
						transform: hoverHero.transform,
					}}>

						<Image className="target"
							src="/images/1.jpg"
							alt="hero"
							width={500}
							height={500}
							style={{
								transform: imageHover.transform,
								
							}}
						/>	
					</div>
				</div>
			</div>
			
		</HeaderStyled>
	)
}

const HeaderStyled = styled.header`
nav{
	padding: 0 4rem;
	min-height: 10vh;
	border-bottom: 1px solid var(--color-border);
	display: flex;
	justify-content: space-between;
	align-items: center;
	.logo{
		display: flex;
		align-items:center;
		gap: 1rem;
		cursor: pointer;
	}
	.nav-items{
		display: flex;
		align-items: center;
		gap: 2rem;
		direction: rtl;
		li{
			transition: all 0.2s ease-in-out;

			&:hover{
				color: white;
				transform: scale(1.1);
			}
		}
	}

}

.header-content{
	padding: 0 10rem 5rem 10rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 4rem;
	direction: rtl;
	min-height: calc(100vh - 10vh);

	.text-content{
		> h1{
			font-size: 5rem;
			color: #C7B550;
			transition: all 0.01s linear;
			padding-bottom: 1.5rem;
			direction: rtl;

		}

		> p{
			direction: rtl;
		}

		.buttons{
			display: flex;
			gap: 1rem;
			margin-top: 2.5rem;
		}
	}

	.image-content .image{
		margin-top: 1rem;
		padding: 1rem;
		border-radius: 8px;
		background-color: var(--color-bg);
		border: 1px solid var(--color-border);
		img{
			border-radius: 8px;
		}
	}


	

}

@media screen and (max-width: 1400px) {
		h1{
			font-size: 3rem !important;
		}
  
	}

	@media screen and (max-width: 1190px) {
		padding: 0 5rem 5rem 5rem;
		
	}

	@media screen and (max-width: 1050px) {
		padding: 0 2rem 5rem 2rem;
		
	}

	@media screen and (max-width: 1050px) {
		.target{
			height: 400px !important;
			width: 400px !important;
		}
		p{
			font-size: 14px;
		}
		h1{
			font-size: 2rem;
		}
		.target{
			height: 300px !important;
			width: 300px !important;
		}
		
	}


	@media screen and (max-width: 740px) {
		.nav-items{
			display: none !important;
		}
		.target{
			height: 300px !important;
			width: 300px !important;
		}
		h1{
			font-size: 1rem !important;
		}
		p{
			font-size: 14px;
		}
		
	}

	@media screen and (max-width: 640px) {
		.target{
			height: 150px !important;
			width: 150px !important;
		}
		nav{
			display: none !important; 
		}
	}



`;


export default Header