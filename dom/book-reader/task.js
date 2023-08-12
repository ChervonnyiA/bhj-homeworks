const fontSize = document.getElementsByClassName("font-size");
const textColor = document.getElementsByClassName("book__control_color")[0].querySelectorAll("a");
const bgColor = document.getElementsByClassName("book__control_background")[0].querySelectorAll("a");;
const book = document.getElementById("book");

[...fontSize].forEach(element => {
    element.onclick = () => {
        [...fontSize].forEach(element => {
            element.classList.remove("font-size_active");
        });
        book.classList.remove("book_fs-small");
        book.classList.remove("book_fs-big");
        book.classList.remove("book_fs-null");

        let size = element.getAttribute("data-size");
        element.classList.add("font-size_active");

        book.classList.add("book_fs-" + size);
        console.log(book);
        return false;
    }
})

textColor.forEach(element => {
    element.onclick = () => {
        [...textColor].forEach(element => {
            element.classList.remove("color_active");
        });
        book.classList.remove("book_color-black");
        book.classList.remove("book_color-gray");
        book.classList.remove("book_color-whitesmoke");
                

        let color = element.getAttribute("data-text-color");
        element.classList.add("color_active");

        book.classList.add("book_color-" + color);

        console.log(book);
        return false;
    }
})

bgColor.forEach(element => {
    element.onclick = () => {
        [...bgColor].forEach(element => {
            element.classList.remove("color_active");
        });
        book.classList.remove("book_bg-black");
        book.classList.remove("book_bg-gray");
        book.classList.remove("book_bg-whitesmoke");

        let color = element.getAttribute("data-bg-color");
        element.classList.add("color_active");

        book.classList.add("book_bg-" + color);
        console.log(book);
        return false;
    }
})