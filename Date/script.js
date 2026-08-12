console.log("date in JS");
let today=new Date();
console.log(today);
console.log(today.getDate());
console.log(today.getDay()); //days start from 0 to 6
console.log(today.getFullYear());
console.log(today.getMonth()); //months start from 0 to 11
let joiningDate=new Date("2026-08-07");
console.log(joiningDate);
let months=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
console.log(months[today.getMonth()]);

let days=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
console.log(days[today.getDay()]);

//custom
let jd=new Date("2026-08-07 09:29:00");
console.log(jd);

//ex-1
// Custom date and time
console.log("Practice Example");
let newJD = new Date("2024-10-15 14:30:00");
console.log("Hours =",newJD.getHours());
console.log("Minutes =",newJD.getMinutes());
console.log("Seconds =",newJD.getSeconds());
console.log("Date =",newJD.getDate());
console.log("Day =",days[newJD.getDay()]);
console.log("Month =",months[newJD.getMonth()]);
console.log("Year =",newJD.getFullYear());