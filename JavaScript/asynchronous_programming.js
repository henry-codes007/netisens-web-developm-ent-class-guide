// JavaScript can perform tasks in the background (like fetching data from the internet), 
// while continuing to execute other code. 
// This is known as asynchronous programming.

// Why is Asynchronous Programming Important?
// When you're doing tasks that take some time to complete (like reading a file or fetching data from an API), you don't want the entire program to stop and wait. 
// Instead, JavaScript can continue to run other code while it waits for the slow task to finish.

// Asynchronous Programming with Callbacks
// Callbacks are often used to handle asynchronous operations. 
// Let's look at an example of how they work.


// console.log("Task 1: Start");
console.log("Task 1: Start");

// // Callback function executed after 2 seconds (2000 milliseconds)
// setTimeout(function() {
//   console.log("Task 2: This is delayed by 2 seconds");
// }, 2000);
// Callback function executed after 2 seconds (2000 milliseconds)
setTimeout(function() {
  console.log("Task 2: This is delayed by 2 seconds");
}, 2000);

// console.log("Task 3: End");
console.log("Task 3: End");

function fetchData(callback) {
  console.log("Fetching data...");
// function fetchData(callback) {
//   console.log("Fetching data...");

  // Simulate a delay (e.g., fetching data from an API)
  setTimeout(() => {
    const data = { user: "Nsikak", age: 26 };
    callback(data);
  }, 2000); // Wait 2 seconds before executing the callback
}
//   // Simulate a delay (e.g., fetching data from an API)
//   setTimeout(() => {
//     const data = { user: "Nsikak", age: 26 };
//     callback(data);
//   }, 2000); // Wait 2 seconds before executing the callback
// }

function processData(data) {
  console.log(`User: ${data.user}, Age: ${data.age}`);
}
// function processData(data) {
//   console.log(`User: ${data.user}, Age: ${data.age}`);
// }

// Passing 'processData' as a callback to 'fetchData'
fetchData(processData);
// // Passing 'processData' as a callback to 'fetchData'
// fetchData(processData);



// Callback Hell Example
// Callback Hell happens when you have too many nested callbacks, making the code hard to read and maintain.
// Let's simulate a scenario where we need to fetch user details, process them, and save them to a database:

function getUser(callback) {
  setTimeout(() => {
      callback({ name: "Nsikak" });
  }, 1000);
}
function getAge(user, callback) {
  setTimeout(() => {
      callback({ ...user, age: 26 });
  }, 1000);
}
function saveToDatabase(user, callback) {
  setTimeout(() => {
      callback("User saved to database: " + JSON.stringify(user));
  }, 1000);
}
// This results in nested callbacks, which is known as "callback hell"
getUser((user) => {
  getAge(user, (userWithAge) => {
      saveToDatabase(userWithAge, (message) => {
          console.log(message); // Output: User saved to database: {"name":"Nsikak","age":26}
      });
  });
});
// function getUser(callback) {
//   setTimeout(() => {
//       callback({ name: "Nsikak" });
//   }, 1000);
// }
// function getAge(user, callback) {
//   setTimeout(() => {
//       callback({ ...user, age: 26 });
//   }, 1000);
// }
// function saveToDatabase(user, callback) {
//   setTimeout(() => {
//       callback("User saved to database: " + JSON.stringify(user));
//   }, 1000);
// }
// // This results in nested callbacks, which is known as "callback hell"
// getUser((user) => {
//   getAge(user, (userWithAge) => {
//       saveToDatabase(userWithAge, (message) => {
//           console.log(message); // Output: User saved to database: {"name":"Nsikak","age":26}
//       });
//   });
// });

// Callback Hell makes code harder to follow. Promises and async/await can help solve this problem.

// @@ -84,55 +84,55 @@
//   Fulfilled: The operation completed successfully.
//   Rejected: The operation failed.

const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  const success = false;
// const myPromise = new Promise((resolve, reject) => {
//   // Simulate an asynchronous operation
//   const success = false;

  setTimeout(() => {
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 2000);
});
//   setTimeout(() => {
//     if (success) {
//       resolve("Operation successful!");
//     } else {
//       reject("Operation failed!");
//     }
//   }, 2000);
// });

console.log('myPromise >>>', myPromise)
// console.log('myPromise >>>', myPromise)

//   Handling a Promise
//   We can handle promises using .then() and .catch().

myPromise
.then((message) => {
  console.log(message); // Output: Operation successful!
})
.catch((error) => {
  console.log(error); // If failed, output: Operation failed!
});
// myPromise
// .then((message) => {
//   console.log(message); // Output: Operation successful!
// })
// .catch((error) => {
//   console.log(error); // If failed, output: Operation failed!
// });


// Chaining Promises
// When you have multiple asynchronous tasks, you can chain promises to handle them in order.

const fetchUser = new Promise((resolve, reject) => {
setTimeout(() => resolve({ user: "Nsikak" }), 1000);
});
// const fetchUser = new Promise((resolve, reject) => {
// setTimeout(() => resolve({ user: "Nsikak" }), 1000);
// });

const fetchAge = new Promise((resolve, reject) => {
setTimeout(() => resolve({ age: 26 }), 1000);
});
// const fetchAge = new Promise((resolve, reject) => {
// setTimeout(() => resolve({ age: 26 }), 1000);
// });

fetchUser
.then((userData) => {
  console.log(userData); // Output: { user: "Nsikak" }
  return fetchAge;
})
.then((ageData) => {
  console.log(ageData); // Output: { age: 26 }
})
.catch((error) => {
  console.error(error);
});
// fetchUser
// .then((userData) => {
//   console.log(userData); // Output: { user: "Nsikak" }
//   return fetchAge;
// })
// .then((ageData) => {
//   console.log(ageData); // Output: { age: 26 }
// })
// .catch((error) => {
//   console.error(error);
//


