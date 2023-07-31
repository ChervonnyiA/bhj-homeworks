const menuItem = document.getElementsByClassName("menu__item");
const menuActive = document.getElementsByClassName("menu menu_sub menu_active");

for (let i = 0; i < Array.from(menuItem).length; i++) {
    menuItem[i].onclick = function() {
        const menuSub = this.querySelector("ul");

        if (!menuSub) {
            return true;
        }

        if (menuSub.className === "menu menu_sub") {
            arrayActive = Array.from(menuActive);
            if (arrayActive.length === 1) {
                for (let i = 0; i < arrayActive.length; i++) {
                    arrayActive[i].className = "menu menu_sub";
                }
            }

            menuSub.className = "menu menu_sub menu_active";
            return false;
        } else if (menuSub.className === "menu menu_sub menu_active") {
            menuSub.className = "menu menu_sub";
            return false;
        }
    }
}