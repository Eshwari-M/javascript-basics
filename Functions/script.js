console.timeLog("Functions in JS");
let s1=45000;
let b1=10000;
console.log(s1+b1);
let s2=55000;
let b2=11000;
console.log(s2+b2);

//5000 employees
function greet(){
    console.log("Welcome to Employee Mngt");
}
greet();

//parameters and args
function greetings(name,initial='S'){
    console.log("Welcome ",name+" "+initial);
}
greetings("Nicholas","P");

function add(a,b){
    console.log(a+b);
}
add(30,40);

//return
function mul(x,y){
   return x*y;
}

let multi=mul(10,20);
console.log(multi);

function tables(x){
    for(let i=1;i<=10;i++){
        console.log(x+"*"+i+"="+x*i)
    }
}
let x=Number(prompt("Enter the value="));
tables(x);

//1.
function expLevel(exp){
    if(exp<2){
        return "Junior";
    }
    else if(exp<=5){
        return "Mid Level";
    }
    else{
        return "Senior";
    }
}
let exp=Number(prompt("Enter your experience:"));
console.log("Experience Level =",expLevel(exp));


//2.
function joiningYear(joiningDate) {
    let newJD=new Date(joiningDate);
    return newJD.getFullYear();
}
let joiningDate=prompt("Enter your joining date:");
console.log("Year of joining =",joiningYear(joiningDate));


//3.
function totalSalary(basicSalary,bonus) {
    return basicSalary + bonus;
}
let basicSalary=Number(prompt("Enter basic salary:"));
let bonus=Number(prompt("Enter bonus:"));
console.log("Total Salary =",totalSalary(basicSalary,bonus));

