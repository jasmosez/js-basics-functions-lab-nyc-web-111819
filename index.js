// Code your solution in this file!
const feetPerBlock = 264;
const hq = 42;

function distanceFromHqInBlocks(loc) {
  return Math.abs(42 - loc);
}

function distanceFromHqInFeet(loc) {
  return distanceFromHqInBlocks(loc) * 264;
}

function distanceTravelledInFeet(start, end) {
  return (Math.abs(start - end) * 264);
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);

  if (distance > 2500) {
    return 'cannot travel that far';
  }

  if (distance <= 400) {
    return 0;
  }

  if (distance > 400 && distance <= 2000) {
    return (distance-400) * .02;
  }

  return 25;


}



