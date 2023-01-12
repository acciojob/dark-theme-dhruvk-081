let swapTheme = document.getElementById("swap");
let buttonTheme = document.querySelector("#swap");


swapTheme.onclick = function () {
    document.body.classList.toggle("night");
    buttonTheme.classList.toggle("button_night");
}
