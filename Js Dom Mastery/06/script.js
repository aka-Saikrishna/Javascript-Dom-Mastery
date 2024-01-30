// Legacy and inefficent code:

// let home = document.querySelector("#home");
// let about = document.querySelector("#about");
// let contact = document.querySelector("#contact");

// let hometext = document.querySelector("#homeText");
// let abouttext = document.querySelector("#aboutText");
// let contacttext = document.querySelector("#contactText");

// let h4 = document.querySelectorAll("h4")


// home.addEventListener("click", () => {
//     removeUnclickedText()
//     hometext.style.display = "block";
// hometext.style.width = "50%";
// });

// about.addEventListener("click", () => {
//     removeUnclickedText()
//     abouttext.style.display = "block";
// abouttext.style.width = "50%";
// });

// contact.addEventListener("click", () => {
//         removeUnclickedText()
//     contacttext.style.display = "block";
// contacttext.style.width = "50%";
// });

// removeUnclickedText = () => {
//     h4.forEach((h4)=>{
//         h4.style.display = "none";
//     })
// }

//  Efficent code

let divs =  document.querySelectorAll(".tab");
let texts = document.querySelectorAll("h4");

// texts[0].style.display = "block";
// texts[0].style.width = "50%";

divs.forEach((div, index) => {
    div.addEventListener("click", () => {
        hideAllText();
        texts[index].style.display = "block";
        texts[index].style.width = "50%";
    });
});
hideAllText = () => {
    texts.forEach((text) => {
        text.style.display = "none"
    })
}