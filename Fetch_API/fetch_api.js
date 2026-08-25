fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);
});

//fetch() -> server gives the responses -> responses.json()->data->use the date for required things

//response.json() -> the response contains the information sent by the server. response.json() reads the response and converts the json body into js data that we can work with it easily.

 //.then() -> handles the response. after response.json() fins=ishes converting it, the result goes to the next .then(), where we call it as data. so the second .then() is needed here if u want to work with parsed json data
 // note: you can name parameters name anything.
 // error -> if something goes wrong while performing asynchronousoperations, ther error is handled by catch() block. 