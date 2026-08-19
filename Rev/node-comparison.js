const div = document.querySelector('div');
const button = document.querySelector('button');
const link = document.querySelector('a');
const paragraph = document.querySelector('p');
const textNode = paragraph.firstChild;
const comment = document.createComment('This is a comment');

console.log(div.nodeType);
console.log(button.nodeType);
console.log(link.nodeType);
console.log(textNode.nodeType);
console.log(comment.nodeType);
console.log(document.nodeType);

// check if it's an element
if(div.nodeType === 1){
    console.log('This is an element node');
}

// check if it's a text
if(textNode.nodeType === 3){
    console.log('This is a text node');
    console.log('Text content:', textNode.textContent);
}

// check if it's a comment
if(comment.nodeType === 8){
    console.log('This is a comment node');
}

// check document node
if(document.nodeType === 9){
    console.log('This is a document node');
}