console.log(document.querySelector("#employee").nodeType);

// 1 -> element node (Tags)
// 2 -> an attribute
// 3 -> text node

let employee = document.querySelector("#employee");

console.log(employee.children); // h2, p
console.log(employee.firstElementChild);
console.log(employee.lastElementChild);
console.log(employee.parentElement);

console.log(employee.childNodes); // text, h2, text, p, text

let image = document.querySelector("#profile");

console.log(image.getAttribute("src")); // read the content present inside the attribute

image.setAttribute(
    "src",
    "https://t4.ftcdn.net/jpg/05/78/43/83/360_F_578438327_R6MwMnxXb48epnS92AJg8tUZrYNTB9ZW.jpg"
); // change the attributes data

// check the attributes data
console.log(image.hasAttribute("alt"));

// remove any attribute
image.removeAttribute("alt");

console.log(image.hasAttribute("alt"));

let title = document.querySelector("h2");

console.log(title instanceof HTMLElement);

console.log(title instanceof HTMLHeadingElement);

// instanceof - we are gonna check whether an object belongs to a particular type.