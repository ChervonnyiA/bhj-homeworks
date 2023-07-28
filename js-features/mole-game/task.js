const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");
let getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = () => {
        if (getHole(i).classList.contains('hole_has-mole')) {
            deadCounter.textContent++;
        } else {
            lostCounter.textContent++;
        };

        if (deadCounter.textContent === '10') {
            alert("Победа!");
            location.reload();
        } else if (lostCounter.textContent === '5') {
            alert("Поражение!");
            location.reload();
        };
    }    
}


