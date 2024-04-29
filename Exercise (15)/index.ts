// Question 15: Changing guest list

let guests: string[] = ["Hamza", "Sami", "Mehrab"];

let canNotAttend: string = "Atiq";
console.log(`${canNotAttend} can't make it,for dinner`);
let newGuest: string = "Mehmood";
guests[guests.indexOf(canNotAttend)] = newGuest;
guests.map((item) =>
  console.log(`Dear ${item}, you are cordially invited to a dinner`)
);
