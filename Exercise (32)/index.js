// Question 32: Checking usernames
let currentUsers = ["Atif", "Naeem", "Hamza", "Sameer", "Kashif"];
let newUsers = ["Mehrab", "Atiq", "Imran", "Jawad", "Fawad"];
for (let newUser of newUsers) {
    let available = true;
    for (let currentUser of currentUsers) {
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            console.log(`Sorry, ${newUser} is already taken. Please choose a different username.`);
            available = false;
            break;
        }
    }
    if (available) {
        console.log(`${newUser} is available.`);
    }
}
export {};
