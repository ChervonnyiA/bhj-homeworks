const menuLink = document.getElementsByClassName("menu__link");
const menuActive = document.getElementsByClassName("menu menu_sub menu_active");

function clearActive() {
    arrayActive = Array.from(menuActive);
    if (arrayActive.length === 1) {
        for (let i = 0; i < arrayActive.length; i++) {
            arrayActive[i].className = "menu menu_sub";
        }
    }
}

for (let i = 0; i < Array.from(menuLink).length; i++) {
    menuLink[i].onclick = function() {
        const menuSub = this.closest("li").querySelector("ul");

        if (!menuSub) {
            return;
        }

        if (menuSub.className === "menu menu_sub") {
            clearActive();
            menuSub.className = "menu menu_sub menu_active";
            return false;
        } else {
            menuSub.className = "menu menu_sub";
            return false;
        }
    }
}