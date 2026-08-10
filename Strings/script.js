console.log("Strings in JS");
let empName="Nicholas";
console.log("Employee name: ",empName);
console.log(empName[3]);
for(let index=0;index<empName.length;index++){  
    console.log("empName(",index,") is ",empName[index]);
}

//slice() - a part of the string 
console.log(
    "empName is ",
    empName,
    "after slice from 3 - ",
    empName.slice(3,5),
);
console.log(empName.slice(3,5));

//substring
console.log("Substring (2,6) is - ",empName.substring(2,6));

//split
let skills = "html,css,js,script";
console.log(skills.split(","));
let fullName="Samuel.Nicholas";
console.log(fullName.split("."));

//for - of loop
for(let characters of fullName){
    console.log("character is ",characters);
}

console.log(fullName.toUpperCase());
let message = "        Hey";
console.log(message.trim());

//search bars,login forms,email id
let emailID="samuelnicholas@gmail.com";
console.log(emailID.includes("@"));
console.log(emailID.includes("yahoo.com"));
console.log(emailID.includes("h"));