self.onmessage = (e) => {
  console.log(`Message received here is your payload ${e}`)
  const num = e.data
   for(let i = 0; i < num; i++) {
        console.log(i)
  }
  self.postMessage('done')
}