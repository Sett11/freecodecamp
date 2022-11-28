// Setup
const recordCollection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(recordCollection));

// Only change code below this line
function updateRecords(id, prop, value) {

  if (value === '') {
    delete recordCollection[id][prop]; // If the value is empty remove the prop
  } else if (prop !== "tracks") {
    recordCollection[id][prop] = value;
  } else {
    if (!recordCollection[id].hasOwnProperty('tracks')) {
      recordCollection[id].tracks = [];
      recordCollection[id].tracks.push(value);
    } else {
      recordCollection[id].tracks.push(value);
    }
  }
  return recordCollection;
}

// Alter values below to test your code
updateRecords(2468, "tracks", "Free");