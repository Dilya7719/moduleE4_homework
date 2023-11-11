// 1.Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.

function Device(name,power) {
  this.type = 'electrical'
  this.name = name
  this.power = power
  this.status = 'off'
}

Device.prototype.setStatusOn = function(){
  this.status = 'on'
}

Device.prototype.setStatusOff = function(){
  this.status = 'off'
}

Device.prototype.getStatus = function(){
  return(`Статус ${this.status}.`)
}

Device.prototype.getPower = function(){
  if (this.status == 'on'){
    return this.power
  } else {
    return 0
  }
}

Device.prototype.getName = function(){
  return (`Устройство ${this.name}. `)
}
 

// 2.Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// 3.У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.

function Lamp(color){
  this.color = color
}

Lamp.prototype = new Device('лампа',150)

Lamp.prototype.getColor = function(){
  console.log(this.color)
}  

function Player(type){
  this.type = type
}

Player.prototype = new Device('плеер',300)

Player.prototype.getType = function(){
  console.log(this.type)
} 

// 4.Создать экземпляры каждого прибора.

let lamp1 = new Lamp('green')
let lamp2 = new Lamp('red')

let player1 = new Player('CD')
let player2 = new Player('mp3')

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
