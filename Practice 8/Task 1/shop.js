const stock = require('Practice 8/Task 1/stock.js')
const event = new stock();
const Item = require('itemObject')

class Shop{
    private static Card = 5158123456789012

    static getCard(){
        return Shop.Card
    }

    static changeCard(card){
        try{
            if(typeof card === "number" && card.toString().length === 16 && Number.isInteger(card)){
                Shop.Login = card
            }
            else{
                throw new TypeError("Wrong parameter`s type! (MessageStorage.js, 9)");
            }
        }
        catch(error){
            console.error(error)
        }
    }



    static catalog = [
        new Item("Steering wheel", 200, "Professional wheel for sim-racing", 1),
        new Item("Pedals", 100, "3 steel pedals (clutch, brake, accelerator) equipped with springs", 2),
        new Item("Wheel base", 150, "Perfectly input and output steering wheel`s behavior", 3),
        new Item("Cockpit", 300, "Comfortable armchair for sim-racing", 4)
    ]


    static printItem(id){
        const item = Shop.findItem(id);
        console.log("id: " + id)
        console.log(item.name + " -> " + item.price)
        console.log(item.about)
        console.log("")
    }

    static printCatalog(){
        console.clear()
        for(let i = 0; i < Shop.catalog.length; i++){
            Shop.printItem(Shop.catalog[i].id);
        }
    }
    basket = []

    addToBasket(item){
        try{
            if(item instanceof Item){
                console.clear()
                const newItem = Shop.findItem(item)
                if (typeof newItem === "undefined") {
                    console.log("Not found!")
                    return
                }
                this.basket.push(newItem.id)
                Shop.printItem(newItem.id)
                console.log("Added")
            }
            else{
                throw new TypeError("Wrong parameter`s type! (shop, 54)");
            }
        }
        catch (e) {
            console.error(e)
        }
    }

    clearBasket(){
        console.clear()
        this.showBasket()
        this.basket.length = 0;
        console.log("Basket is empty")
    }

    removeFromBasket(item){
        try{
            if(item instanceof Item){
                const myItem = Shop.findItem(item)
                const index = this.basket.indexOf(myItem.id)
                if(typeof myItem === undefined || index === -1){
                    console.log("Not found!")
                    return
                }
                this.basket.splice(index, 1)
                this.showBasket()
            }
            else{
                throw new TypeError("Wrong parameter`s type! (shop, 54)");
            }
        }
        catch (e) {
            console.error(e)
        }
    }

    showBasket(){
        console.clear()
        for(let i = 0; i < this.basket.length; i++){
            Shop.printItem(this.basket[i])
        }
    }

    buy(){
        console.clear()
        this.showBasket()
        console.log("Bought! " + Shop.Card + " was used")
        this.clearBasket()
    }

    quickBuy(item){
        try{
            if(item instanceof Item){
                const myItem = Shop.findItem(item.id)
                if(typeof myItem === "undefined"){
                    console.log("Not found!")
                    return
                }
                this.addToBasket(item)
                this.buy()
            }
            else{
                throw new TypeError("Wrong parameter`s type! (shop, 54)");
            }
        }
        catch (e) {
            console.error(e)
        }
    }

    static findItem(itemId){
        try{
            if(typeof itemId === "number"){
                return  Shop.catalog.find(value => value.id === itemId)

            }
            else if(typeof itemId === "string"){
                return  Shop.catalog.find(value => value.name === itemId)

            }
            else{
                throw new TypeError("Wrong parameter`s type! (shop.js)");
            }
        }
        catch (e){
            console.error(e);
        }
    }

}
module.exports = Shop