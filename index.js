let wakeDog = function(dogName, dogBreed) {
  let msg = `Wake ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

let leashDog = function(dogName, dogBreed) {
  let msg = `Leash ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

let walkToPark = function(dogName, dogBreed) {
  let msg = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

let throwFrisbee = function(dogName, dogBreed) {
  let msg = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

let walkHome = function(dogName, dogBreed) {
  let msg = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

let unleashDog = function(dogName, dogBreed) {
  let msg = `Unleash ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]

function exerciseDog(dogName, dogBreed) {
  return routine.map(fn => fn(dogName, dogBreed));
}

