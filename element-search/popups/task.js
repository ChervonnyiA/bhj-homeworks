const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");

const modalClose = document.getElementsByClassName("modal__close");
const showSuccess = document.getElementsByClassName("show-success");

modalMain.className = "modal modal_active";

for (let i = 0; i < Array.from(modalClose).length; i++) { 
    modalClose[i].onclick = function() {
        if (this.className === showSuccess[0].className) {
            modalSuccess.className = "modal modal_active";
        };  

        this.closest(".modal").className = "modal";
    }
}