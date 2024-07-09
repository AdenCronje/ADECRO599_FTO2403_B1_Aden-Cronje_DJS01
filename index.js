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

const d2 = (knownParameters.d + knownParameters.vel) * knownParameters.time; //calcultes new distance
const rf = knownParameters.fbr * knownParameters.time; //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (vel, acc, time) => {
  return vel + acc * time;
};
const vel2 = calcNewVel(
  knownParameters.acc,
  knownParameters.vel,
  knownParameters.time
); //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
