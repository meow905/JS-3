// function sayHello() {
//   let random = Math.round(Math.random() * 1000);
//   console.log("И победитель у нас: " + random);
// }
// sayHello();
// sayHello();
// sayHello();
// sayHello();

/*function showBetween(range, prize = " Купон на сауну") {
  let randomNuumber = Math.round(Math.random() * range);
  console.log(
    "Победитель с номером билета : " +
      randomNuumber +
      " " +
      "Выигрывает" +
      prize
  );
}

// showBetween(20_000_000);

let userInput = parseInt(prompt("Укажи диапазон: "));

showBetween(userInput, " Машину!");*/

//Объединить имя и фамилию в одну строку///////////////////////////////////////////<-------------

function contact(name, surname) {
  let contactME = name + surname;
  console.log(contactME);
}

contact("Tabrez ", "Sanoev");
contact("Umed ", "Nazarov");

//Число меньше или равно нулю? ///////////////////////////////////////////<-------------

function smallerThan(number) {
  if (number <= 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

smallerThan(0);
smallerThan(5);
smallerThan(-2);

//Равны ли числа? ///////////////////////////////////////////<-------------

function equalTO(number, number2) {
  if (number == number2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

equalTO(10, 10);
equalTO(1, 9);
equalTO(20, 20);

/*function number3(number_1) {
  return number_1 <= 0;
}

console.log(number3(2));
console.log(number3(0));*/

//Найдите периметр прямоугольника ///////////////////////////////////////////<-------------

function perim(a, b) {
  let sum = 2 * (a + b);
  alert("Периметр прямоугольника: " + sum + "см");
}

let sum_2 = Number(prompt("Укажите первое значение: "));
let sum_3 = Number(prompt("Укажите второе значение: "));

perim(sum_2, sum_3);
