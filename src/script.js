import './styles/styles.scss';
"use strict";

const container = document.querySelector('.container');
const colourInput = document.getElementById('colour-input');
const clearBtn = document.querySelector('.clear-button');
const sizeButtons = document.querySelectorAll('.select-button');
const colourButton = document.querySelector('.colour-container');


clearBtn.addEventListener('click', clearAll);

colourInput.addEventListener('change', function() {
  const colourInputRgba = hexToRgbA(colourInput.value);
  const sizeParagraph = document.querySelector('.size-paragraph');
  const h1 = document.querySelector('h1');
  const h1span = document.querySelector('.h1-span');
  document.body.style.background = `linear-gradient(0deg, rgba(17,17,17,1) 0%, rgba(19,19,19,1) 40%, ${colourInputRgba} 40%, ${colourInputRgba} 60%, rgba(19,19,19,1) 60%, rgba(17,17,17,1) 100%)`;
  sizeParagraph.style.color = colourInput.value;
  h1.style.borderBottomColor = colourInput.value;
  h1span.style.color = colourInput.value;
});

clearBtn.addEventListener('mouseenter', () => {
  clearBtn.style.backgroundColor = colourInput.value;
});

clearBtn.addEventListener('mouseleave', () => {
  clearBtn.style.backgroundColor = '#c7bba6';
});

colourButton.addEventListener('mouseenter', () => {
  colourButton.style.backgroundColor = colourInput.value;
});

colourButton.addEventListener('mouseleave', () => {
  colourButton.style.backgroundColor = '#c7bba6';
});


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
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = colourInput.value;
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#c7bba6';
  });
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

function hexToRgbA(hex){
  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
  }
  throw new Error('Bad Hex');
}


