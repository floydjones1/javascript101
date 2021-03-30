let timeoutId = 0;

function startTimer() {
  const input = document.getElementById("startNumber");
  if (isNaN(input.value)) {
    alert("hey this isn't a number");
    return;
  }

  let number = parseInt(input.value);

  const id = setInterval(() => {
    console.log("hey");
    if (number === 0) {
      timeoutId = setTimeout(finishedTimer, 2000);
      clearInterval(id);
    }
    const box = document.getElementsByClassName("box")[0];
    box.innerText = number;
    number--;
  }, 1000);
}

function finishedTimer() {
  const box = document.getElementsByClassName("box")[0];
  box.innerText = "HURRAY YOU HAVE FINISHED";
}

function stopTimer() {
  console.log("stopped");
  clearTimeout(timeoutId);
}

document.querySelector("#startButton").addEventListener("click", startTimer);
document.querySelector("#stopButton").addEventListener("click", stopTimer);

// setTimeout <--- run a function after x amount of time
// setInterval <---- run a function after x amount of time infinitely
