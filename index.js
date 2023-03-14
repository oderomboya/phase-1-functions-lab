function distanceFromHqInBlocks(distance) {
  if (distance < 42) {
    return 42 - distance;
  } else {
    return distance - 42;
  }
}

function distanceFromHqInFeet(distance) {
  if (distance < 42) {
    return (42 - distance) * 264;
  } else {
    return (distance - 42) * 264;
  }
}

function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}
function calculatesFarePrice(start, destination) {
  let difference;
  start > destination
    ? (difference = (start - destination) * 264)
    : (difference = (destination - start) * 264);
  if (difference < 400) {
    return 0;
  } else if (difference > 400 && difference < 2000) {
    return (difference - 400) * 0.02;
  } else if (difference > 2000 && difference < 2500) {
    return 25;
  } else if (difference > 2500) {
    return "cannot travel that far";
  }
}
