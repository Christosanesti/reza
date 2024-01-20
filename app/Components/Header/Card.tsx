"use client"
import React from 'react'
import styled from "styled-components"
import Image from "next/image";


interface CardProps {
	title: string;
	description?: string;
	image?: any;
}


function Card({ title, description, image}: CardProps) {
	return (
		<CardStyled>
			<div 
				className="image"
				style={{
					height:"100%",
					width: "100%",
				}}
				>

				<div
					className="text">

					<h3>{title}</h3>
					<p>{description}</p>

					
				</div>

				<Image 
					src={image}
					alt="image"
					style={{
						height:"100%",
						width:"100%",
						objectFit:"cover",
						objectPosition:"center",
						borderRadius:"8px",
					}}
				/>
					
			</div>
		</CardStyled>
	)
}

const CardStyled = styled.div`
	position: relative;
	background-color: var(--color-bg);
	height:100%;
	padding: 1.5rem;
	border-radius: 8px;
	border: 1px solid var(--color-border);
	transition: all 0.3 ease-in-out;

	.new{
		position: absolute;
		top: 3rem;
		right: 2.5rem;
		z-index: 5;
		background: #222260;
		color: #fff;
		padding: 0.2rem 0.5rem;
		border-radius: 8px;
		font-weight: 600;
		font-size: 1rem;
	}

	.text {
		position: absolute;
		bottom: 5rem;
		right: 2.5rem;
		z-index: 5;
		pointer-events: none;
		direction: rtl;
		h3{
			display: inline-block;
			font-size: 1.5rem;
			color: #C7B550;
			background: var(--color-bg)
			padding: 0.2rem 1rem;
			border-radius: 30px;
			margin-bottom: 0.5rem;
			pointer-events: none;
			
		}
	}

	.overlay {
		position: absolute;
		bottom: -2px;
		left: -2px;
		width: calc(100% + 4px);
		height: 25%;
		background: linear-gradient(0deg, #111111 1%, rgba(17, 17, 17, 0.06));
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	}

`;

export default Card