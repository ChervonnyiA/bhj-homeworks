const block = document.getElementsByClassName("reveal");
let blockArr = Array.from(block);

addEventListener("scroll", () => {
    const documentHeight = document.documentElement.clientHeight;
    blockArr.forEach(element => {
        const elementSize = element.getBoundingClientRect();
        if (elementSize.bottom < 0) {
            element.classList.remove("reveal_active");
        } else if (elementSize.top <= documentHeight) {
            element.classList.add("reveal_active");
        } else if (elementSize.top > documentHeight) {
            element.classList.remove("reveal_active");
        }
    });
})
