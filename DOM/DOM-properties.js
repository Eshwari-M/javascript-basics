const button=document.getElementById('myButton');
button.clickCount=0;
button.userdata={userID:123,role:'Admin'};

button.onclick=function(){
    this.clickCount++;
    console.log('Clicked ${this.clockCount} times');
};

//Modifying elements

ElementInternals.prototype.sayHi=function(){
    alert('Hello,I am $this.tagName}');
};

document.documentElement.sayHi();
document.body.sayHi();

//Standard vs Non-Standard

<body id='test' something="non-standard">
    <script>
        alert(document.body.id);
        alert(document.body.something)
    </script>
</body>