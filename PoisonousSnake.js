export default class PoisonousSnake {
  constructor(name="unnamed", previousOwner="none"){
    this.type = "tiny beast"
    this.armorClass = 13
    this.hitPoints = Math.floor(Math.random() * (4 - 1) + 1)
    this.speed = 30 //in feet
    this.traits = []
    this.actions = []
  }
}