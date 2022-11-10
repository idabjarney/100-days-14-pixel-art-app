import './styles/styles.scss';
"use strict";

const container = document.querySelector('.container');
const colourInput = document.getElementById('colour-input');
const clearBtn = document.querySelector('.clear-button');
const sizeButtons = document.querySelectorAll('.select-button');

clearBtn.addEventListener('click', clearAll);


sizeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 0) {
      clearAll()
      container.classList.add('small-boxes');
      container.classList.remove('medium-boxes');
      container.classList.remove('large-boxes');
    };
    if (index === 1) {
      clearAll()
      container.classList.remove('small-boxes');
      container.classList.add('medium-boxes');
      container.classList.remove('large-boxes');
    };
    if (index === 2) {
      clearAll()
      container.classList.remove('small-boxes');
      container.classList.remove('medium-boxes');
      container.classList.add('large-boxes');
    };
  })
})

for (let i = 0; i < 5000; i++) {
  const gridBox = document.createElement('div');
  gridBox.classList.add('gridBox');
  container.appendChild(gridBox);
  gridBox.draggable = true;

  gridBox.addEventListener('mousedown', function(e) {
    colourSquare(gridBox);
  })
  
  gridBox.addEventListener('dragenter', function(e) {
    colourSquare(gridBox);
  });
};


function clearAll() {
  const squaresToReset = Array.from(document.querySelectorAll('.coloured'));
  squaresToReset.forEach(square => {
    square.classList.remove('coloured');
    square.style.backgroundColor = 'transparent';
  })
}

function colourSquare(gridBox) {
  gridBox.style.backgroundColor = colourInput.value;
  gridBox.classList.add('coloured');
}



