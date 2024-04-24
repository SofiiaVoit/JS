// task1


// Спосіб 1

// let test = document.querySelector("#test");
// test.innerHTML = "Last";
// console.log(test.innerHTML);


// Спосіб 2

// let test = document.getElementById("test");
// test.innerHTML = "Last";
// console.log(test.innerHTML);



// task2

// let image = document.querySelector(".image");
// image.src = "cat.jpg";
// alert(image.outerHTML);



// task3

// let text = document.querySelectorAll("div > p");

// let i = 0
// for(let elem of text){
//     console.log (` ${"Selector text " + i++}: ${elem.innerHTML}`);
// }



// task4

// let list = document.querySelector("#list");

// Спосіб 1
// alert(list.firstElementChild.textContent);
// alert(list.lastElementChild.textContent);
// alert(list.firstElementChild.nextElementSibling.textContent);
// alert(list.lastElementChild.previousElementSibling.textContent);
// alert(list.lastElementChild.previousElementSibling.previousElementSibling.textContent);

// Спосіб 2

// alert(list.children[0].textContent);
// alert(list.children[4].textContent);
// alert(list.children[1].textContent);
// alert(list.children[3].textContent);
// alert(list.children[2].textContent);



// task5

// let header = document.querySelector("h1");
// header.style.background = "lightgreen";


// let div = document.getElementById("myDiv");
// div.children[0].style.fontWeight = "bold";
// div.children[1].style.color = "red";
// div.children[2].style.textDecoration = "underline";
// div.children[3].style.fontStyle = "italic";


// let list = document.getElementsByTagName("li");
// for(let element of list){
//     element.style.display = "inline";
//     element.style.marginRight = "-4px";;
// }


// let span = document.querySelector("span");
// span.style.visibility = "hidden";



// task6

// let input1 = document.getElementById("input1").value;
// let input2 = document.getElementById("input2").value;

// input1 = prompt("Введіть Ваше ім'я");
// input2 = prompt("Введіть Ваше прізвище");

// document.getElementById("input1").value = input2;
// document.getElementById("input2").value = input1;



// task7

// let body = document.createElement("body");
// let main = document.createElement("main");
// let div = document.createElement("div");
// let p = document.createElement("p");

// main.className = "mainClass check item";
// div.id = "myDiv";
// p.textContent = "First paragraph";

// document.body.appendChild(body);
// body.appendChild(main);
// main.appendChild(div);
// div.appendChild(p);

// console.log(body)