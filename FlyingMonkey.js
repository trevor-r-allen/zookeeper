export default class FlyingMonkey {
  constructor(name="unnamed", previousOwner="none"){
    this.type = "small beast"
    this.armorClass = 12
    this.hitPoints = Math.floor(Math.random() * (6 - 1) + 1)
    this.speed = 20 //in feet
    this.traits = []
    this.actions = []
  }
}