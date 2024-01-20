import ambulance from "/public/images/ambulance.jpg"
import police from "/public/images/police.jpg"
import car from "/public/images/car.jpg"
import commercial from "/public/images/commercial.jpg"
import taxi from "/public/images/taxi.jpg"
import Image from "next/image";


export const cards = [
	{
		id:1,
		title: "آمبولانس",
		description: "توضیحات",
		image: ambulance,
		link: "/ambulance-van",
	},

	{
		id:2,
		title: "پلیس",
		description: "توضیحات",
		image: police,
		link: "/police-car",
	},

	{
		id:3,
		title: "خودرو شخصی",
		description: "توضیحات",
		image: car,
		link: "/car-photo",
	},

	{
		id:4,
		title: "تجاری",
		description: "توضیحات",
		image: commercial,
		link: "/commercial-van",
	},

	{
		id:5,
		title: "تاکسی",
		description: "توضیحات",
		image: taxi,
		link: "/yellow-cab",
	},

];