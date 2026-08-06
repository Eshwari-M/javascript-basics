//1.
let attendance=80;
let marks=85;
if (attendance>=75) {
    if (marks>=80) {
        console.log("Eligible for Scholarship");
    } else {
        console.log("Not Eligible-Marks should be 80 or above");
    }
} else {
    console.log("Not Eligible-Attendance should be 75% or above");
}

//2.

let orderAmount=700;
let isPrimeMember=true;
if (orderAmount>=500) {
    if (isPrimeMember) {
        console.log("Free Delivery");
    } else {
        console.log("Delivery Charges:₹50");
    }
} else {
    console.log("Minimum Order Amount Not Reached");
}


//3.
let category="gold";
switch(category) {
    case "silver":
        console.log("Silver Ticket Price:₹150");
        break;
    case "gold":
        console.log("Gold Ticket Price:₹250");
        break;
    case "platinum":
        console.log("Platinum Ticket Price:₹400");
        break;
    case "vip":
        console.log("VIP Ticket Price:₹700");
        break;
    default:
        console.log("Invalid Ticket Category");
}