

function main(callback1, callback2) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(callback1());
        }, 1000);
    }).then(value => {console.log(value)});
    let counter = 0;
    new Promise((resolve, reject) => {
        let interval = setInterval(() => {
            resolve(callback2())
            counter++
            if(counter == 3) clearInterval(interval)
        }, 1000)
    }).then(value => {console.log(value)});
}
module.exports = main

// main(() => {console.log("call1")}, () => {console.log("call2")});
