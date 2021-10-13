console.log(1)
const p = new Promise((resolve, reject)=>{
  console.log('r1')
  resolve('r2')
})
p.then(data => console.log(data))
console.log(2)