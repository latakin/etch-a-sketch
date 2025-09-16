
const gridSize = document.querySelector("#gridsize");
const sketchButton = document.querySelector("#enter");
const container = document.querySelector(".main-container");

document.addEventListener('DOMContentLoaded', ()=> {
    createDiv(16);
})
 


sketchButton.addEventListener("click", ()=> {
    const size = prompt('how many squares do you want? min =1, max= 100');
    if (size > 100 || size === "" || size === 0 || isNaN(size)) {
        alert('Minimum is 1 and Maximum is 100');
    }
    else {
    container.innerHTML = " ";
    createDiv(size)
    }

})
    
function createDiv(size) {
    for(i = 0; i < size; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'rowdiv')
        
        for(j = 0; j < size; j++) {
            const divs = document.createElement('div');
             divs.textContent = " ";
             divs.setAttribute('class', 'coldiv')
             divs.addEventListener('mouseover', ()=> {
                divs.style.backgroundColor = `rgb(
                ${Math.floor(Math.random() * 255)},
                ${Math.floor(Math.random() * 255)},
                ${Math.floor(Math.random() * 255)}
                )`
             })

             divs.addEventListener('mouseout', ()=> {
                setTimeout(()=> {
                    divs.style.backgroundColor = 'white';
                }, 1000)
             })
             rowDiv.appendChild(divs);
            ;
        }
       
        container.appendChild(rowDiv)
    }
    
    
}
    

