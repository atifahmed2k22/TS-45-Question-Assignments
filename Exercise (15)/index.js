// Question 15: Changing guest list
let guests = ["Hamza", "Sami", "Mehrab"];
let canNotAttend = "Atiq";
console.log(`${canNotAttend} can't make it,for dinner`);
let newGuest = "Mehmood";
guests[guests.indexOf(canNotAttend)] = newGuest;
guests.map((item) => console.log(`Dear ${item}, you are cordially invited to a dinner`));
export {};
