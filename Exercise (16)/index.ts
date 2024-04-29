// Question 16: More guests

let guests: string[] = ["Hamza", "Sami", "Mehrab"];

guests.map((item) =>
  console.log(`Dear ${item}, I found a bigger dinner table`)
);

let beginningGuest: string = "Fawad";
guests[guests.unshift(beginningGuest)];

let middleGuest: string = "Huzaifa";
let middleIndex = guests.length / 2;
guests.splice(middleIndex, 0, middleGuest);

let lastGuest: string = "Ayub";
guests.push(lastGuest);

guests.map((item) =>
  console.log(`Dear ${item}, you are cordially invited to a dinner`)
);
