//cars is a parameter of nested objects in an array
const carPassing = function(cars, speed) {

  //creates the new object to add to the array
  let newObject = {
    speed: speed, //takes in speed parameter
    time: Date.now() //adds the current time to new object
  };

  cars.push (newValue); //adds the new object to the existing array
  return cars; //output is array with new object added
  
}

