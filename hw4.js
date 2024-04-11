// task1

// function calcRectangleArea(){
//     try{
//          let width = +prompt("Введіть ширину прямокутника");
//          let height = +prompt("Введіть висоту прямокутника");
         
//          if (isNaN(parseFloat(width)) || isNaN(parseFloat(height))){
//              throw new Error("Ви ввели не числові параметри");
//          }
//             let s = width * height;
//             console.log(s);
         
//     } catch(error){
//         console.log(error.message);
//     }
// }

// calcRectangleArea()



// task2

// function checkAge(){
//      try{
//         let age = +prompt("Please enter your age");

//         if(age === 0){
//             throw new Error("The field is empty! Please enter your age");
//         } else if(isNaN(parseFloat(age))){
//             throw new Error("You entered a non-numeric value");
//         } else if(age > 0 && age <= 14){
//             throw new Error("Your age is less than 14");
//         }
//         console.log(age);
             
//     } catch(error){
//             console.log(error.name);
//             console.log(error.message);
//     }
// }
    
// checkAge()



// task3

// class MonthException{
//     constructor(message){
//         this.name = this.constructor.name;
//         this.message = message;   
//     }
// }


// function showMonthName(month){
//     const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//     try{
//         if(month >= 0 || month >= 12 || isNaN(parseInt(month)) || month ===""){
//             throw new MonthException("Incorrect month number");
//         } else {
//             return monthArr[month - 1]
//         }     
                     
//     } catch(error){
//             return `${error.name}: ${error.message}`;
//         }
// }

// console.log(showMonthName(15));



// task4

// function showUser(id){
//    if(id < 0){
//     throw new Error("Error: ID must not be negative");
//    }
//    return {id};
// }

// function showUsers(ids){
//     let user =[];
//     for(id of ids){
//         try{
//             user.push(showUser(id));
//         }catch(error){
//             console.log(error.message);
//         }
//     }
//     return user
// }
// console.log(showUsers([3,2,5,3]))