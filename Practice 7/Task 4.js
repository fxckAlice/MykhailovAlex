const supplyObj = require('./Supply')
function moduleCallBack(){
    return new Promise((resolve, reject) => {
        resolve("Breakfast is ready")
    })
}
function ifSupply(supply){
    if(!(supply instanceof supplyObj)){
        throw new Error("Parameter should be an object of Supply")
    }
}

function boilWater(supply){
    try{
        ifSupply(supply)
        return new Promise((resolve, reject) => {
            if(supply.ifWaterAtHome === true && supply.ifElectricityAtHome === true){
                setTimeout(() => {
                    resolve(() => console.log("Water boiled!"))
                }, 20000)
            }
            else{
                reject("Water not found")
            }
        })
    }
    catch (e) {
        console.error(e);
    }
}

function addTeaPack(supply){
    try{
        ifSupply(supply)
        return new Promise((resolve, reject) => {
            if(supply.ifTeaAtHome === true){
                setTimeout(() => {
                    resolve(() => console.log("Tea pack is ready!"))
                }, 5000)
            }
            else{
                reject("Tea pack not found")
            }
        })
    }
    catch (e) {
        console.error(e);
    }
}

function addSugar(supply){
    try{
        ifSupply(supply)
        return new Promise((resolve, reject) => {
            if(supply.ifSugarAtHome === true){
                setTimeout(() => {
                    resolve(() => console.log("Sugar added!"))
                }, 2000)
            }
            else{
                reject("Sugar not found")
            }
        })
    }
    catch (e) {
        console.error(e);
    }
}

function makeTea(supply){
    return boilWater(supply).then((value) => {
        value()
        addTeaPack(supply).then((value) => {
            value()
            addSugar(supply).then((value) => {
                value()
                console.log("Tea is ready")
            })
        })
    })
}

module.exports = makeTea