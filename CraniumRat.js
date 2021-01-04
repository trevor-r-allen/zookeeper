export default class CraniumRat {
  constructor(name="unnamed", previousOwner="none"){
    this.type = "tiny beast"
    this.armorClass = 12
    this.hitPoints = Math.floor(Math.random() * (4 - 1) + 1)
    this.speed = 30 //in feet
    this.traits = []
    this.actions = []
  }
}