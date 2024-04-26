class Supply{
    ifWaterAtHome;
    ifElectricityAtHome;
    ifTeaAtHome;
    ifSugarAtHome;
    ifBreadAtHome;
    ifSausagesAtHome;
    ifButterAtHome;

    notBoolError(){
        return () => {throw new Error("All properties of class Supply should be boolean")}
    }

    constructor(water, electricity, tea, sugar, bread, sausages, butter) {
        try {
            if(typeof water !== 'boolean' || typeof electricity !== 'boolean' || typeof tea !== 'boolean' || typeof sugar !== 'boolean' || typeof bread !== 'boolean' || typeof sausages !== 'boolean' || typeof butter !== 'boolean'){
                this.notBoolError()();
            }
            this.ifWaterAtHome = water
            this.ifElectricityAtHome = electricity
            this.ifTeaAtHome = tea
            this.ifSugarAtHome = sugar
            this.ifBreadAtHome = bread
            this.ifSausagesAtHome = sausages
            this.ifButterAtHome = butter
        }
        catch (e) {
            console.error(e);
        }
    }
}
module.exports = Supply;