// task1

// let x = 1;
// let y = 2;

// // let res1 = String(x) + y;

// // console.log(res1); // "12"
// // console.log(typeof res1); // "string"

// // let res2 = Boolean(x) + String(y);
// // console.log(res2); // "true2"
// // console.log(typeof res2); // "string"

// // let res3 = Boolean(x + y);
// // console.log(res3); // true
// // console.log(typeof res3); // "boolean"

// let res4 = parseInt(Boolean(x) + String(y));
// console.log(res4); // NaN
// console.log(typeof res4); // "number"



// task2

// let age = +prompt("How old are you?");

// let res = (age > 0 && age % 2 === 0) ? "Число є парним додатним" : "Число не є парним додатним";

// console.log(res);

// let res = (age % 7 === 0) ? "Число кратне 7" : "Число не кратне 7";

// console.log(res);




// Другий спосіб

// // if (age > 0 && age % 2 === 0) {
// //     console.log ("Число є парним додатним");
// // } else {
// //     console.log("Число не є парним додатним");
// // }

// if (age % 7 === 0) {
//     console.log("Число кратне 7");
// } 
// else{
//     console.log("Число не кратне 7");
// }



// task3

// let user = [];
// user[0] =21; 
// user[1] = "Тарас";
// user [2] = true
// user [3] = null;

// console.log(user.length)

// let surname = prompt ("Введіть Ваше прізвище");
// user[4] = surname;

// console.log(user[4]);

// user.shift();
// console.log(user);



// task4

// let cities = ["Rome", "Lviv", "Warsaw"]; 

// console.log(cities.join(" * "));



// task5

// let age = +prompt("Скільки Вам років?");

// let isAdult = age;

// if(isAdult >= 18) {
//     console.log("Ви досягли повнолітнього віку");
// } else {
//     console.log("Ви ще надто молоді");
// };



// task6

// let a = +prompt("Введіть сторону трикутника АВ");
// let b = +prompt("Введіть сторону трикутника BC");
// let c = +prompt("Введіть сторону трикутника АC");

// let p = (a + b + c)/2;

// let s = (p*(p-a)*(p-b)*(p-c))**(1/2);

// console.log(s.toFixed(3))

// let rightTriangle = ((a**2) + (b**2) === c**2);

// console.log(rightTriangle)

// if (isNaN(parseInt(a)) || isNaN(parseInt(b)) || isNaN(parseInt(c))) {
//     console.log("Incorrect data");
// }



// task7

// const d = new Date();
// const hour = d.getHours();


//  Перший умовний оператор

// if(hour >= 5 && hour < 11) {
//         console.log("Доброго ранку");
//     } else if(hour >= 11 && hour < 17) {
//         console.log("Доброго дня");
//     } else if(hour >= 17 && hour < 23) {
//         console.log("Доброго вечора");
//     } else {
//         console.log("Доброї ночі");
//     };


// Другий умовний оператор

// switch(true){
//     case (hour >= 5 && hour < 11):
//          console.log("Доброго ранку");
//          break;
//      case (hour >= 11 && hour < 17):
//          console.log("Доброго дня");
//          break;
//      case (hour >= 17 && hour < 23):
//          console.log("Доброго вечора");
//          break;
//     default:
//         console.log("Доброї ночі");
//         break;
// }

