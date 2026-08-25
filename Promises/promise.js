let result = new Promise((resolve, reject) => {
  let password = false;
  if (password) {
    resolve("Welcome to your profile");
  } else {
    reject("OOps!!! something went wrong. Try again!!!");
  }
});

result
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
// resolve means operations was successful. reject means operation failed
// resolve() -> .then() exceuted or else reject() -> .catch()

// async / await

async function getUsers() { 
    // async -> tell js that this function is going to work for asynchronous operations.
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    // await -> waits for the promise to give its result before its going to move to the enxt line
    let data = await response.json();
    // await -> waits for json conversion to complete then stores the result in the form of data. 
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getUsers();