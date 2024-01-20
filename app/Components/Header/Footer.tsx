"use client"


import React, { Component } from 'react'
import styled from "styled-components"
import Image from "next/image";
import logo from "../../../public/images/logo.png";


function Footer() {
	return (
		<FooterStyled>
			<div className="row">
				<div className="col">
					<Image className="logo" src={logo} alt="logo" width={90}  />
					<p>شرکت خدماتی برش شابلون قرار است که اینجا چیزی بسیار مفید بنویسد. لطفا دست به گیرنده های خود نزنید.</p>
				</div>

				<div className="col">
					<h3>دفتر نمایندگی <div className="underline"><span></span></div></h3>
					<p>تهرانسر</p>
					<p>بلوار لاله</p>
					<p>جنب کارواش لاله</p>
					<p>پلاک 42</p>
					<p className="email-id">demo@gmail.com</p>
					<h4>444665588</h4>
				</div>

				<div className="col">
				    <h3>لینک ها <div className="underline"><span></span></div></h3>
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

				</div>


				
			</div>
			<hr />	
			<p className="copyright">تقدیم به جامعه کد باز</p>
		</FooterStyled>
	)
}

const FooterStyled = styled.footer`

	background: linear-gradient(to left, #00093c, #2d0b00);
	direction: rtl;
	width: 100%;
	position: relative;
	bottom: 0;
	color: #fff;
	padding: 100px 0 30px;
	border-top-right-radius: 125px;
	font-size: 13px;
	line-height: 20px;

	.row{
		width: 85%;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;

	}
	.col{
		flex-basis: 25%;
		padding: 10px;
	}

	.logo{
		width: 80px;
		margin-bottom: 20px;
	}

	.col h3{
		width: fit-content;
		margin-bottom: 40px;
		position: relative;

	}
	.email-id{
		width: fit-content;
		border-bottom: 1px solid var(--color-border);
		margin: 20px 0;
	}

	ul li{
		list-style: none;
		margin-bottom: 12px;
	}

	ul li a{
		text-decoration: none;
		color: #fff;

	}
	hr{
		width: 90%;
		border:0;
		border-bottom: 1px solid var(--color-border);
		margin: 20px auto;
		justify-content: center;

	}
	.copyright{
		text-align: center;
	}

	.underline{
		width: 100%;
		height: 5px;
		background: #767676;
		border-radius: 3px;
		position: absolute;
		top: 25px;
		right: 0;
		overflow: hidden;
	}
	.underline span{
		width: 15px;
		height: 100%;
		backfround: #fff;
		border-radius: 3px;
		position: absolute;
		top: 0;
		right: 10px;
		
	}
	@media (max-width: 700px){
		footer{
			bottom: unset;
		}

		.col{
			flex-basis:100%;
		}
	}

`;



export default Footer