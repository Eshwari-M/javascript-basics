let empName = "purvi";
let salary = 45000;
let bonus = 5000;
let age = 25;
let experience = 2;

let increment = salary * 0.05;
let salaryAfterIncrement = salary + increment;


let finalSalary = salaryAfterIncrement - 2000;

console.log("Employee Name:", empName);
console.log("Original Salary:", salary);
console.log("Bonus:", bonus);
console.log("Salary after 5% Increment:", salaryAfterIncrement);
console.log("Final Salary after Deduction:", finalSalary);


if (finalSalary > 40000) {
    console.log("Salary is greater than 40000");
} else {
    console.log("Salary is not greater than 40000");
}


if (age > 23 && experience >= 2) {
    console.log("Employee is eligible");
} else {
    console.log("Employee is not eligible");
}