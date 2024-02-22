

const conteinerBox = document.getElementById('conteiner');
let boxJ = document.querySelector('box');

const numElconteinerBox = 100;

for(let i = 0; i <= numElconteinerBox; i++){
  conteinerBox.innerHTML += `<div class="box">${i}</div>`;

  if(i % 3){
    boxJ = 'Fizz';
  } else if ( i % 5){
    boxj = 'Buzz';
  } else {
    boxJ = i
  }
};
  