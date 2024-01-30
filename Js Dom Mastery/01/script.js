let btn = document.querySelector("button");
let paragraph = document.querySelector("p");

btn.addEventListener("click", ()=>{
    paragraph.textContent = "Text changed upon clicked on the button.";
})