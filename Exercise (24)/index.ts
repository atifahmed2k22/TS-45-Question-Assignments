// Question 24: More conditional tests

let veg1: string = "Potato";
let veg2: string = "Tomato";
console.log(veg1 === veg2);
console.log(veg1 !== veg2);

let myName: string = "ATIF AHMED";
let lowerCaseString: string = myName.toLowerCase();
console.log(lowerCaseString === "ATIF AHMED");
console.log(lowerCaseString !== "ATIF AHMED");

let num1: number = 5;
let num2: number = 10;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

let g: boolean = true;
let h: boolean = false;
console.log(g && h);
console.log(g || h);

let stationary: string[] = ["Ink pen", "Pencil", "Eraser", "Sharpner", "Scale"];
console.log(stationary.includes("Ink pen"));
console.log(stationary.includes("Ink Pen"));
