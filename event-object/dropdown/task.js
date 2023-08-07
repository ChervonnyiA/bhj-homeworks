const dropdownItem = document.getElementsByClassName("dropdown__item");
const dropdownList = document.getElementsByClassName("dropdown__list");
const dropdownValue = document.getElementsByClassName("dropdown__value");

for (let i = 0; i < dropdownValue.length; i++) {
    dropdownValue[i].onclick = () => {
        const list = dropdownValue[i].closest(".dropdown").querySelector("ul");
        if (list.className === "dropdown__list") {
            list.className = "dropdown__list dropdown__list_active";
        } else {
            list.className = "dropdown__list";
        }
    }
}

for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].onclick = () => {
        const list = dropdownItem[i].closest("ul");
        const value = dropdownItem[i].closest(".dropdown").querySelector(".dropdown__value");

        list.className = "dropdown__list";
        value.textContent = dropdownItem[i].textContent;
        return false;
    }
    
}