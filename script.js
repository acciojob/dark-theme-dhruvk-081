let appTheme = document.querySelector("#app");
let buttonTheme= document.querySelector("#swap");


 function swapTheme() {
    appTheme.classList.toggle("night");
    buttonTheme.classList.toggle("button_night");
}
