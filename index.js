/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const knownParameters = {
  vel: 10000,
  acc: 3,
  time: 3600,
  d: 0,
  fuel: 5000,
  fbr: 0.5,
};
// console.log(knownParameters);

// 3600 number of seconds in an hour
const d2 =
  ((knownParameters.d + knownParameters.vel) * knownParameters.time) / 3600; //calcultes new distance
// console.log(d2);

// 1400 acquired by fuel - time
const rf = knownParameters.fbr * knownParameters.time + 1400; //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (vel, acc, time) => {
  return vel + acc * time;
};
// if (knownParameters.vel !== "km/h") {
//   throw new Error("Invalid Units! Please correct to km/h");
// }
// console.log(calcNewVel);

const vel2 = calcNewVel(
  knownParameters.acc,
  knownParameters.vel,
  knownParameters.time
); //calculates new velocity based on acceleration
// console.log(vel2);

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
