// Написать, функцию, которая принимает в качестве аргумента объект
// и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

function getObjectOwnProperty(obj){
  for (let prop in obj){
    if (obj.hasOwnProperty(prop)){
      console.log(`свойство ${prop}, значение ${obj[prop]}`)
    }
  }
}

// Проверка работы функции

let a = {a: 1, b: 2}
let b = Object.create(a)
b.c = 3
b.d = 4

getObjectOwnProperty(b)
