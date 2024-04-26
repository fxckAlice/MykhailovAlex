class Supply{
    ifWaterAtHome;
    ifElectricityAtHome;
    ifTeaAtHome;
    ifBreadAtHome;
    ifSausagesAtHome;
    ifButterAtHome;

    notBoolError(){
        return () => {throw new Error("All properties of class Supply should be boolean")}
    }

    constructor(water, electricity, tea, bread, sausages, butter) {
        try {
            if(typeof water !== 'boolean' || typeof electricity !== 'boolean' || typeof tea !== 'boolean' || typeof bread !== 'boolean' || typeof sausages !== 'boolean' || typeof butter !== 'boolean'){
                this.notBoolError()();
            }
            this.ifWaterAtHome = water
            this.ifElectricityAtHome = electricity
            this.ifTeaAtHome = tea
            this.ifBreadAtHome = bread
            this.ifSausagesAtHome = sausages
            this.ifButterAtHome = butter
        }
        catch (e) {
            console.error(e);
        }
    }
}
function moduleCallBack(){
    return new Promise((resolve, reject) => {
        resolve("Breakfast is ready")
    })
}
function ifSupply(supply){
    if(!(supply instanceof Supply)){
        throw new Error("Parameter should be an object of Supply")
    }
}

function boilWater(supply){
    try{
        ifSupply(supply)
        return new Promise((resolve, reject) => {

        })
    }
    catch (e) {
        console.error(e);
    }
}