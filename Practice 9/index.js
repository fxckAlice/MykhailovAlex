const express = require('express');
const Joi = require('joi')

const path = require('path');
const {bool} = require("joi");
const app = express();
const port = 8080

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'document.html'));
    res.status(200).send("Done")
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})

products = [
    {
        "id": 0,
        "name": "Lego",
        "price": 80
    },
    {
        "id": 1,
        "name": "ToyCar",
        "price": 100
    },
    {
        "id": 2,
        "name": "KinderEgg",
        "price": 50
    },
    {
        "id": 3,
        "name": "Pistol",
        "price": 150
    },
];

const productSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(5)
        .required()
});



getElement = function (id){
    return products.find((element, index) => {
        if(element["id"] === Number(id)){
            return element
        }
    })
}

app.get(`/products/:id`, function(req, res) {
    const id = req.params.id;
    let ifDone = false
    products.find((element, index, products) => {
        if(element["id"] === Number(id)){
            res.status(200).send(element);
            ifDone = true
        }
    })

    if(!ifDone){
        res.status(404).send("Not Found");
    }
})

app.get('/products', function(req, res) {
    if(typeof products !== "undefined" && products.length > 0){
        res.status(200).send(products);
    }
    else{
        res.status(404).send("Not Found");
    }
})

app.post(`/products/post/:name/:price`, function(req, res) {
    const name = req.params.name;
    const price = req.params.price;
    let ifNotExists = true;

    products.find((element, index, products) => {
        if(element["name"] === name){
            res.status(409).send("Already Exists");
            ifNotExists = false;
        }
    })

    if(ifNotExists){
        let newId = products.length;
        let ifIdUniq = true;
        while (ifIdUniq) {
            products.find((element, index, products) => {
                ifIdUniq = false
                if (element["id"] === newId) {
                    newId++;
                    ifIdUniq = true
                    return true
                }
            })
        }
        if(typeof name === 'string' && !isNaN(price)){
            newObject = {
                "id": newId,
                "name": name,
                "price": price
            }
            products.push(newObject)
            res.status(200).send(newObject)
        }
        else{
            res.status(400).send("Bad request")
        }
    }
})

app.delete(`/products/del/:id`, function(req, res) {
    const id = req.params.id;
    let ifDone = false

    products.find((element, index) => {
        if(typeof element !== "undefined" && element['id'] === Number(id)){
            res.status(200).send(element);
            products.splice(index, 1)
            ifDone = true
        }

    })
    if(!ifDone){
        res.status(404).send("Not Found");
    }
})

app.put('/products/put/:id/:name/:price', function(req, res) {
    const id = req.params.id;
    const name = req.params.name;
    const price = req.params.price;


    oldObject = getElement(id);
    let indexOfElement = products.indexOf(oldObject)
    if(typeof oldObject !== "undefined"){
        if(oldObject["name"] !== name && oldObject["price"] !== Number(price)){
            products[indexOfElement] = {
                'id': Number(id),
                'name': name,
                'price': Number(price)
            }
            res.status(200).send(products[indexOfElement]);
        }
        else{
            res.status(409).send("Some value did not change")
        }
    }
    else{
        res.status(404).send("Not Found");
    }
})

app.patch('/products/patch/:id/:param', function(req, res) {
    const id = req.params.id;
    const param = req.params.param;

    if(typeof getElement(id) !== "undefined"){
        indexOfElement = products.indexOf(getElement(id));
        if(isNaN(Number(param)) && typeof param === "string" && products[indexOfElement]['name'] !== param){
            products[indexOfElement]['name'] = param
            res.status(200).send(products[indexOfElement]);
        }
        else if(!isNaN(Number(param)) && products[indexOfElement]['price'] !== Number(param)){
            products[indexOfElement]['price'] = Number(param);
            res.status(200).send(products[indexOfElement]);
        }
        else{
            res.status(400).send("Bad parameter");
        }
    }
    else{
        res.status(404).send("Not found")
    }

})