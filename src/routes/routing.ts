import express from "express";


const route = express.Router();


route.get("/", (req, res) =>{
    res.render("home");
})

route.get("/Hawaiian", (req, res) =>{
let name: string = req.query.name as string;
let price: number = Number(req.query.price);
    
    
    res.render("hawaiian", {name, price});
    // console.log(stuff);
})

route.get("/meat_Lovers", (req, res) =>{

    let name: string = req.query.name as string;
let price: number = Number(req.query.price);

    res.render("meatLovers", {name, price});
    
})

route.get("/BBQ_Chicken", (req, res) =>{

    let name: string = req.query.name as string;
let price: number = Number(req.query.price);

    res.render("bbqChicken", {name, price});
    
})
route.get("/Veggie_Deluxe", (req, res) =>{
    let name: string = req.query.name as string;
    let price: number = Number(req.query.price);
    
    res.render("veggieDeluxe", {name, price});
    ;
})
route.get("/Pizza_Blanca", (req, res) =>{

    let name: string = req.query.name as string;
let price: number = Number(req.query.price);

    res.render("pizzaBlanca", {name, price});
    
})

route.get("/build_your_own", (req, res) =>{
    res.render("byo");
})

route.get("/review", (req, res) =>{

    res.render("review");
    
})



route.post("/thankYou", (req, res) =>{
    let name:string  = req.body.name;
    let comment: string = req.body.comment;
    let rating: number = req.body.rating;

    res.render("thankYou", {name, comment, rating});
})

route.post("/byoSummary", (req, res) =>{

    let size = req.body.size;
    let toppings: number = req.body.toppings;
    let instructions: string = req.body.instructions;
    let glutenFree: boolean = !!req.body.glutenFree;

    let price = size == "Small" ? 7 +toppings*.5:
    size == "Medium" ? 10 + toppings*.5:
     12 + toppings*.5;

     //gluten-free add-on
     if(glutenFree){
         price +=2;
     }

    //  price = "$" + price.toFixed(2);

res.render("byoSummary", {size, toppings, instructions, glutenFree, price});
})

export default route;