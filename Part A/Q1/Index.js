// Q1. Spread Operator (Array)

let arr1 = [10, 20, 30];
let arr2 = [40, 50];

let combined = [...arr1, ...arr2];

console.log(combined);

// Q2. Spread Operator (Object)

let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };

let profile = { ...person, ...extra };

console.log(profile);

// Q3. Rest Operator (Function Parameters)

function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3, 4)); 

// Q4. Rest Operator (Array Destructuring)

let numbers = [10, 20, 30, 40, 50];

let [a, ...remaining] = numbers;

console.log("a:", a);
console.log("remaining:", remaining);

// Q5. Nested Object Destructuring

let user = {
  name: "Alice",
  address: { city: "Bengaluru", pin: 560001 },
  geo: { lat: 11.22, lng: 77.33 }
};

let {
  address: { city },
  geo: { lat, lng }
} = user;

console.log(city, lat, lng);

// Q6. Arrow Function

const multiply = (a, b) => a * b;

console.log(multiply(6, 7));

// Q7. Optional Chaining

let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};

const role = emp.details?.profile?.role;

console.log(role);