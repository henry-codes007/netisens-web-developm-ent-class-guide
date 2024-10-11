// JavaScript can perform tasks in the background (like fetching data from the internet), 
// while continuing to execute other code. 
// This is known as asynchronous programming.

// Why is Asynchronous Programming Important?
// When you're doing tasks that take some time to complete (like reading a file or fetching data from an API), 
// you don't want the entire program to stop and wait. 
// Instead, JavaScript can continue to run other code while it waits for the slow task to finish.

// Asynchronous Programming with Callbacks
// Callbacks are often used to handle asynchronous operations. 
// Let's look at an example of how they work.

// console.log('one');
// console.log('two');
// console.log('three');


// console.log("Task 1: Start");

// const displaySomething = () => {
//   console.log("Task 2: This is delayed by 5 seconds");
// }

// Callback function executed after 2 seconds (2000 milliseconds)
// setTimeout(displaySomething, 5000);

// setTimeout(function() {
//   console.log("Task 2: This is delayed by 2 seconds");
// }, 2000);

// console.log("Task 3: End");
// const data = { user: "Nsikak", age: 30 };

// function fetchData(callback) {
//   console.log("Fetching data...");

//   // Simulate a delay (e.g., fetching data from an API)
//   setTimeout(() => {
//     const data = { user: "Musa", age: 29 };
//     callback(data);
//   }, 2000); // Wait 2 seconds before executing the callback
// }

// console.log(data)
// function processData(parameter) {
//   console.log(`User: ${parameter.user}, Age: ${parameter.age}`);
// }

// function sayHello(data){
//   console.log(data);
// }

// // Passing 'processData' as a callback to 'fetchData'
// fetchData(processData);
// fetchData(sayHello);

// CALLBACJK FUNCTION: A function pass in as an aquiment as another function

// Callback Hell Example
// Callback Hell happens when you have too many nested callbacks, making the code hard to read and maintain.
// Let's simulate a scenario where we need to fetch user details, process them, and save them to a database:

// function getUser(callback) {
  // console.log('running getUser');
  // setTimeout(() => {
    // console.log('running getUser Callback');    
      // callback({ name: "Nsikak" });
  // }, 3000);
// }
// 
// function getAge(user, callback) {
  // setTimeout(() => {
      // callback({ ...user, age: 45 });
  // }, 3000);
// }
// 
// function getLocation(user, callback) {
  // setTimeout(() => {
    // callback({ ...user, location: "Nigeria" });  // Add location to user and pass it to the callback
  // }, 1000);
// }
// 
// const nameLogger = (dataObject) => {
  // console.log(dataObject); 
  // getAge(dataObject, nameAndAgeLogger);  // Call getAge with the updated user object 
// }
// 
// const nameAndAgeLogger = (dataObject) => {
  // console.log(dataObject);  
  // getLocation(dataObject, nameAndAgeAndLocationLogger);  // Call getLocation with the updated user object
// }
// 
// const nameAndAgeAndLocationLogger = (dataObject) => {
  // console.log(dataObject);  
// }

// This results in nested callbacks, which is known as "callback hell"
//  getUser ((user) => {
  // console.log("User fetched:", user);
  // getAge(user, (userWithAge) => {
    // console.log("Age fetched:", userWithAge);
    // getLocation(userWithAge, (message) => {
          // console.log(message); 
      // });
  // });
// });
const date = new Date("2022-03-25");

// getUser(nameLogger);
// getUser(nameLogger);


const doings = () => {
  setTimeout(() => {
    console.log('Decide what you want to chop'); 
    setTimeout(() => {
      console.log('I want to eat Indomie noodles');
      setTimeout(() => {
        console.log('I just bought three cartons of Indomie noodles');
        setTimeout(() => {
          console.log('I just placed a sauce-pan on fire');
          setTimeout(() => {
            console.log('I have added some water to the pot');
            setTimeout(() => {
              console.log('The water is boiling');
              setTimeout(() => {
                console.log('I successfully added my noodles to the pan');
                setTimeout(() => {
                  console.log('My Delicious pan of noodles is ready');
                  setTimeout(() => {
                    console.log('I have hurriedly and successfully finished all my Noodles')
                  }, 1000)
                }, 5000)
              }, 1000)
            }, 4000)
          }, 1000)
        }, 1000)
      }, 3000)
    }, 2000)   
  }, 0)
}
// doings(); 


// Callback Hell makes code harder to follow. Promises and async/await can help solve this problem.


const acting = () => {
  setTimeout (() => {
    console.log('please dont disturb');
  },10000)
}
acting();