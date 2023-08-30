const loader = document.getElementById("loader");
const container = document.getElementById("items");
const xhr = new XMLHttpRequest();



xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = "json";
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let valute = Object.values(xhr.response.response.Valute);
        loader.classList.toggle("loader_active");

        for (let valuteItem of valute) {
            container.insertAdjacentHTML("afterbegin",
            `<div class="item">
            <div class="item__code">${valuteItem.CharCode}</div>
            <div class="item__value">${valuteItem.Value}</div>
            <div class="item__currency">руб.</div>
            </div>`)
        }
    }
})

