const cookie = document.getElementById("cookie");
const clickerSpeed = document.getElementById("clicker__speed__counter");
const clicker = document.getElementById("clicker__counter");

let clickerCounter = 0 
let previosClickTime = Date.now();

function cookieAction() {
    clicker.textContent = ++clickerCounter;

    clickerSpeed.textContent = ((Date.now() - previosClickTime) / 1000).toFixed(2); 
    previosClickTime = Date.now();

    if (cookie.width === 200) {
        cookie.width = 300;
    } else {
        cookie.width = 200;
    };
}

cookie.onclick = cookieAction;


