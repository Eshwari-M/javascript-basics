const link=document.querySelector('a');
const input=document.querySelector('input');
const para=document.querySelector('p');

console.log(link instanceof HTMLAnchorElement);
console.log(link instanceof HTMLElement);
console.log(link instanceof Element);
console.log(link instanceof Node);
console.log(link instanceof EventTarget);