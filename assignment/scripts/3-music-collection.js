console.log('***** Music Collection *****')
// Main collection variable
let collection = [];

// Function to add records

function addToCollection(title, artist, yearPublished) {
    collection.push({title, artist, yearPublished});
    return collection[collection.length - 1];
}
// End addToCollection

console.log(addToCollection('Car Wheels on a Gravel Road', 'Lucinda Williams', 1998)); // adds album to collection and logs it to the console.
console.log(addToCollection('Anti', 'Rihanna', 2016));
console.log(addToCollection('Heartthrob', 'Tegan and Sarah', 2013));
console.log(addToCollection('HiRUDiN', 'Austra', 2020));
console.log(addToCollection('Essence', 'Lucinda Williams', 2001));
console.log(addToCollection('The Miseducation of Lauryn Hill', 'Lauryn Hill', 1998));

// Log the full collection
console.log('This is the collection: ', collection);

// Function to list collection in sentence form.
function showCollection(array) {
    console.log('This is the number of albums in this collection: ', array.length);
    console.log('Here are the albums in this collection, listed with showCollection:')
    for (let each of array) {
        console.log(`${each.title} by ${each.artist}, published in ${each.yearPublished}`);
    }
}
// End showCollection.

showCollection(collection);
 
// Find all albums by one artist
function findByArtist(artist) {
    
    let artistCollection = [];
    
    for (let each of collection) { //Cycling through to match to albums.
        if (artist === each.artist) { 
            artistCollection.push(each); //If input matches entry artist, add entry to artistCollection.    
        }
    }
    return artistCollection;
}
// End findByArtist

// Test findByArtist
console.log('Lucinda Williams records in my collection: ', findByArtist('Lucinda Williams'));

// Album search function
function search({artist, yearPublished}) {

    let searchResult = [];

    console.log(`in search: ${artist} ${yearPublished}`)
    if (artist && yearPublished) {
        for (let each of collection) {
            if (each.artist == artist && each.yearPublished == yearPublished) {
                searchResult.push(each);
            } 
        }
    } else {
        return collection
    }
    return searchResult;
};
// End search

let searchResult = search({artist: 'Lauryn Hill', yearPublished: 1998});
console.log('Should be an array: ', searchResult);