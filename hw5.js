// task1

// let mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development" 
// };

// function propsCount(myObject){ 
//     let allObject = Object.keys(myObject)
//     console.log(allObject.length);
// }

//  propsCount(mentor)



// task2

// let user = {
//     name: "John",
//     age: 45,
//     state: "married",
//     son: "Victor",
//     city: "London"
// }

// function showProps(obj){
//     console.log(Object.keys(obj));
//     console.log(Object.values(obj));
// }

// showProps(user);



// task3

// class Person{
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName(){
//         return `${this.name} ${this.surname}`;
//     }
// }

// let person = new Person("Sam", "Pater");
// person.showFullName(); 

// class Student extends Person{
//     constructor(name, surname, year){
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName(midleName){
//         return (super.showFullName() + ` ${midleName}`);
//     }
//     showCourse(){
//         let currentYear = 2024 - this.year;
//         return currentYear;
//     }
// }

// let stud1 = new Student("Sam", "Pater", 2018);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());



// task4

// class Worker{
//     #experience = 1.2;
//     constructor(fullName, dayRate, workingDays){
//         this.fullName = fullName; 
//         this.dayRate = dayRate;
//         this.workingDays  = workingDays;
//         this.addWorkerToList();
//     }

//     static workersList = [];
//     addWorkerToList(){
//         Worker.workersList.push(this);
//     };

//     showSalary(){
//         console.log(`${this.fullName} ${"salary"} : ${this.dayRate * this.workingDays}`);
//     }
//     showSalaryWithExperience(){
//         console.log (`${this.fullName} ${"salary"} : ${this.dayRate * this.workingDays * this.#experience}`)
//     }

//     get showExp(){
//         return this.#experience;
//     }

//     set setExp(value){
//         this.#experience = value;
//     }
// }
    

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// let worker3 = new Worker("Andy Ander", 29, 23);

// console.log(Worker.workersList);



// function sorting(listof){
//     console.log("Sorted salary:");
//     listof.sort(function(a,b){
//         return a.showSalaryWithExperience() - b.showSalaryWithExperience();
//     })

// }
// sorting(Worker.workersList);



// task5

// class GeometricFigure{
//     getArea(){
//         return 0;
//     }

//     toString(){
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }

// class Triangle extends GeometricFigure{
//     constructor(width,height){
//         super();
//         this.width = width;
//         this.height = height;
//     }
//     getArea(){
//         return 0.5 * this.width * this.height;
//     }
// }

// class Square extends GeometricFigure{
//     constructor(side){
//         super();
//         this.side = side;
//     }
//     getArea(){
//         return Math.pow(this.side, 2);
//     }
// }

// class Circle extends GeometricFigure{
//     constructor(radius){
//         super();
//         this.radius = radius;
//     }
//     getArea(){
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// }

// function handleFigures(figures){
//     let totalArea = figures.reduce((accumulator, figure) => {
//         if(figure instanceof GeometricFigure){
//             console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
//             return accumulator + figure.getArea();
//         } else{
//             console.log("Invalid figure object.");
//             return accumulator;
//         }
//     }, 0);
//     return totalArea;
// }

// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// console.log(handleFigures(figures));

// Приклад результату:
// Geometric figure: Triangle - area: 10
// Geometric figure: Square - area: 49
// Geometric figure: Circle - area: 78.53981633974483
// 137.53981633974485 // total area
