// Question 16: More guests
let guests = ["Hamza", "Sami", "Mehrab"];
guests.map((item) => console.log(`Dear ${item}, I found a bigger dinner table`));
let beginningGuest = "Fawad";
guests[guests.unshift(beginningGuest)];
let middleGuest = "Huzaifa";
let middleIndex = guests.length / 2;
guests.splice(middleIndex, 0, middleGuest);
let lastGuest = "Ayub";
guests.push(lastGuest);
guests.map((item) => console.log(`Dear ${item}, you are cordially invited to a dinner`));
export {};
