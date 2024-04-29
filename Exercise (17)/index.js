// Question 17: Shrinking guests list
let guests = ["Hamza", "Sami", "Mehrab"];
console.log("I can invite only two guests for dinner");
while (guests.length > 2) {
    let removeGuest = guests.pop();
    console.log(`Dear ${removeGuest} sorry, you are not invited to the dinner`);
}
guests.map((item) => console.log(`Dear${item}, you are still invited to the dinner`));
guests.pop();
guests.pop();
console.log(guests);
export {};
