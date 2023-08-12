const rotator = document.getElementsByClassName("rotator");

[...rotator].forEach(rotator => {
    const rotatorCases = rotator.querySelectorAll(".rotator__case");

    
    const change = (counter) => {
        [...rotatorCases].forEach(element => {
            element.classList.remove("rotator__case_active");
        })

        counter = rotatorCases[counter + 2] ? counter + 1 : 0;

        let color = rotatorCases[counter].getAttribute("data-color");
        let speed = rotatorCases[counter].getAttribute("data-speed");

        rotatorCases[counter].setAttribute("style", `color: ${color}`);
        rotatorCases[counter].classList.add("rotator__case_active");  
        
        
        setTimeout(change, speed, counter);
      
    }

    change(-1);
})





