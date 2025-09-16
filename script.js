const gridSize = document.querySelector("#gridsize");
const sketchButton = document.querySelector("#enter");
const container = document.querySelector(".main-container");



function showSize() {
    let size = gridSize.value;
    console.log(size)
    return size;
}

sketchButton.addEventListener("click", ()=> {
    showSize();
    createDiv()

})
    
function createDiv() {
    size = showSize()
    size = Math.min(size, 100)
    for(i = 0; i < size; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'rowdiv')
        
        for(j = 0; j < size; j++) {
            const divs = document.createElement('div');
             divs.textContent = " ";
             divs.setAttribute('class', 'coldiv')
             divs.addEventListener('click', ()=> {
                divs.style.backgroundColor = `rgb(
                ${Math.floor(Math.random() * 255)},
                ${Math.floor(Math.random() * 255)},
                ${Math.floor(Math.random() * 255)}
                )`
             })
             rowDiv.appendChild(divs);
            ;
        }
       
        container.appendChild(rowDiv)
    }
    
    
}
    

