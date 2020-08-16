'use strict'
console.log('Javascript datatypes')
// dataTypes
var str = 'string';
var num = 2;
var obj = { name: 'string'}
var arr = [1, 2, 3, 4]
var date = new Date()
var bool = true

console.log(`datatype of str is ${typeof str}`)
console.log(`datatype of num is ${typeof num}`)
console.log(`datatype of obj is ${typeof obj}`)
console.log(`datatype of arr is ${typeof arr}`)
console.log(`datatype of date is ${typeof date}`)
console.log(`datatype of bool is ${typeof bool}`)
console.log(`datatype of arr is ${arr instanceof Array}`)

console.log('\n\n\n\n\n\n\n\n')

console.log('Javascript var let const')
// var let const
var first = 'first'
let second = 'second'
const third = 'third'

first = 'f'
second = 's'
third = 't' // does not work
console.log(`first is ${first}`)
console.log(`second is ${second}`)
console.log(`third is ${third}`)

console.log('\n\n\n\n\n\n\n\n')


console.log('Javascript scoping')
{
  var first = 'first';
  let second = 'second';
  const third = 'third';
}

console.log(first)
console.log(second)
console.log(third)

// const variables do not work on object
const obj = { name: 'John Doe'}

console.log(obj)
Object.freeze(obj)
obj.name = 'Doe John'
console.log(obj)

const arr = [1, 2, 3]
arr[1] = 3
console.log(arr)
Object.freeze(arr)
arr[2] = 1
console.log(arr)

console.log('for/while loop')

let arr = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
console.log(sum)

let i = 0
sum = 0
while (i < arr.length) {
  sum += arr[i]
  i++
}
console.log(sum)

console.log('switch case')

let key = 5
switch (key) {
  case 5:
    console.log('is five')
  case 6:
    console.log('is greater than 5')
  default:
    console.log('default')
    break;
}

console.log("helpful math functions")

console.log(Math.round(4.7))
console.log(Math.round(4.4))
console.log(Math.round(4.5))
console.log(Math.pow(4, 2)) // 4^2
console.log(Math.sqrt(69))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))

higher order functions
let arr = [1, 2, 3, 4, 5]
let arrStr = ['floyd', 'john', 'faisal', 'levin']

const newArr = arr.map(x => {
  return x+1
})

const filterArr = arr.filter(x => {
  return x > 2
})

const reduceArr = arr.reduce((acc, curr) => {
  acc += curr 
  return acc
})

const findArr = arr.find(x => {
  return x === 4
})

const findIndex = arr.findIndex(x => {
  return x === 4
})

const sortArr = arr.sort((x, y) => {
  return y - x
})

const sortStrArr = arrStr.sort((x, y) => {
  if (x > y) {
    return -1
  }
  if (x < y) {
    return 1
  }
  return 0;
})

const mapArr = 

console.log(newArr)
console.log(filterArr)
console.log(reduceArr)
console.log(findArr)
console.log(findIndex)
console.log(sortArr)
console.log(sortStrArr)

console.log('functions scoping etc')

const a = 'hello'
const b = 'worlds'
function sum(a) {
  let b = 4
  return () => {
    return a + b
  }
}

console.log(sum(1)())

const s = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500)

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds")
    break;
  }
}

console.log('settimeouts and setintervals')

setTimeout(() => {
    console.log("hello")
}, 3000);

setTimeout(() => {
    console.log("world")
}, 4000)

let num = 0
setInterval(() => {
    console.log(num)
    num++
}, 1000)


console.log("callback functions")
const helloFunc = () => {
    setTimeout(() => {
        console.log("world")
    }, 1000);   
}

const worldFunc = (callback) => {
    setTimeout(() => {
        console.log("hello")
        callback()
    })
}

worldFunc(helloFunc)

console.log("callback functions")
let num = 0

const helloFunc = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello")
            resolve('done')
        }, 1000)
    })
       
}

const worldFunc = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("world")
            reject(new Error('done'))
        }, 3000)
    })
    
}


(async () => {
    try {
        await worldFunc()
        await helloFunc()
    } catch (error) {
        console.log(`error is ${error}`)
    }
})()


let myWorker = new Worker('./worker.js')
myWorker.postMessage(1000)
myWorker.onmessage = (e) => {
    console.log(`Message received, result is: ${e.data}`)
}

for(let i = 0; i < 1000; i++) {
    console.log(`doing other stuff ${i}`)
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))