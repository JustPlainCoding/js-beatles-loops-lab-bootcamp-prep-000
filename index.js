// add solution here
function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var array = [];
  for(let i = 0;i < arrayOfMusicians.length;i++) {
    array.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`);
  }
  return array;
}

function johnLennonFacts(arrayOfFacts) {
  var array = [];
  let i = 0;
  while(i < arrayOfFacts.length) {
    array.push(`${arrayOfFacts[i++]}!!!`);
  }
  return array;
}