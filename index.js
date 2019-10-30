// console.log("hello")

//declear variable
//number
//string    '', "", ``
//obj       {}
//array     []

var x   //global
let y   //local, can assign
const z = 5 //same let, cant assign

let myobj = {
    a: 2,
    b: 3
}

myobj['a']
myobj.a

myfunc = () => {
    console.log("lion")
}

const myfunc2 = (a,b) => {
    return a + b
}

var tmpfunc = () => {
    myfunc()
}

// console.log(myfuk('cat','bat'))

tmpfunc()
