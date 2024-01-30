let progress = document.querySelector("#progress");
let h3 = document.querySelector("h3");

let count = 0;
let interval = setInterval(() => {
    if(count === 100){
        clearInterval(interval);
        h3.style.display = "block"
    }
    count++;
    progress.style.width = count + '%';
}, 70)