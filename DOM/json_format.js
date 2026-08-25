let employee={
    name:"Rahul",
    salary:"40000",
    dept:"IT",
};
let jsonData=JSON.stringify(employee);
console.log(jsonData);
console.log("Data type of employee is " + typeof jsonData);
let employeeData=JSON.parse(jsonData);
console.log(employeeData);
console.log("Type of employee data is "+ typeof employeeData);


//setInterval()
let count=1;
let timer=setInterval(function () {
    console.log(count);
    count++;
    if(count>15){
        clearInterval(timer);
    }
},1000);

// 1. setTimeout() -> once
// 2. clearTimeout() -> cancel timeout
// 3. setInterval() -> repeatedly
// 4. clearInterval() -> stops the interval