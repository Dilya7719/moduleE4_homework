// 1.Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.

class Device{
  constructor(name,power){
    this.type = 'electrical'
    this.name = name
    this.power = power
    this.status = 'off'    
  }
  setStatusOn(){
    this.status = 'on'
  }
  setStatusOff(){
    this.status = 'off'
  }
  getStatus = function(){
    return(`Статус ${this.status}.`)
  }
  getPower(){
    if (this.status == 'on'){
      return this.power
    } else {
      return 0
    }
  }
  getName(){
    return (`Устройство ${this.name}. `)
  }
}
 

// 2.Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// 3.У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.

class Lamp extends Device{
  constructor(color,name,power){
    super(name,power)
    this.color = color
  }
  getColor(){
    console.log(this.color)
  }  
}

class Player extends Device{
  constructor(type,name,power){
    super(name,power)
    this.type = type
  }
  getType(){
    console.log(this.type)
  } 
}

// 4.Создать экземпляры каждого прибора.

let lamp1 = new Lamp('green','лампа',150)
let lamp2 = new Lamp('red','лампа',150)

let player1 = new Player('CD','плеер',300)
let player2 = new Player('mp3','плеер',300)

let devices = [lamp1, lamp2, player1, player2]

// Включить некоторые в розетку. Посчитать потребляемую мощность. 

lamp1.setStatusOn()
player2.setStatusOn()


let power = 0
for (let device of devices){
  console.log(device.getName() + device.getStatus() + ' Потребляемая мощность ' + device.getPower() + ' Ватт.')
  power+= device.getPower()
}
console.log(`Общая потребляемая мощность приборов - ${power} Ватт.`)
