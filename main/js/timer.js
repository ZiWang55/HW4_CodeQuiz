// TIMER

let count = 15;
let interval = setInterval(function () {
  document.getElementById("count").innerHTML = count;
  count--;
  if (count === 0) {
    clearInterval(interval);
    document.getElementById("count").innerHTML = "Done";
    // notifying out of time
    alert("You're out of time!");
  }
}, 1000);
