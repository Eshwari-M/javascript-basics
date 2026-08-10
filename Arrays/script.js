let employees = ["Alice", "Bob", "Carol", "David", "Eva"];
console.log(employees);
console.log(employees[0]); 
console.log(employees[2]);
console.log(employees[4]); 
console.log("Length of array: ",employees.length);

console.log("Using for loop");
for(let i = 0; i < employees.length; i++) {
    console.log("Employee name at ",i, "is ", employees[i]);
}

console.log("Using while loop");
let index=0;
while(index<employees.length){
   console.log("Employee name at ",index, "is ", employees[index]);
   index++;
}

//reversing the array
console.log("Reveresing the array")
for(let i = employees.length - 1; i >= 0; i--) {
    console.log("Employee name at ",i, "is ", employees[i]);
}

//updating the array
console.log("Updated array");
employees[1]="Bobby";
console.log("Updated array: ",employees)

// array functions
console.log("Array functions");
//push
employees.push("Frank");
console.log("After push: ",employees);
//pop
employees.pop();
console.log("After pop: ",employees);
//unshift
employees.unshift("Zara");
console.log("After unshift: ",employees);
//shift
employees.shift();
console.log("After shift: ",employees);

//ex-1
let depts=["HR", "Finance", "IT", "Marketing", "Sales", "Admin"];
console.log("Department names: ",depts);
for (let index=0;index<depts.length;index++) {
    if (index%2==0) {
        console.log("Department name at ",index,"is ",depts[index]);
    }
    else{
        console.log("Deleted element is",depts.shift());
    }
}
depts.unshift("HR");
console.log(depts);

//splice
let numbers=[1,2,3,4,5,6,7,8,9];
numbers.splice(2,3);
console.log("After splice: ",numbers);

//for-of loop
console.log("Using for-of loop");
for (let emp of employees) {
    console.log(emp);
}