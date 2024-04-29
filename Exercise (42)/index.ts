// Question 42: Great magicians

let magicians: string[] = [
  "Merlin",
  "Houdini",
  "David Copperfield",
  "Penn & Teller",
];
function makeGreat(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(`The great ${magician}`);
  }
}
makeGreat(magicians);
