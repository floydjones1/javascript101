self.onmessage = (e) => {
  console.log(`Message was received with payload ${e.data}`);
  // a bunch workd
  // console.log(fibonacci(100000020));
  let index = 0;
  while (true) {
    index++;
    console.log(index);
  }
  self.postMessage("done work");
};

function fibonacci(num) {
  var a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
