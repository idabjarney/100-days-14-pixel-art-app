import './styles/styles.scss';
"use strict";

const container = document.querySelector('.container');
const colourInput = document.getElementById('colour-input');
console.log(colourInput)



container.style.display = 'grid';
container.style.gridTemplateColumns = ':repeat(16, 1fr';
 for (let i = 0; i < 5000; i++) {
      const gridBox = document.createElement('div');
      gridBox.classList.add('gridBox');
      container.appendChild(gridBox);
      gridBox.draggable = true;
      gridBox.addEventListener('mousedown', function(e) {
        e.target.style.cursor = 'crosshair';
        gridBox.style.backgroundColor = colourInput.value;
      })
      
      gridBox.addEventListener('dragenter', function(e) {

        e.preventDefault();
        e.target.style.cursor = 'crosshair';
        gridBox.style.backgroundColor = colourInput.value;
      })
  }



