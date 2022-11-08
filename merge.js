function merge(arr1, arr2) {
  let combined = arr1.concat(arr2);
  let newArr = [];

  for (let value of combined) {
    if (typeof value == 'number') {
      newArr.push(value);
    }
  }

  return newArr.sort();
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));