const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello Wod')
}).listen(8080)

// const mainFun = require("./Task 1") //       <--
// mainFun(() => {console.log("call1")}, () => {console.log("call2")})
//
//
// const mainFun2 = require("./Task 2") //       <--
// mainFun2().then((result) => {
//    console.log(result());
// })


// const mainFun3 = require('./Task 3') //      <--
// // mainFun3('1').then((param) => {
// //     console.log(param())
// // })
// mainFun3(1).then((result) => {
//     console.log(result())
// })
// mainFun3(2).then((result) => {
//     console.log(result())
// })


const makeBreakfast = require("./Task 4")
const supply = require('./Supply')
makeBreakfast(new supply(true, true, true, true, true, true, true))

new Promise((resolve, reject) => {
    resolve("done")
}).then((value) => {console.log(value)})