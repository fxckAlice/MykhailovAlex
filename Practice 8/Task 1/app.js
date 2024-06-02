const Stock = require('stock')
const Events = new Stock()

function showCatalog(){
    Events.emit('show catalog')
}

function addToBasket(itemId){
    Events.emit('add to basket', itemId)
}

function removeFromBasket(itemId){
    Events.emit('remove from basket', itemId)
}

function clearBasket(){
    Events.emit('clear basket')
}

function buy(){
    Events.emit('make order')
}

function quickBuy(item){
    Events.emit('quick buy', item)
}

function showBasket(){
    Events.emit('show basket')
}

function changeCard(cardNum){
    Events.emit('change card', cardNum)
}

function showCardDetails(){
    Events.emit('print card')
}