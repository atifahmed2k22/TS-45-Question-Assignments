// Question 43: Unchanged magicians
let magicians = [
    "Merlin",
    "Houdini",
    "David Copperfield",
    "Penn & Teller",
];
function makeGreat(magicians) {
    for (let magician of magicians) {
        console.log(`The great ${magician}`);
    }
}
let greatMagicians = [];
function makeGreat2(magicians) {
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    console.log(greatMagicians);
}
function showMagicians2(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
magicians = ["Harry Houdini", "David Blaine", "Criss Angel"];
greatMagicians = makeGreat([...magicians]);
console.log(magicians);
console.log(greatMagicians);
export {};
