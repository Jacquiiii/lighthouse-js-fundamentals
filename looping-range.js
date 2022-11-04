function range(start, end, step) {
  let new_array = [];
  for(let i = start; i <= end; i += step) {
    if (start < end && step > 0) {
      if (start !== undefined || end !== undefined || step !== undefined) {
        new_array.push(i);
      }
    } else {
      return new_array;
    }
  }
  return new_array;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));