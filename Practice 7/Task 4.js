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
                    resolve(() => console.log("Water has been boiled!"))
                }, 20000)
            }
            else{
                reject("Water or Electricity is not found")
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
                reject("Tea pack is not found")
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
                    resolve(() => console.log("Sugar has been added!"))
                }, 2000)
            }
            else{
                reject("Sugar is not found")
            }
        })
    }
    catch (e) {
        console.error(e);
    }
}


function sliceBread(supply){
    try{
        ifSupply(supply)
        return new Promise((resolve, reject) => {
            if(supply.ifBreadAtHome === true){
                setTimeout(() => {
                    resolve(() => console.log("Bread has been sliced!"))
                }, 10000)
            }
            else{
                reject("Bread is not found")
            }
        })
    }
    catch (e) {
        console.error(e);
    }
}

function makeToasts(supply){
    try{
        ifSupply(supply)
        return new Promise((resolve, reject) => {
            if(supply.ifElectricityAtHome === true){
                setTimeout(() => {
                    resolve(() => console.log("Toasts is ready!"))
                }, 10000)
            }
            else{
                reject("Electricity is not found")
            }
        })
    }
    catch (e) {
        console.error(e);
    }
}

function spreadButter(supply){
    try{
        ifSupply(supply)
        return new Promise((resolve, reject) => {
            if(supply.ifButterAtHome === true){
                setTimeout(() => {
                    resolve(() => console.log("Butter has been spreaded!"))
                }, 5000)
            }
            else{
                reject("Butter is not found")
            }
        })
    }
    catch (e) {
        console.error(e);
    }
}

function sliceSausages(supply){
    try{
        ifSupply(supply)
        return new Promise((resolve, reject) => {
            if(supply.ifBreadAtHome === true){
                setTimeout(() => {
                    resolve(() => console.log("Sausages has been sliced!"))
                }, 10000)
            }
            else{
                reject("Sausages are not found")
            }
        })
    }
    catch (e) {
        console.error(e);
    }
}



function makeBreakfast(supply){
     console.log(boilWater(supply).then((value) => {
        value()
        addTeaPack(supply).then((value) => {
            value()
            addSugar(supply).then((value) => {
                value()
                console.log("Tea is ready")
                sliceBread(supply).then((value) => {
                    value()
                    makeToasts(supply).then((value) => {
                        value()
                        spreadButter(supply).then((value) => {
                            value()
                            sliceSausages(supply).then((value) => {
                                value()
                                console.log("Sandwich is ready")
                                moduleCallBack().then(value => {
                                    console.log(value)
                                })
                            })
                        })
                    })
                })
            })
        })
    }))
}
module.exports = makeBreakfast