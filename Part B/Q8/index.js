//Q8.

let nums = [10, 3, 7, 20, 13, 2];

const squares = nums.map(function(element) {
    return element * element;
});

console.log("1. Array of Squares (using map):", squares);
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const primeNumbers = nums.filter(function(element) {
    return isPrime(element);
});

console.log("2. Prime Numbers (using filter):", primeNumbers);

const sumOfSquares = squares.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("3. Sum of all elements (Sum of Squares using reduce):", sumOfSquares);

nums.sort(function(a, b) {
    return b - a; 
});

console.log("4. Elements in descending order (using sort on original array):", nums);


//Q9.

// Part 1: 
function displayCar() {
    console.log("🚗 Displaying information for a Car.");
}

function displayTruck() {
    console.log("🚛 Displaying information for a Truck.");
}

function displayBike() {
    console.log("🏍️ Displaying information for a Bike.");
}

// Part 2: 
function vehicleInfo(vehicleCategory, callbackFn) {
    console.log(`\n--- Processing request for category: ${vehicleCategory} ---`);
    
    if (typeof callbackFn === 'function') {
        callbackFn();
    } else {
        console.error("Error: The second argument is not a function.");
    }
}

// Part 3: 
vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);