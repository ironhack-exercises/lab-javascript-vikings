// Soldier
function Soldier(health, strength) {
  this.health = health
  this.strength = strength
}

Soldier.prototype.attack = function() {
  return this.strength
}
Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage
}

// Viking
Viking.prototype = Object.create(Soldier.prototype)
Viking.constructor = Viking

function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name
}

Viking.prototype.attack = function() {
  return this.strength
}
Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage
  if (this.health > 0)
  return this.name + " has received " + damage + " points of damage"
  else
  return this.name + " has died in act of combat"
}
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!"
}

//Saxon
Saxon.prototype = Object.create(Soldier.prototype)
Saxon.constructor = Saxon

function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype.attack = function() {
  return this.strength
}
Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage"
  } else {
    return "A Saxon has died in combat"
  }
}

// War
function War() {
  this.vikingArmy = []
  this.saxonArmy = []
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking)
}
War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon)
}
War.prototype.vikingAttack = function() {
  var saxonIndex = getRandomIndexFrom(this.saxonArmy)
  var saxon = this.saxonArmy[saxonIndex]
  var vikingIndex = getRandomIndexFrom(this.vikingArmy)
  var viking = this.vikingArmy[vikingIndex]

  var afterSaxonDamage = saxon.receiveDamage(viking.strength)

  if (saxon.health <= 0) this.saxonArmy.splice(saxonIndex, 1)

  return afterSaxonDamage
}

War.prototype.saxonAttack = function() {
  var saxonIndex = getRandomIndexFrom(this.saxonArmy)
  var saxon = this.saxonArmy[saxonIndex]
  var vikingIndex = getRandomIndexFrom(this.vikingArmy)
  var viking = this.vikingArmy[vikingIndex]

  var afterVikingDamage = viking.receiveDamage(saxon.strength)

  if (viking.health <= 0) this.vikingArmy.splice(vikingIndex, 1)

  return afterVikingDamage
}

War.prototype.showStatus = function() {
  if (this.saxonArmy.length == 0) return "Vikings have won the war of the century!"
  if (this.vikingArmy.length == 0) return "Saxons have fought for their lives and survive another day..."
  if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) return "Vikings and Saxons are still in the thick of battle."
}

function getRandomIndexFrom(array) {
  return parseInt(Math.random() * array.length)
}
