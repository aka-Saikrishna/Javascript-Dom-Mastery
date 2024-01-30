let textarea = document.querySelector("textarea");
let span = document.querySelector("span");

let charCount;
textarea.addEventListener("input", () => {
   span.textContent =  textarea.value.length;
})