const tab = document.getElementsByClassName("tab");
const tabContent = document.getElementsByClassName("tab__content");


console.log(tab);

function deactivateTab(tabs) {
    console.log(tabs);
    tabs.querySelector(".tab_active").className = "tab";
    tabs.querySelector(".tab__content_active").className = "tab__content";
}

for (let i = 0; i < tab.length; i++) {
    tab[i].onclick = () => {
        const tabs = tab[i].closest(".tabs");
        deactivateTab(tabs);
        tab[i].className = "tab tab_active";
        tabContent[i].className = "tab__content tab__content_active";
    }
    
}