'use strict';

{
  /* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */
}

const sizeControl = document.querySelector('#font-size-control');
const textExample = document.querySelector('#text');
console.log(textExample);

sizeControl.addEventListener('input', () => {
  textExample.style.fontSize = `${sizeControl.value}px`;
});
