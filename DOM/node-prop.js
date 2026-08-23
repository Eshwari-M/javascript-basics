//Element node for link

const likeElement=document.querySelector('a');
console.log(likeElement.href);
console.log(likeElement.target);

//Element node for the input

const inputElement=document.querySelector('input');
console.log(inputElement.value);
console.log(inputElement.type);
console.log(inputElement.disabled);

const textNode=document.querySelector('p').firstChild;
console.log(textNode.nodeValue);
console.log(textNode.length);