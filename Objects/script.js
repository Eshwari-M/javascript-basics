/* let empName="Dilshad";
let empId="Eth002D";
let Desg="Developer"

//500 or more
let emp1={
    empName:"Dilshad",
    empId:"Eth002D",
    Desg:"Associate coach",
};
console.log(emp1);
console.log(emp1["empName"]);
console.log(emp1.empName);
emp1.empName="S.Dilshad";
console.log(emp1.empName);

let fruits=["apple","banana"];
fruits[0]="guava";
console.log(fruits);
emp1.location="Bangalore";
console.log(emp1);
delete emp1.empId;
console.log(emp1);

//an obj
let employee={
    name:"Eva",
    salary:40000,
    greet:function(){
        console.log("Welcome "+this.name);
    },
};
console.log(employee.greet());

//swiggy
let swiggyOrder={
    restaurant:"Meghana Foods",
    item:"Chicken Boneless Biryani",
    quantity: 2,
    price: 450,
    calculateTotal: function() {
        return this.quantity*this.price;
    }
};
console.log("Total Order Amount = ",swiggyOrder.calculateTotal());

//movie
let movieBooking={
    movieName:"Thor",
    numberOfTickets:3,
    ticketPrice:200,
    calculateTotal:function() {
        return this.numberOfTickets*this.ticketPrice;
    }
};
console.log("Total Booking Cost = ",movieBooking.calculateTotal());
 */

//arrays+objects
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
console.log(employees);
console.log(employees[1]);
console.log("Salary of Alice is = "+employees[0].salary);
console.log("Salary of Alice is = ",employees[0]["salary"]);

//for loop
for(let i=0;i<employees.length;i++){
    console.log(employees[i].name,employees[i].dept,employees[i].salary);
}

let emp2={name:"Eve",dept:"IT"};
/* for (let i=0;i<emp2.length;i++){
    console.log(emp2.i);
} */

for(const key in emp2){
    console.log(`${key}:${emp2[key]}`);
}
let name="Raju";
let age=13;
console.log("Name of the person is ",name,"& age is",age);
console.log(`Name of the person is ${name} & his age is ${age}`);