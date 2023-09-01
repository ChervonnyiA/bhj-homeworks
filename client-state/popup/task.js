const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

if (document.cookie !== getCookie('modal')) {
    modal.classList.add("modal_active");
}

modalClose.addEventListener("click", () => {
    modal.classList.toggle("modal_active");
    setCookie(modal, closed);
})    

function setCookie(name, value) {
    document.cookie = name + '=' + value;
}

function getCookie(name) {
    let pairs = document.cookie.split('; ');
    let cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie;
}

