let nos=[1,2,3,4,5];
let doubled=nos.map(num=>num*2);
console.log(nos);
console.log(doubled);

let salaries=[30000,40000,50000,60000];
let salInc=salaries.map((sal)=>sal+3000);
console.log(salInc);

let even=nos.filter((num)=>num%2==0);
console.log(even);
let salSort=salaries.filter((sal)=>sal>30000);
console.log(salSort);

let prices=[100,200,300,400]
let total=prices.reduce((sum,price)=>sum+price,0);
console.log("Total = ",total);

let apples=[2,3,5];
let totalApples=apples.reduce((fstEle,snextEle)=>fstEle+nextEle);
console.log(totalApples);

//extract employee
let employees=[
    {
        name:"Alice",
        dept:"IT",
        salary:45000,
    },
    {
        name:"Bob",
        dept:"IT",
        salary:90000,
    },
    {
        name:"Carol",
        dept:"Dev",
        salary:85000,
    },
    {
        name:"David",
        dept:"Sales",
        salary:65000,
    },
];

let name=employees.map((employee)=>employee.name);
console.log(names);

let departments= employees.map((employee)=>"employee dept="+employee.dept);
console.log(departments);

let salaries= employees.map((employee)=>"employee salary="+employee.salary);
console.log(salaries);