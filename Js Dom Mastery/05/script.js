let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let h3 = document.querySelector("h3");
let startInterval;
start.addEventListener("click", function () {
  let count = 0;
  // setInterval(callback function, timer[ms])
  startInterval = setInterval(function () {
    h3.textContent = count;
    count++;
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(startInterval);
});
