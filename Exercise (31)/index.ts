// Question 31: No users

let userName: string[] = ["Admin", "Atif", "Ahmed"];
if (userName.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < userName.length; i++) {
    console.log(userName[i]);
  }
}

userName = [];
if (userName.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < userName.length; i++) {
    console.log(userName[i]);
  }
}
