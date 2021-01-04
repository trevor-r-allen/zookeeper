export default class Almiraj {
  constructor(name="unnamed", previousOwner="none"){
    this.type = "small beast"
    this.armorClass = 13
    this.hitPoints = Math.floor(Math.random() * (6 - 1) + 1)
    this.speed = 50 //in feet
    this.traits = []
    this.actions = []
  }
}