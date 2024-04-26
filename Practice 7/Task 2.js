function main() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(() => {return 'hello world'}) }, 2000);
    })
}
module.exports = main;