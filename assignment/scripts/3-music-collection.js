console.log('***** Music Collection *****')
// Main collection variable
let collection = [];

// Function to add records with title, artist, year, and tracks (as objects with name and duration)

function addToCollection(title, artist, yearPublished, tracks) {
    collection.push({ title, artist, yearPublished, tracks });
    return collection[collection.length - 1];
}
// End addToCollection

// test addToCollection and log the returned object
console.log(addToCollection('Car Wheels on a Gravel Road', 'Lucinda Williams', 1998, [{ name: 'Right in Time', duration: '4:36' }, { name: 'Car Wheels on a Gravel Road', duration: '4:44' }, { name: '2 Kool 2 Be 4-Gotten', duration: '4:42' }])); // adds album to collection and logs it to the console.
console.log(addToCollection('Anti', 'Rihanna', 2016, [{ name: 'Consideration (feat. SZA)', duration: '2:41' }, { name: 'James Joint', duration: '1:12' }, { name: 'Kiss It Better', duration: '4:13' }]));
console.log(addToCollection('Heartthrob', 'Tegan and Sarah', 2013, [{ name: 'Closer', duration: '3:29' }, { name: 'Goodbye, Goodbye', duration: '3:26' }, { name: 'I Was A Fool', duration: '3:26' }]));
console.log(addToCollection('HiRUDiN', 'Austra', 2020, [{ name: 'Anywayz', duration: '3:46' }, { name: 'All I Wanted', duration: '3:18' }, { name: 'How Did You Know', duration: '4:20' }]));
console.log(addToCollection('Essence', 'Lucinda Williams', 2001, [{ name: 'Lonely Girls', duration: '4:02' }, { name: 'Steal Your Love', duration: '3:15' }, { name: 'I Envy The Wind', duration: '3:13' }]));
console.log(addToCollection('The Miseducation of Lauryn Hill', 'Lauryn Hill', 1998, [{ name: 'Intro', duration: ':47' }, { name: 'Lost Ones', duration: '5:33' }, { name: 'Ex-Factor', duration: '5:26' }]));

// Log the full collection
console.log('This is the collection: ', collection);

// Function to list collection in sentence form.
function showCollection(array) {
    console.log('This is the number of albums in this collection: ', array.length);
    console.log('Here are the albums in this collection, listed with showCollection:')
    for (let each of array) {
        console.log(`${each.title} by ${each.artist}, published in ${each.yearPublished}`);
        // Add a log of the tracks.
        for (let item of each.tracks) {
            console.log(`${each.tracks.indexOf(item) + 1}. NAME: ${item.name} DURATION: ${item.duration}`);
        }
    }
}
// End showCollection.

// Test show collection
showCollection(collection);

// Find all albums by one artist
function findByArtist(artist) {
    let artistCollection = [];
    //Cycling through to match to albums.
    for (let each of collection) {
        if (artist === each.artist) {
            //If input matches entry artist, add entry to artistCollection.
            artistCollection.push(each);
        }
    }
    return artistCollection;
}
// End findByArtist

// Test findByArtist with artist in collection:
console.log('Lucinda Williams records in my collection: ', findByArtist('Lucinda Williams'));
// Test findByArtist with an artist not in collection:
console.log('Robyn records in my collection: ', findByArtist('Robyn'));

// Album search function
function search({ artist, yearPublished, trackName }) {
    let searchResult = [];
    console.log(`Searching for: ${artist} ${yearPublished}, track: ${trackName}`)
    // check to see if trackName exists, and if so use it to search. 
    if (trackName) {
        for (let album of collection) {
            for (let song in album) {
                let track = album[song];
                for (let info in track) {
                    if (track[info].name == trackName) {
                        searchResult.push(album);
                    }
                }
            }
        }
        // if (trackName) {
        //     for (let album of collection) {
        //         console.log(album);
        //         for (let song in album) {
        //             let track = album[song];
        //                 if (track !== null && typeof track == 'object') {
        //                     for (let info of track) {
        //                         console.log(info.name);
        //                         if (trackName == info.name) {
        //                             searchResult.push(album);
        //                         }
        //                     }
        //                 }
        //             }
        //         }
    } else
        // check to see if both artist and yearPublished exist and if so use them to search
        if (artist && yearPublished) {
            for (let album of collection) {
                if (album.artist == artist && album.yearPublished == yearPublished) {
                    searchResult.push(album);
                }
            }
        } else {
            return collection
        }
    return searchResult;
};
// End search

// Test search with song in collection:
let searchResult = search({ artist: 'Lauryn Hill', yearPublished: 1998, trackName: 'Closer' });
console.log('Should be an array with Heartthrob album: ', searchResult);
// Test search with an artist and year matched, but not a song
searchResult = search({ artist: 'Lauryn Hill', yearPublished: 1998, });
console.log('Should be an array with Miseducation album: ', searchResult);

