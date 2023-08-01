const btnPrev = document.getElementsByClassName("slider__arrow_prev");
const btnNext = document.getElementsByClassName("slider__arrow_next");
const images = document.getElementsByClassName("slider__item");
const sliderDot = document.getElementsByClassName("slider__dot");

let arrayImgs = Array.from(images);
let arrayDots = Array.from(sliderDot);
arrayDots[0].className = "slider__dot slider__dot_active";

function activateImg(index) {
    arrayImgs[index].className = "slider__item slider__item_active";
    arrayDots[index].className = "slider__dot slider__dot_active";
}

function findAndOffActive() {
    let index = arrayImgs.findIndex((element) => element.className === "slider__item slider__item_active");
    arrayImgs[index].className = "slider__item";
    arrayDots[index].className = "slider__dot"
    return index;
}

btnPrev[0].onclick = () => {
    let index = findAndOffActive();

    if (!index) {
        activateImg(arrayImgs.length - 1);
    } else {
        activateImg(index - 1);
    }
}

btnNext[0].onclick = () => {
    let index = findAndOffActive();

    if (index + 1 === arrayImgs.length) {
        activateImg(0);
    } else {
        activateImg(index + 1);
    }
    
}

for (let i = 0; i < arrayDots.length; i++) {
    sliderDot[i].onclick = () => {
        findAndOffActive();
        activateImg(i);
    }
}














for (let i = 0; i < arrayDots.length; i++) {
    sliderDot[i].onclick = () => {
        const activeDot = document.getElementsByClassName("slider__dot slider__dot_active");
        const activeImg = document.getElementsByClassName("slider__item slider__item_active");

        if (activeDot.length) {
            activeDot[0].className = "slider__dot";
        };
        activeImg[0].className = "slider__item";

        arrayDots[i].className =  "slider__dot slider__dot_active";
        arrayImgs[i].className = "slider__item slider__item_active";
    }
}