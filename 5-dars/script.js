
// 5-dars



// FUNCTION DECLORATION

// HOISTED BO"LADI
// function getUser() {
//     return "Hey";
// }

// console.log(getUser());


// FUNCTION EXPRESSION
// HOISTING NOT WORKING WITH FUNCTION EXPRESSION
// console.log(func());

// const func = function() {
//     return "Hey";
// }

// ARROW FUNCTION

// arrFunc("Hey")

// var arrFunc = (a) => {
//     console.log(a);
// }

// console.log(obj);
// var obj = {
//     name: "Hey"
// }


// SHADOWED VARIABLE

// let user = "Ann"

// function decloration() {
//     if(true) {
//         console.log(user);
//     }
// }


// decloration(); // John


// function getUser(a = "Hey") {
//     console.log(a);
// }

// getUser()

// ARRAY - TO"PLAM / MASSIV
// let arr = [1,2,3,4,4.5,5];

// console.log(arr);
// console.log(arr[5] = "2");

// console.log(arr);


// let obj = {
//     Ann: 200,
//     Smith:400,
//     4: "Ann",
//     "name": "Xola",
//     "mister kafe": 11
// }


// let key = "name"

// console.log(obj[key]);
// console.log(obj.mister kafe);
// console.log(obj."mister kafe");
// console.log(obj[`${2 + 2}`]);
// console.log(obj[2 + 2]);
// console.log(obj['2' + "2"]); // erorr
// console.log(obj["2 + 2"]); // erorr
// console.log(obj[`${2} + ${2}`]); //eroor
// console.log(obj["mister kafe"]);

// for(value in obj) {
//     console.log(obj[value]);
// }


// getUser("John")
// getUser("Ann")
// getUser("Joe")
// getUser("Kylie")
// getUser("Albert")
// getUser("Nefel")
// getUser("Otto")

// BITWISE

// BITWISE AND
// console.log(true & false); // 0

// BITWISE OR
// console.log(true | false); // 1

// console.log(undefined & null);
// console.log("undefined" & "null");
// console.log(!1 & null);


// console.log(!1);

// console.log(typeof !0);

// BITWISE HOR
// console.log(~-9);

// console.log(~~9.111);