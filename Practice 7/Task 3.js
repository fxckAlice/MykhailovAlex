

function promise(parameter) {
    try{
        if (parameter === "error") return new Promise((resolve, reject) => {
            reject('error')
        })
        else if (parameter === "even") return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(() => {
                    return parameter
                })
            }, 2000)
        })
        else if (parameter === "odd") return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(() => {
                    return parameter
                })
            }, 1000)
        })
    }
    catch (e){
        console.error(e)
    }
}

function main(data) {
    if (typeof data !== "number") {
        return promise("error");
    } else if (data % 2 === 0) {
        return promise("even");
    } else {
        return promise("odd");
    }
}

module.exports = main;