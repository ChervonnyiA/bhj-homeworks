const btnPrev = document.getElementsByClassName("slider__arrow slider__arrow_prev");
const btnNext = document.getElementsByClassName("slider__arrow slider__arrow_next");
const images = document.getElementsByClassName("slider__item");
const sliderDot = document.getElementsByClassName("slider__dot");

let arrayImgs = Array.from(images);
let arrayDots = Array.from(sliderDot);

arrayDots[0].className = "slider__dot slider__dot_active";

btnPrev[0].onclick = () => {
    const activeDot = document.getElementsByClassName("slider__dot slider__dot_active");

    if (activeDot.length) {
        activeDot[0].className = "slider__dot";
    };

    for (let i = 0; i < arrayImgs.length; i++) {
        if (arrayImgs[i].className === "slider__item slider__item_active") {
            if (i === 0) {
                arrayImgs[i].className = "slider__item";
                arrayImgs[arrayImgs.length - 1].className = "slider__item slider__item_active";
                arrayDots[arrayImgs.length - 1].className = "slider__dot slider__dot_active";
                return;
            };

            arrayImgs[i].className = "slider__item";
            arrayImgs[i - 1].className = "slider__item slider__item_active";
            arrayDots[i - 1].className = "slider__dot slider__dot_active";
            return;
        }
    }
}

btnNext[0].onclick = () => {
    const activeDot = document.getElementsByClassName("slider__dot slider__dot_active");

    if (activeDot.length) {
        activeDot[0].className = "slider__dot";
    };

    for (let i = 0; i < arrayImgs.length; i++) {
        if (arrayImgs[i].className === "slider__item slider__item_active") {
            if (i === arrayImgs.length - 1) {
                arrayImgs[i].className = "slider__item";
                arrayImgs[0].className = "slider__item slider__item_active";
                arrayDots[0].className ="slider__dot slider__dot_active";
                return;
            };

            arrayImgs[i].className = "slider__item";
            arrayImgs[i + 1].className = "slider__item slider__item_active";
            arrayDots[i + 1].className = "slider__dot slider__dot_active";
            return;
        }
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