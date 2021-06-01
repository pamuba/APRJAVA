//what we have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

//What we want 
[20, 24, 56, 88]

//forEach
var officersId = [];
officers.forEach(function(officer){
    officersId.push(officer.id)
})

console.log(officersId)

//map
var Ids = officers.map(function(officer){
    return officer.id
})

//reduce

var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

  var totalYears = pilots.reduce(function(sum, pilot){
      return sum + pilot.years
  }, 0)

  console.log(totalYears)