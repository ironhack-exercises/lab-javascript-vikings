// Soldier
function Soldier(health, strength) {
  this.health = health
  this.strength = strength
  this.attack = function() {
    return this.strength
  }
  this.receiveDamage = function(damage) {
    this.health -= damage
  }
}

// Viking
Viking.prototype = Object.create(Soldier.prototype)

function Viking(name, health, strength) {
  this.name = name
  this.health = health
  this.strength = strength
  this.attack = function() {
    return this.strength
  }
  this.receiveDamage = function(damage) {
    this.health -= damage
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage"
    } else {
      return this.name + " has died in act of combat"
    }
  }
  this.battleCry = function() {
    return "Odin Owns You All!"
  }
}

//Saxon
Saxon.prototype = Object.create(Soldier.prototype)

function Saxon(health, strength) {
  this.health = health
  this.strength = strength
  this.attack = function() {
    return this.strength
  }
  this.receiveDamage = function(damage) {
    this.health -= damage
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage"
    } else {
      return "A Saxon has died in combat"
    }
  }
}

// War
function War() {
  this.vikingArmy = []
  this.saxonArmy = []
  this.addViking = function(viking){
    this.vikingArmy.push(viking)
  }
  this.addSaxon = function(saxon){
    this.saxonArmy.push(saxon)
  }
  this.vikingAttack = function (){
    var saxonIndex = getRandomIndexFrom(this.saxonArmy)
    var saxon = this.saxonArmy[saxonIndex]
    var vikingIndex = getRandomIndexFrom(this.vikingArmy)
    var viking = this.vikingArmy[vikingIndex]

    var afterSaxonDamage = saxon.receiveDamage(viking.strength)

    if(saxon.health<=0) this.saxonArmy.splice(saxonIndex, 1)

    return afterSaxonDamage
  }

  this.saxonAttack = function(){
    var saxonIndex = getRandomIndexFrom(this.saxonArmy)
    var saxon = this.saxonArmy[saxonIndex]
    var vikingIndex = getRandomIndexFrom(this.vikingArmy)
    var viking = this.vikingArmy[vikingIndex]

    var afterVikingDamage = viking.receiveDamage(saxon.strength)

    if(viking.health<=0) this.vikingArmy.splice(vikingIndex, 1)

    return afterVikingDamage
  }

  this.showStatus = function (){
    if(this.saxonArmy.length == 0) return "Vikings have won the war of the century!"
    if(this.vikingArmy.length == 0) return "Saxons have fought for their lives and survive another day..."
    if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0) return "Vikings and Saxons are still in the thick of battle."
  }
}

function getRandomIndexFrom(array){
  return parseInt(Math.random()*array.length)
}
