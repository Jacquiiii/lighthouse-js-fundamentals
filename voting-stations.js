const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// must have a capacity of at least 20
// must be a school or community center

function chooseStations(stations) {
  const goodStations = []

  for(const station of stations) {
    const capacity = station[1]

    if (capacity >= 20) {

      const location = station[2];

      if (location === 'school' || location === 'community centre') {
        goodStations.push(station[0])
      }
    }
  }
  return goodStations
}

console.log(chooseStations(stations));