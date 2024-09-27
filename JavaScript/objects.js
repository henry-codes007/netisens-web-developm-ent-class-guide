// const myFirstOrder = {
//     name: 'Toyota Camry',
//     price: 22000,
//     color: 'Blue',
//     year: 2020,
//     mileage: 100000,
//     features: ['Auto Start', 'Bluetooth', 'LED Headlights'],
//     isElectric: false,
//     isAvailable: true,
//     engine: {
//         type: 'V6',
//         capacity: {
//             obJ1: {
//                 value: 2.5,
//                 unit: 'obj-1 liters'
//             },
//             obJ2: {
//                 value: 2.5,
//                 unit: 'obj-2 liters'
//             }            
//         },
//         horsepower: 300
//     },
//     drive: function(carname){
//         console.log(carname + ' Vroooooooooooooom...');
//     }
// }

// // console.log(myFirstOrder.mileage);
// // console.log(myFirstOrder["isElectric"])
// // console.log(myFirstOrder.engine.capacity);
// // console.log(myFirstOrder['color'])
// // console.log(myFirstOrder['engine']['horsepower'])

// myFirstOrder.drive('toyota');

// // console.log(myFirstOrder.isBulletProof)
// // myFirstOrder.isBulletProof = false;
// // console.log(myFirstOrder.isBulletProof)
// // console.log(myFirstOrder)

// let myNewCar = {}
// console.log(myNewCar);
// myNewCar.name = 'Mercedes'
// myNewCar['model'] = 'Benz'
// console.log(myNewCar);
// console.log(myNewCar.name)
// console.log(myNewCar["name"])


// // Object destructuring
// // const engine = myFirstOrder.engine;
// const { engine, mileage } = myFirstOrder
// // const capacity = myFirstOrder.engine.capacity;

// const { engine: { capacity: { obJ2: {unit}} }} = myFirstOrder;

// // console.log(capacity);
// console.log(engine);
// console.log(unit);
// // let {mileage} = myFirstOrder

// mileage: 1000,
// props: {
//   electric: {
    // batterySize: 10000,
    // chargers: ["10W", "20W", "50W"],
//   },
// },
// },
// };
// 
// const { colors,
// engineStats: {
// props: {
//   electric: { batterySize, chargers },
// },
// },
// } = myVehicle;
// console.log(colors[4][1], batterySize, chargers[2]);
// console.log({ batterySize });
// console.log(chargers[2]);

//  Spread Operator (...)
// The spread operator (...) allows you to copy or merge objects and arrays, as well as to unpack elements.

// Copying an Object
// const person2 = { ...person, city: "New York" };
// console.log(person2);

// Copying an Array
// const cars = ["Toyota", "Ford", "BMW"];
// const cars2 = [...cars, "Honda"];

// Merging Objects
// You can merge multiple objects using the spread operator:
// const obj1 = { x: 1, y: 2 };
// const obj2 = { y: 5, z: 3 };

// const merged = { ...obj1, ...obj2 }; // `y` will be overwritten by obj2's `y`
// console.log(merged);  // Outputs: { x: 1, y: 5, z: 3 }

// Adding or Overwriting Properties in an Object
// You can add or modify properties while spreading:

// const person3 = { name: "John", age: 30 };
// const updatedPerson = { ...person3, city: "lagos", age: 35 };

// console.log(updatedPerson);

// Deleting Properties in an Object
// const person4 = { name: "John", age: 30, city: "New York" };
// const deletedPerson = { ...person4 };
// delete deletedPerson.city;
// 
// console.log(deletedPerson);

// Object Methods
// There are built-in methods to manipulate objects.

// Object.keys()
// Returns an array of the object’s keys.
// const citizen = { name: "John", age: 30 };
// console.log(Object.keys(citizen));

// Object.values()
// Returns an array of the object’s values.
// console.log(Object.values(citizen));

// Object.entries()
// Returns an array of key-value pairs.
// console.log(Object.entries(citizen));

// this Keyword
// In JavaScript, this refers to the current object the code is being written in.
// Inside an object method, this refers to the object.
// const user = {
// name: "Emma",
// greet: function () {
// console.log("Hello, " + this.name);
// },
// };

// user.greet();

//   Object Shorthand Syntax
//   When creating objects, if the key and variable name are the same, you can use shorthand syntax:
// const myName = "Mark";
// const myAge = 22;
// 
// const myDetails = { myName, myAge };
// console.log(myDetails);

// Object Property Computation
// You can dynamically define property keys using square brackets.
// const keyName = "color";
// const myCar = {
// brand: "BMW",kk
// [keyName]: "red",
// };

// console.log(car);

// Object freeze() and seal()

// Object.freeze(): Prevents modification of properties in the object.
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // No effect, because the object is frozen
// console.log(obj);

// Object.seal(): Allows modification of existing properties but prevents new properties from being added.
const myObj = { a: 1 };
Object.seal(obj);
myObj.a = 2; // Allowed
myObj.b = 3; // Not allowed
// console.log(obj);

//Class Work
// 1.) create an Object called student
// 2.) give it a name property and assign a string value to it
// 3.) give it a grades property and assign an array of 7 numbers to it

// const myVehicle = {
    // brand: "Toyota",
    // model: "Hilux",
    // colors: ["Blue", "Green", "red", "Yellow", ["Pink", "brown"],() => {console.log(amimal'turkey and chickens')}] ,
    // isAvailable: true,
    // engineStats: {
    //   mileage: 1000,
    //   props: {
        // electric: {
        //   batterySize: 10000,
        //   chargers: ["10W", "20W", "50W", [2,[2,4.5,{cook: () => {console.log("You are cooked bro")}}]]],
        // },
//   },
// },
//   };

//   
//   
// Object Literal Notation:
// let vehicle = {};
// vehicle.brand = "Toyota";
// vehicle["model"] = "Camry";
// console.log(vehicle);
// console.log(vehicle.model);
// console.log(vehicle["model"]);

// const person = {
  // name: "John",
  // "his country": "United States",
  // age: 30,
  // profession: "Engineer",
  // greet: function () {
    // console.log("Hello, my name is " + person.name);
  // },
  // drive: (carname) => {
    // console.log(carname + " Vroooooooooooooom...");
  // },
// };
// 
// const myVehicle = {
    // brand: "Toyota",
    // model: "Hilux",
    // colors: ["Blue", "Green", "red", "Yellow", ["Pink", "brown"],{amimal: 'turkey and chickens'}],
    // isAvailable: true,
    // engineStats: {
      // mileage: 1000,
      // props: {
        // electric: {
          // batterySize: 10000,
          // chargers: ["10W", "20W", "50W", {cook: () => {console.log("You are cooked bro")}}],
        // },
    // },
  //  },
  // };
  // console.log(myVehicle);
  
const myStudent = {
  name: "Bob",
  scores: [12,67,90,25,50,71,84,52,99,30],
  getLowestScore:() => { 
    for(let scores = 99;  scores >= 0; scores--)
      console.log(scores)

  
    


  },
  calculateAverageScore:() => {
  }

 }
 let numbers = [1, 2, 3, 4, 5];

 for (let thing of numbers) {
   console.log(thing);
 }



// getLowestScore:() => {
// },
// calculateAverageScore:() => {
// }
// 
// const person = {
  // firstName: "John",
  // lastName: "Doe",
  // id: 5566,
  // fullName: function() {
    // return this.firstName + " " + this.lastName;
  // }
// };
// 
// 
// 
// 67,90,25,50,71,84,52,99,30