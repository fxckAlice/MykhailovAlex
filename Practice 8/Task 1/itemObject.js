class Item{
    private name
    private price
    private about
    private id
    constructor (name, price, about, id) {
        try{
            if (typeof name === 'string' && typeof price === 'number' && typeof about === "string" && typeof id === "number") {
                this.name = name
                this.price = price
                this.about = about
                this.id = id;
            } else {
                throw new TypeError("Wrong parameter`s type! (itemObject.js, 7)");
            }
        }
        catch (e){
            console.error(e);
        }
    }
}

module.exports = Item;