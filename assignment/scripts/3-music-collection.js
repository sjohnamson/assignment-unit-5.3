console.log('***** Music Collection *****')
// Main collection variable
let collection = [];

// Function to add records
function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push(album); 
    return album;
}
// End addToCollection

addToCollection('Car Wheels on a Gravel Road', 'Lucinda Williams', 1998); // adds album to collection.
console.log(collection[collection.length - 1]); // logs added album.

function showCollection(array) {
    console.log(array.length);
    for (let each of array) {
        console.log(`${each.title} by ${each.artist}, published in ${each.yearPublished}`);
    }
}
// End showCollection.

showCollection(collection);

