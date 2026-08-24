let boxElement=document.querySelector("#box");
console.log(boxElement.innerHTML);
//boxElement.innerHTML="<p>New content</p>";
console.log(boxElement.innerText);
console.log(boxElement.textContent);

let box1=document.querySelector("#box1");
box1Ele.innerHTML="<b>Hello!!!</b>";
let box2=document.querySelector("#box2");
box2.innerText="<b>Hello---</b>";
let box3=document.querySelector("#box3");
box3.textContent="<b>Hello...</b>";

let message=document.querySelector("#message");
console.log(message.className);

message.className="important";
message.classList.add("highlight");
message.classList.add("text");
message.classList.remove("text");
console.log(message.classList.contains("text"));

let msg=document.querySelector("#msg");
let btn=document.querySelector("#btn");
btn.addEventListener("click",function(){
    msg.classList.toggle("highlight");
});

console.log(boxElement.innerHTML);
console.log(boxElement.innerText);
console.log(boxElement.textContent);