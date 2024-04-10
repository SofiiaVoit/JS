// task1


// let numbers = [2, 3, 4, 5];

// let result = 1;

// // for(let i = 0; i < numbers.length; i++){
// //     result *= numbers[i];
// // } 
// // console.log(result);

// let i = 0;
// while(i < numbers.length){
//     result *= numbers[i];
//     i++;
// }
// console.log(result);



// task2

// for(let i = 0; i <= 15; i ++) {
//     if (i >= 0 && i % 2 === 0) {
//         console.log(i + "is even");
//     } else {
//         console.log(i + "is odd");
//         }
// }



// task3


// function randArray(n){
//     let k = [];
//     for(let i = 0; i < n; i++){
//     k.push(Math.floor(Math.random() * 501) + 1);
//     }
//     return k;
// }  

// console.log(randArray(5))



// task4

// let a = +prompt("Введіть значення а");
// let b = +prompt("Введіть значення b");

// function raiseToDegree(a, b){
//    return Math.pow(parseInt(a), parseInt(b));
// }

// console.log(raiseToDegree(a, b));



// task5

// function findMin(){
//    return Math.min(...arguments);
// }

// console.log(findMin(2,5,-1,10));



// task6

// function findUnique(arr){
// let unique = new Set(arr);
//     return unique.size === arr.length;
// }

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 1];

// console.log(findUnique(arr1)); 
// console.log(findUnique(arr2));



// task7

// function element(a,b = 1){
//     let elem = [];
    
//     for(let i = 0; i < b && i <= a.length; i++){
//         let lastElem = a.pop();
//         elem.push(lastElem)
//     }
//     return elem;
// }

// console.log(element([3, 4, 10, -5]));     // -5
// console.log(element([3, 4, 10, -5],2));   // [10, -5]
// console.log(element([3, 4, 10, -5],8));   // [3, 4, 10, -5]



// task8

// function capitalze(a){
//     let letter = [];
//     let wordsArr = a.split(" ");

//     for(let element of wordsArr){
//         let b = element.replace(element[0], element[0].toUpperCase());
//         letter.push(b);
//     }
//     return letter.join(" ");
// }
// console.log(capitalze("i love java script"));


