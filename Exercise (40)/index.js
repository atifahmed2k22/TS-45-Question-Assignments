// Question 40: Album
function makeAlbum(artist, title, tracks) {
    let musicAlbum = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        musicAlbum.tracks = tracks;
    }
    return musicAlbum;
}
let album1 = makeAlbum("The Beatles", "Abbey Road");
let album2 = makeAlbum("Queen", "A Night at the Opera");
let album3 = makeAlbum("Nirvana", "Nevermind", 12);
console.log(album1);
console.log(album2);
console.log(album3);
export {};
