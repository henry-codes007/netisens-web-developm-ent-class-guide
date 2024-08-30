const myFirstOrder = {
    name: 'Toyota Camry',
    price: 22000,
    color: 'Blue',
    year: 2020,
    mileage: 100000,
    features: ['Auto Start', 'Bluetooth', 'LED Headlights'],
    isElectric: false,
    isAvailable: true,
    engine: {
        type: 'V6',
        capacity: {
            obJ1: {
                value: 2.5,
                unit: 'obj-1 liters'
            },
            obJ2: {
                value: 2.5,
                unit: 'obj-2 liters'
            }            
        },
        horsepower: 300
    },
    drive: function(carname){
        console.log(carname + ' Vroooooooooooooom...');
    }
}

// console.log(myFirstOrder.mileage);
// console.log(myFirstOrder["isElectric"])
// console.log(myFirstOrder.engine.capacity);
// console.log(myFirstOrder['color'])
// console.log(myFirstOrder['engine']['horsepower'])

myFirstOrder.drive('toyota');

// console.log(myFirstOrder.isBulletProof)
// myFirstOrder.isBulletProof = false;
// console.log(myFirstOrder.isBulletProof)
// console.log(myFirstOrder)

let myNewCar = {}
console.log(myNewCar);
myNewCar.name = 'Mercedes'
myNewCar['model'] = 'Benz'
console.log(myNewCar);
console.log(myNewCar.name)
console.log(myNewCar["name"])


// Object destructuring
// const engine = myFirstOrder.engine;
const { engine, mileage } = myFirstOrder
// const capacity = myFirstOrder.engine.capacity;

const { engine: { capacity: { obJ2: {unit}} }} = myFirstOrder;

// console.log(capacity);
console.log(engine);
console.log(unit);
// let {mileage} = myFirstOrder
