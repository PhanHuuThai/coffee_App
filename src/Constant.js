
import React, { useState, useEffect } from 'react'
	


export const colors = {
	COLOR_PRIMARY: "#a0522d",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

//  Data for categories filter

// export const categories = [
// 	{
// 		id: "01",
// 		category: "Breakfast",
// 	},
// 	{
// 		id: "02",
// 		category: "Lunch",
// 	},
// 	{
// 		id: "03",
// 		category: "Dinner",
// 	},
// 	{
// 		id: "04",
// 		category: "Asian",
// 	},
// 	{
// 		id: "05",
// 		category: "Italian",
// 	},
// ];

export const recipeList = [
	{
		id: "01",
		name: "Cà Phê Đen",
		image: require("../assets/testImage/coffee.jpg"),
		color: "#006A4E",
		cost: "20.000d",
		desc: 'thơm ngon tuyệt vời, uống là nhớ, nhớ là lại tới uống',
	},
	{
		id: "02",
		name: "Bạc xỉu",
		image: require("../assets/testImage/bac_xiu.jpg"),
		color: "#f39c12",
		cost: "25.000d",
		desc: 'thơm ngon tuyệt vời, uống là nhớ, nhớ là lại tới uống',

	},
	{
		id: "03",
		name: "Nước cam",
		image: require("../assets/testImage/orange.jpg"),
		color: "#FF0000",
		cost: "30.000d",
		desc: 'thơm ngon tuyệt vời, uống là nhớ, nhớ là lại tới uống',

	},
	{
		id: "04",
		name: "Trà xanh",
		image: require("../assets/testImage/matcha.jpg"),
		color: "#d35400",
		cost: "30.000d",
		desc: 'thơm ngon tuyệt vời, uống là nhớ, nhớ là lại tới uống',

	},
	{
		id: "05",
		name: "Trà sữa",
		image: require("../assets/testImage/Milk_Tea.jpg"),
		color: "#8d4004",
		cost: "35.000d",
		desc: 'thơm ngon tuyệt vời, uống là nhớ, nhớ là lại tới uống',

	},
	{
		id: "06",
		name: "Sữa chua đá",
		image: require("../assets/testImage/sua_chua_da.jpg"),
		color: "#d35400",
		cost: "25.000d",
		desc: 'thơm ngon tuyệt vời, uống là nhớ, nhớ là lại tới uống',

	},
];

export const orderList = [
	{
		id: "01",
		date: "10-10-2023",
		total: "70.000d",
		status: "Đang giao hàng"
	},
	{
		id: "02",
		date: "10-10-2023",
		total: "70.000d",
		status: "Đã thanh toán"
	},
	{
		id: "03",
		date: "10-10-2023",
		total: "70.000d",
		status: "Đã thanh toán"
	},
	{
		id: "04",
		date: "10-10-2023",
		total: "70.000d",
		status: "Đã thanh toán"
	},
	{
		id: "05",
		date: "10-10-2023",
		total: "70.000d",
		status: "Đã thanh toán"
	},
	{
		id: "06",
		date: "10-10-2023",
		total: "70.000d",
		status: "Đã thanh toán"
	},
	{
		id: "07",
		date: "10-10-2023",
		total: "70.000d",
		status: "Đã thanh toán"
	},
]

export const cartList = [
	{
		id: "01",
		name: "Cà Phê Đen",
		image: require("../assets/testImage/coffee.jpg"),
		color: "#006A4E",
		cost: "20.000d",
		desc: 'thơm ngon tuyệt vời, uống là nhớ, nhớ là lại tới uống',
	},
	{
		id: "02",
		name: "Bạc xỉu",
		image: require("../assets/testImage/bac_xiu.jpg"),
		color: "#f39c12",
		cost: "25.000d",
		desc: 'thơm ngon tuyệt vời, uống là nhớ, nhớ là lại tới uống',

	},
	{
		id: "03",
		name: "Nước cam",
		image: require("../assets/testImage/orange.jpg"),
		color: "#FF0000",
		cost: "30.000d",
		desc: 'thơm ngon tuyệt vời, uống là nhớ, nhớ là lại tới uống',

	},
]