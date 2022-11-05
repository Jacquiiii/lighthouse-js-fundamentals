// Function to increase the garbage count for waste, recycling, or compost
// depending on what trash is submitted.
// trash = type of item submitted
// bins = object with three properties: waste, recycling, compost
// increase the value in bins, then return newly updated object


const smartGarbage = function (trash, bins) {
  if (trash === 'recycling') {
    bins['recycling'] += 1;
    return bins;
  } else if (trash === 'waste') {
    bins['waste'] += 1;
    return bins;
  } else if (trash === 'compost') {
    bins['compost'] += 1;
    return bins;
  } else {
    return undefined;
  }
}


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));