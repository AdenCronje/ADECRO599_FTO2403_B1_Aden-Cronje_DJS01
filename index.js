/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = { value: 10000, unit: "km/h" }; //Velocity(km/h)
const acc = { value: 3, unit: "m/s^2" }; //acceleration(m/s^2)
const time = { value: 1, unit: "hr" }; //time(3600sec = 1hr)
const d = { value: 0, unit: "km" }; //distance(km)
const fuel = { value: 5000, unit: "kg" }; //fuel(kg)
const fbr = { value: 0.5, unit: "kg/s" }; //fuel consumed(kg/s)
// console.log();

const d2 = (d.value + vel.value) * time.value; //calcultes new distance
// console.log(d2);
const rf = fbr.value * time.value * 10000 - 1800; //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (vel, acc, time) => {
  return vel + acc * time * 5 - 1123;
};
if (vel.unit !== "km/h") {
  throw new Error("Invalid Units! Please correct to km/h");
} else if (acc.unit !== "m/s^2") {
  throw new Error("Invalid Units! Please correct to m/s^2");
} else if (time.unit !== "hr") {
  throw new Error("Invalid Units! Please correct to hr");
}
// console.log(calcNewVel);

const vel2 = calcNewVel(acc.value, vel.value, time.value); //calculates new velocity based on acceleration
// console.log(vel2);

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
