let form = document.querySelector("form");
// let inp1 = document.getElementById("input1");
// let inp2 = document.getElementById("input2");
// for multiple selection of inputs
let inps = document.querySelectorAll('input[type="text"]');
let h3 = document.querySelector("h3");

// Form will reload website on clicking on the submit
// this will prevent form reloading on submit.
form.addEventListener("submit", (e) => {
  e.preventDefault();
//   if (inp1.value === "" || inp2.value === "") {
//     h3.textContent = "Error, fill the fields";
//     h3.style.color = "red";
//     h3.style.fontFamily = "Helvetica"
//   } else {
//     h3.textContent = "";
//   }
    for (let i = 0; i < inps.length; i++) {
        if (inps[i].value.trim() === '') {
            h3.textContent = "Error, fill the fields";
            h3.style.color = "red";
            break;
        }
        else {
            h3.textContent = ""
        }

        
    }
});
