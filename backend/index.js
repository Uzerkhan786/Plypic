import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { mongoDBConnected } from './src/config/configDB.js';
import { routes } from './src/routes/index.js';
import { product } from './src/models/product.js';
import { PORT } from './src/config/config-env.js';




const app = express();
app.use(express.static('public'))
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', routes)

app.listen(PORT, async (req, res) => {
    mongoDBConnected();
    // await product.insertMany([
    //     {
    //         productName: "Small Frozen Tuna",
    //         price: "71.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    //         department: "Clothing",
    //         id: "1"
    //     },
    //     {
    //         productName: "Elegant Steel Keyboard",
    //         price: "52.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    //         department: "Music",
    //         id: "2"
    //     },
    //     {
    //         productName: "Handmade Wooden Shirt",
    //         price: "875.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Football Is Good For Training And Recreational Purposes",
    //         department: "Music",
    //         id: "3"
    //     },
    //     {
    //         productName: "Handcrafted Bronze Pants",
    //         price: "675.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    //         department: "Books",
    //         id: "4"
    //     },
    //     {
    //         productName: "Incredible Frozen Gloves",
    //         price: "244.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    //         department: "Toys",
    //         id: "5"
    //     },
    //     {
    //         productName: "Licensed Soft Towels",
    //         price: "688.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    //         department: "Computers",
    //         id: "6"
    //     },
    //     {
    //         productName: "Tasty Soft Soap",
    //         price: "892.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    //         department: "Toys",
    //         id: "7"
    //     },
    //     {
    //         productName: "Handmade Wooden Pizza",
    //         price: "966.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    //         department: "Clothing",
    //         id: "8"
    //     },
    //     {
    //         productName: "Rustic Cotton Car",
    //         price: "138.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    //         department: "Beauty",
    //         id: "9"
    //     },
    //     {
    //         productName: "Tasty Rubber Shoes",
    //         price: "98.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    //         department: "Home",
    //         id: "10"
    //     },
    //     {
    //         productName: "Oriental Frozen Towels",
    //         price: "367.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    //         department: "Electronics",
    //         id: "11"
    //     },
    //     {
    //         productName: "Incredible Cotton Ball",
    //         price: "218.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    //         department: "Kids",
    //         id: "12"
    //     },
    //     {
    //         productName: "Elegant Bronze Pizza",
    //         price: "845.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Football Is Good For Training And Recreational Purposes",
    //         department: "Sports",
    //         id: "13"
    //     },
    //     {
    //         productName: "Fantastic Fresh Shoes",
    //         price: "390.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    //         department: "Clothing",
    //         id: "14"
    //     },
    //     {
    //         productName: "Fantastic Bronze Fish",
    //         price: "612.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    //         department: "Outdoors",
    //         id: "15"
    //     },
    //     {
    //         productName: "Luxurious Frozen Bacon",
    //         price: "125.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Football Is Good For Training And Recreational Purposes",
    //         department: "Kids",
    //         id: "16"
    //     },
    //     {
    //         productName: "Handmade Rubber Car",
    //         price: "410.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    //         department: "Games",
    //         id: "17"
    //     },
    //     {
    //         productName: "Licensed Steel Fish",
    //         price: "56.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    //         department: "Automotive",
    //         id: "18"
    //     },
    //     {
    //         productName: "Incredible Granite Bacon",
    //         price: "683.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    //         department: "Movies",
    //         id: "19"
    //     },
    //     {
    //         productName: "Handcrafted Plastic Chair",
    //         price: "730.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    //         department: "Beauty",
    //         id: "20"
    //     },
    //     {
    //         productName: "Fantastic Plastic Soap",
    //         price: "305.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    //         department: "Automotive",
    //         id: "21"
    //     },
    //     {
    //         productName: "Intelligent Cotton Tuna",
    //         price: "923.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    //         department: "Jewelery",
    //         id: "22"
    //     },
    //     {
    //         productName: "Ergonomic Cotton Pants",
    //         price: "141.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    //         department: "Garden",
    //         id: "23"
    //     },
    //     {
    //         productName: "Ergonomic Bronze Chips",
    //         price: "503.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    //         department: "Tools",
    //         id: "24"
    //     },
    //     {
    //         productName: "Incredible Rubber Table",
    //         price: "448.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    //         department: "Games",
    //         id: "25"
    //     },
    //     {
    //         productName: "Intelligent Bronze Bike",
    //         price: "268.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    //         department: "Shoes",
    //         id: "26"
    //     },
    //     {
    //         productName: "Recycled Soft Pizza",
    //         price: "556.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    //         department: "Toys",
    //         id: "27"
    //     },
    //     {
    //         productName: "Oriental Wooden Sausages",
    //         price: "977.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    //         department: "Garden",
    //         id: "28"
    //     },
    //     {
    //         productName: "Fantastic Frozen Hat",
    //         price: "519.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    //         department: "Garden",
    //         id: "29"
    //     },
    //     {
    //         productName: "Gorgeous Cotton Table",
    //         price: "481.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    //         department: "Beauty",
    //         id: "30"
    //     },
    //     {
    //         productName: "Oriental Frozen Chair",
    //         price: "975.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    //         department: "Books",
    //         id: "31"
    //     },
    //     {
    //         productName: "Recycled Metal Pizza",
    //         price: "929.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Football Is Good For Training And Recreational Purposes",
    //         department: "Electronics",
    //         id: "32"
    //     },
    //     {
    //         productName: "Tasty Wooden Pants",
    //         price: "642.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Football Is Good For Training And Recreational Purposes",
    //         department: "Shoes",
    //         id: "33"
    //     },
    //     {
    //         productName: "Elegant Bronze Salad",
    //         price: "838.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    //         department: "Books",
    //         id: "34"
    //     },
    //     {
    //         productName: "Fantastic Rubber Gloves",
    //         price: "903.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    //         department: "Toys",
    //         id: "35"
    //     },
    //     {
    //         productName: "Elegant Cotton Shoes",
    //         price: "590.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    //         department: "Clothing",
    //         id: "36"
    //     },
    //     {
    //         productName: "Rustic Fresh Hat",
    //         price: "414.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    //         department: "Clothing",
    //         id: "37"
    //     },
    //     {
    //         productName: "Bespoke Fresh Towels",
    //         price: "991.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    //         department: "Books",
    //         id: "38"
    //     },
    //     {
    //         productName: "Handmade Plastic Chips",
    //         price: "28.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    //         department: "Kids",
    //         id: "39"
    //     },
    //     {
    //         productName: "Licensed Rubber Shirt",
    //         price: "877.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    //         department: "Health",
    //         id: "40"
    //     },
    //     {
    //         productName: "Fantastic Metal Salad",
    //         price: "163.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    //         department: "Automotive",
    //         id: "41"
    //     },
    //     {
    //         productName: "Ergonomic Fresh Computer",
    //         price: "233.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Football Is Good For Training And Recreational Purposes",
    //         department: "Shoes",
    //         id: "42"
    //     },
    //     {
    //         productName: "Sleek Rubber Towels",
    //         price: "844.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    //         department: "Jewelery",
    //         id: "43"
    //     },
    //     {
    //         productName: "Generic Fresh Ball",
    //         price: "782.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    //         department: "Jewelery",
    //         id: "44"
    //     },
    //     {
    //         productName: "Refined Soft Salad",
    //         price: "963.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    //         department: "Health",
    //         id: "45"
    //     },
    //     {
    //         productName: "Elegant Fresh Bike",
    //         price: "505.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    //         department: "Clothing",
    //         id: "46"
    //     },
    //     {
    //         productName: "Gorgeous Frozen Tuna",
    //         price: "945.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    //         department: "Music",
    //         id: "47"
    //     },
    //     {
    //         productName: "Handmade Granite Towels",
    //         price: "321.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    //         department: "Health",
    //         id: "48"
    //     },
    //     {
    //         productName: "Modern Concrete Pizza",
    //         price: "94.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    //         department: "Kids",
    //         id: "49"
    //     },
    //     {
    //         productName: "Bespoke Granite Shoes",
    //         price: "392.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    //         department: "Grocery",
    //         id: "50"
    //     },
    //     {
    //         productName: "Electronic Soft Keyboard",
    //         price: "960.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    //         department: "Grocery",
    //         id: "51"
    //     },
    //     {
    //         productName: "Sleek Frozen Salad",
    //         price: "312.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    //         department: "Outdoors",
    //         id: "52"
    //     },
    //     {
    //         productName: "Recycled Concrete Shirt",
    //         price: "306.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    //         department: "Grocery",
    //         id: "53"
    //     },
    //     {
    //         productName: "Sleek Plastic Towels",
    //         price: "584.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    //         department: "Industrial",
    //         id: "54"
    //     },
    //     {
    //         productName: "Generic Wooden Ball",
    //         price: "654.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    //         department: "Toys",
    //         id: "55"
    //     },
    //     {
    //         productName: "Small Cotton Towels",
    //         price: "940.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    //         department: "Clothing",
    //         id: "56"
    //     },
    //     {
    //         productName: "Incredible Concrete Chips",
    //         price: "268.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Football Is Good For Training And Recreational Purposes",
    //         department: "Tools",
    //         id: "57"
    //     },
    //     {
    //         productName: "Fantastic Cotton Chicken",
    //         price: "218.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    //         department: "Grocery",
    //         id: "58"
    //     },
    //     {
    //         productName: "Electronic Soft Ball",
    //         price: "940.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    //         department: "Shoes",
    //         id: "59"
    //     },
    //     {
    //         productName: "Rustic Metal Computer",
    //         price: "737.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Football Is Good For Training And Recreational Purposes",
    //         department: "Games",
    //         id: "60"
    //     },
    //     {
    //         productName: "Intelligent Soft Chips",
    //         price: "417.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    //         department: "Health",
    //         id: "61"
    //     },
    //     {
    //         productName: "Small Steel Table",
    //         price: "402.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    //         department: "Garden",
    //         id: "62"
    //     },
    //     {
    //         productName: "Incredible Soft Mouse",
    //         price: "113.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    //         department: "Sports",
    //         id: "63"
    //     },
    //     {
    //         productName: "Awesome Metal Salad",
    //         price: "189.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    //         department: "Games",
    //         id: "64"
    //     },
    //     {
    //         productName: "Licensed Steel Gloves",
    //         price: "358.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    //         department: "Computers",
    //         id: "65"
    //     },
    //     {
    //         productName: "Luxurious Steel Sausages",
    //         price: "66.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    //         department: "Grocery",
    //         id: "66"
    //     },
    //     {
    //         productName: "Recycled Concrete Hat",
    //         price: "360.00",
    //         image: "https://loremflickr.com/640/480/abstract",
    //         productDescription: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    //         department: "Tools",
    //         id: "67"
    //     }
    // ])
    console.log('server is listening on 3001');
})