let bulb = document.querySelector("#bulb")
let btn = document.querySelector("button")

let box = document.querySelector("#box")

let flag = 0;
btn.addEventListener("click", () => {
    if(flag == 0) {
        bulb.style.backgroundColor = "yellow"
        flag = 1;
    } else {
        bulb.style.backgroundColor = "transparent"
        flag = 0;
    }
    
})

// h1
let h = document.querySelectorAll("h1")
h.forEach((e) => {      // forEach on the NodeList
    console.log(e);
})

//+++++++++++
box.innerHTML = "<h1>Lets gooo</h1>"
// box.textContent = "<h1>Lets gooo</h1>"