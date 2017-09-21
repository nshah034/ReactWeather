// function getTempCallBack(location, callback) {
//   callback(undefined, 78)
//   callback('City not found')
// }
//
// getTempCallBack('Philly', function(err, temp){
//   if(err) {
//     console.log('error', err)
//   } else {
//     console.log('success', temp)
//   }
// })
//
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function(){
//       resolve(79)
//       reject('Not Found')
//     }, 1000)
//   })
// }
//
//
// getTempPromise('Philly').then(function(temp){
//   console.log('Suceess', temp)
// }, function(err) {
//   console.log('Error', err)
// })

//
// function addPromise(a,b) {
//   return new Promise(function(resolve, reject) {
//     if(!a || !b || isNaN(a) || isNaN(b)) {
//       reject('something is wrong')
//     } else {
//       resolve(a+b)
//     }
//   })
// }
//
// addPromise(3, '/hello').then(function(result){
//   console.log('success', result)
// }, function(err) {
//   console.log('Error', err)
// }
// )
function add (a,b) {
  return a+ b
}
const add1 = (a,b) => a + b
const add2 = (a,b) => {
  return a + b
}

console.log(add2(1,3))
console.log(add2(9,0))
