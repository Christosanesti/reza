"use client";

import React from 'react';
import styled from "styled-components";
import { motion, useScroll, useTransform} from "framer-motion";


interface Props {
	children: React.ReactNode;
}

const TextWrapper = ({ children}: Props) => {
	const text = React.useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: text,
		offset: ["start end", "end start"],
	})

	const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);

	const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);

	const colorChange = useTransform(scrollYProgress, 
		[0, 0.2, 0.4, 0.6, 0.8, 1],
		[
			"hsla(180, 7%, 75%, 0.9",
			"hsla(180, 7%, 75%, 0.9",
			"#C7B550",
			"#C7B550",
			"#C7B550",
			"#C7B550",
		]

	);

	return <div ref={text}><motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p></div>
};

function TextSection() {
	return (
		<TextSectionStyled>
			<TextWrapper>
				<strong>نصب استیکر روی خودرو</strong>
			</TextWrapper>

			<TextWrapper>
				از آنجایی که استیکر ها در مقابل عوامل محیطی نظیر آفتاب، باران و تغییرات دمایی کاملا مقاوم هستند و بیش از ۵ سال ماندگاری دارند، می توان از آن ها به منظور تبلیغات و یا تزئینی ، بر روی بدنه ماشین استفاده کرد.
			</TextWrapper>

			<TextWrapper>
				<strong>لیبل شبرنگ چیست و چه ویژگی هایی دارد؟</strong>
			</TextWrapper>

			<TextWrapper>
				شکل برچسب شبرنگ مشابه برچسب های کاغذی سلفونی است. ولی شامل خصوصیاتی است که آن را از برچسب های دیگر متمایز می کند. همان گونه که از نام این برچسب ها پیدا است، خصوصیت عمده آن شبرنگ بودن و امکان مشاهده شدن و درخشندگی در تاریکی است.
			</TextWrapper>

			<TextWrapper>
				<strong>لیبل روزرنگ چیست؟</strong>
			</TextWrapper>

			<TextWrapper>
				روزرنگ در واقع متریالی است که پشت آن برچسب دارد و هنگام برش آن از کاتر پلاتر استفاده می شود. روزرنگ ها دارای رنگ های متنوعی هستند که از بین آن دو رنگ اصلی نقره ای و طلایی یا همان مات و براق پر کاربرد می باشد. عرض روزرنگ ها از 60 سانتی متر یا 120 سانتی متر می باشد.
در مورد لیبل روز رنگ بیشتر بخوانید
			</TextWrapper>

			<TextWrapper>
				<strong>خدمات چاپ، برش و نصب برچسب روی خودرو</strong>
			</TextWrapper>

			<TextWrapper>
				نصب و چسباندن استیکر، بر روی هر سطحی از جمله کارهای تخصصی است که باید با مهارت و دقت زیاد انجام شود، البته نصب برچسب بر روی بدنه خودروها، تخصصی‌تر از سایر سطوح است. در این مجموعه از چاپ و برش تا نصب استیکر روی خودرو به صورت تخصصی انجام می شود.
			</TextWrapper>
		</TextSectionStyled>
	)
}

const TextSectionStyled = styled.section`

	p{
		font-size: x-large;
		inline-height: 3rem;
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 6rem;
		direction: rtl;
		strong{
			color: orange;
		}
	}
`;

export default TextSection