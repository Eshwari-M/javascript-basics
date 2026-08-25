let length = window.history.length;
document.getElementById("demo").innerHTML = length;

console.log(location.href);
// location.reload();
// location.href = "https://www.google.com";
// location.replace("https://www.google.com");
// console.log(location.href);

//navigator -> browser and user;s environment
console.log(navigator);
console.log(navigator.userAgent);
console.log(Navigator.onLine);
if (navigator.onLine) {
  console.log("internet available");
} else {
  console.log("you are offline");
}
// screen object
console.log(screen.width);
console.log(screen.height);