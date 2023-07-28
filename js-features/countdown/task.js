const text = document.getElementById("timer");
let time = new Date(["2023-07-23", text.textContent]);
let seconds = time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();


const timer = setInterval(() => {
    timeLeft = Date.now() - time;
    seconds -= 1;
    text.textContent = new Date(2023, 0, 0, 0, 0, seconds).toLocaleTimeString();

    if (seconds <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timer);
        var url = document.createElement('a');
        url.href = 'homework.file';
        url.click();
    }
}, 1000);

