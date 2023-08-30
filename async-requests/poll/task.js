const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = "json";
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let answers = xhr.response.data.answers;

        pollTitle.innerText = xhr.response.data.title;

        for (let answer of answers) {
            pollAnswers.insertAdjacentHTML("afterbegin",
            `<button class="poll__answer">${answer}</button>`)
        }

        const buttons = Array.from(document.getElementsByClassName("poll__answer"));

        for (button of buttons) {
            button.addEventListener('click', () => alert("Спасибо, ваш голос засчитан!"));
        }
    }
})