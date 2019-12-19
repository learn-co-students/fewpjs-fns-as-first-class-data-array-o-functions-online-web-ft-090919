function wakeDog(dogName, dogBreed) {
    let result = `Wake ${dogName} the ${dogBreed}`;
    console.log(result);
    return result;
  }

function leashDog(dogName, dogBreed) {
    let result = `Leash ${dogName} the ${dogBreed}`;
    console.log(result);
    return result;
  }

function walkToPark(dogName, dogBreed) {
    let result = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(result);
    return result;
  }

function throwFrisbee(dogName, dogBreed) {
    let result = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(result);
    return result;
  }

function walkHome(dogName, dogBreed) {
    let result = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(result);
    return result;
  }
  
function unleashDog(dogName, dogBreed) {
    let result = `Unleash ${dogName} the ${dogBreed}`;
    console.log(result);
    return result;
  }
 
// let routine = []
// routine.push(wakeDog)
// wakeDog(dogName, dogBreed),

let routine = [wakeDog,
                leashDog,
                walkToPark,
                throwFrisbee,
                walkHome,
                unleashDog]


function exerciseDog(dogName, dogBreed) {
    let resultArray = [];
    for (let i = 0; i < routine.length; i++) {
      resultArray.push(routine[i](dogName, dogBreed));
    } 
    return resultArray;
}

// Iterate over the routine Array
// Call each function in the array and
// pass the dogName and dogBreed received by exerciseDog() to the function as they are called
// capture the result of each function's call
// return an Array of all those functions' return values


