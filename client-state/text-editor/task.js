const text = document.getElementById("editor");

window.addEventListener("load", () => {
    text.value = localStorage.getItem("text");
})

text.addEventListener("keyup", () => {
    localStorage.text = text.value;
})