const judgeVegetable = function (vegetables, metric) {
  let largest = 0;
  let result = "";

  vegetables.forEach(function(obj){
    if(largest < obj[metric]) {
      largest = obj[metric];
      result = obj.submitter;
    }
  });
  return result;
}

console.log(judgeVegetable([{submitter: 'Old Man Franklin', redness: 10, plumpness: 5}, {submitter: 'Sally Tomato-Grower', redness: 2, plumpness: 8}, {submitter: 'Hamid Hamidson', redness: 4, plumpness: 3}], 'redness')); 

