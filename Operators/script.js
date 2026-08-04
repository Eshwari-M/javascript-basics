let empName='Dahlia'
let salary=35000
console.log(empName,salary +' is the salary of '+empName);
salary=salary+5000
console.log(empName," salary is increased to ",salary);

//operators - symbols used to perform some operations.

//1. Arithmetic Operators - +, -, *, /, %, ++, --, **
console.log("Multiplication: ", salary*5);
let team1=2;
console.log("Power of:", team1**3);

let emp1=20;
console.log("Quotient: ",emp1/10);

let emp2=20;
console.log("Remainder: ",emp2%10);
console.log("Salary :",salary);
salary=salary+10000
console.log("Salary :",salary);

//2. Assignment Operators - +=, -=, *=, /=, %=, **=
salary+=10000;
console.log("Salary :",salary);
salary-=5000;
console.log("Salary :",salary);

//3. Comparison Operators - ==, ===, !=, !==, >, <, >=, <=
let empSalary=300000;
let bonus=50000;
console.log(empSalary,"is >",bonus, empSalary>bonus);

//HR is checking for candidates who have 3 years of experience
c1=3;
condition=3;
console.log(c1==condition, "Candidate Eligible");

//=== - checks for value and data type
c1=3;
condition="3";
console.log(c1===condition);

//4. Logical Operators - &&, ||, !
let age=25;
let exp=3;
console.log(age==25 && !(exp==2));
console.log(age==25 || exp==2);

//5. Ternary Operator - condition ? true : false
age=28;
let result=age>10 ? "Eligible" : "Not Eligible";
console.log(result);
 

// EX - 1. Create variables: emp name, salary, bonus, employee age, experience
let empName1="Vivian";
let salary1=38000;
let bonus1=5000;
let age1=25;
let experience1=2; 

let totalSalary=salary1 + bonus1; 
let finalSalary=totalSalary - 2000; 

let checkSalary=finalSalary>40000;
let isEligible=age1>23 && experience1>=2;
console.log("Employee Name:",empName1);
console.log("Age:",age1);
console.log("Experience:",experience1);
console.log("Salary:",salary1);
console.log("Salary after bonus:",totalSalary);
console.log("Final Salary:",finalSalary);
console.log("Is Salary>40k?",checkSalary);
console.log("Age>23 and Exp>=2 yrs?",isEligible);