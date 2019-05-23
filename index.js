// add solution here
function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var array = [];
  for(let i = 0;i < arrayOfMusicians.length - 1;i++) {
    array.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`)
  }
  return array;
}