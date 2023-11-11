// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

function isHasObjectProperty(str, obj){
  for (let prop in obj){
    if (obj.hasOwnProperty(str)){
      return true
    }
  }
  return false
}

// Проверка работы функции

let a = {a: 1, b: 2}
console.log(isHasObjectProperty('a', a))  // true
console.log(isHasObjectProperty('b', a))  // true
console.log(isHasObjectProperty('c', a))  // false