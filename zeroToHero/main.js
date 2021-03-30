console.log("Javascript Zero to Hero")

// var str = 'string'
// var num = 2
// var obj = { name: 'string' }
// var arr = [1, 2, 3, 'bob']
// var date = new Date()
// var bool = true

// console.log(`datatype of str ${typeof str}`)
// console.log(`datatype of num ${typeof num}`)
// console.log(`datatype of obj ${typeof obj}`)
// console.log(`datatype of arr ${typeof arr}`)
// console.log(`datatype of date ${typeof date}`)
// console.log(`datatype of bool ${typeof bool}`)




// var first = 'string1'
// let second = 'string2'
// const third = 'string3'

// first = 'sadsa'
// second = 'dasdasdas'
// third = 'dasdasd'

// console.log(third)

// const obj = { name: 'dasdas' }
// Object.freeze(obj)
// obj.name = 'Brad'

// console.log(obj)
// const arr = [1, 2, 3, 4, 5]

// let sum = 0
// for(let i = 0; i < arr.length; i++) {
//   sum += arr[i]
// }
// console.log(sum)

// let i = 0
// while(i < arr.length) {
//   sum += arr[i]
//   i++
// }

// console.log("the sum is ", sum)

// let key = 7
// switch (key) {
//   case 2:
//     console.log("this is 2")
//     break;
//   case 4:
//     console.log("this is 4")
//     break;
//   case 5:
//     console.log("this is 5")
//     break;
//   default:
//     console.log("this is a default catch")
// }

// console.log(Math.floor(4.7))
// console.log(Math.ceil(4.3))
// console.log(Math.round(4.5))

// let arr = [2, 1, 5, 4, 3]
// let arrStr = ['john', 'doe', 'phil', 'jacob']

// const sort = (x, y) => {
// if (x > y) {
//     return 1
//   }
//   if (x < y) {
//     return -1
//   }
//   return 0;
// }

// const newArr = arr.sort(sort)

// console.log(newArr)

// const sum = (x) => {
//   return (y) => {
//     return x + y
//   }
// }

// const addToThree = sum(3)
// const addToNine = sum(9)

// console.log(addToNine(10))

// setTimeout(() => {
//   console.log("hello")
// }, 3000)

// setTimeout(() => {
//   console.log("world")
// }, 2000)

// let count = 0
// setInterval(() => {
//   count++
//   console.log(count)
// }, 2000)

// const worldFunc = () => {
//   setTimeout(() => {
//     console.log("world")
//   }, 1000)
// }

// const helloFunc = (callback) => {
//   setTimeout(() => {
//     console.log("hello")
//     callback()
//   }, 5000)
// }

// helloFunc(worldFunc)

// const helloFunc = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("hello")
//       resolve()
//   }, 2000)
//   })
// }

// const worldFunc = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("world")
//       reject(new Error('something went wrong'))
//     }, 1000)
//   })
// }

// helloFunc().then(() => {
//   worldFunc().then().catch(err => console.log(err))
// })


// let myWorker = new Worker('./worker.js')
// myWorker.postMessage('hello world')

// myWorker.onmessage = (e) => {
//   console.log(`Message received , result is: ${e.data}`)
// }

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))