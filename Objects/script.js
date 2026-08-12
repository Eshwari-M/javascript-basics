let empName="Dilshad";
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

