let candExp = 2;
let ratings = 5;
if (candExp > 2) {
    if (ratings>4) {
        console.log("Eligible for Promotion..");
    } else {
            console.log("Not eligible for promotion");
    }
    console.log("Not eligible");

} else {

    console.log("Check with other employees");
}

let department="";
switch(department) {
    case "IT":
        console.log("IT Department");
        break;
    case "HR":
        console.log("HR Department");
        break;
    default:
        console.log("Other Department");
}

for(let empid=101;empid<=105;empid++) {
    console.log("Employee ID: "+empid);
}
for(let empid=110;empid>=105;empid--) {
    console.log("Employee ID: "+empid);
}

let attempt=4;
while(attempt<=3){
    console.log("attempt number",attempt);
    attempt++;
}
console.log("out of range");