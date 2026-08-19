function sayHi(){
    alert("Hello")
}

sayHi();
window.sayHi();

var name="Eve";
console.log(name);
console.log(window.name)

alert(window.innerHeight);
alert(window.innerWidth);

console.log("Window height="+window.innerHeight);
console.log("Window height="+window.innerWidth);

if(window.innerWidth<768){
    console.log("Mobile Device");
}