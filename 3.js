// Написать функцию, которая создает пустой объект, но без прототипа.

function createObject(){
  return Object.create(null)
}

// Проверка работы функции

let obj = createObject()
console.log(obj)




