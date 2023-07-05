console.log('***** Music Collection *****')
// Main collection variable
let collection = [];

// Function to add records
let album = {};
function addToCollection(title, artist, yearPublished) {
    album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push(album); 
    return album;
}
// End addToCollection

addToCollection('Car Wheels on a Gravel Road', 'Lucinda Williams', 1998); // adds album to collection.
console.log(album); // logs added album.

function showCollection(array) {
    console.log(array.length);
    for (let each of array) {
        console.log(`${each.title} by ${each.artist}, published in ${each.yearPublished}`);
    }
}
// End showCollection.

showCollection(collection);

let artistCollection = [];
function findByArtist(artist) {
    for (let each of collection) { //Cycling through to match to albums.
        if (artist === each.artist) { 
            artistCollection.push(each); //If input matches entry artist, add entry to artistCollection.    
        }
        return artistCollection;
    }
}
// End findByArtist

findByArtist('Lucinda Williams');
console.log(artistCollection);

