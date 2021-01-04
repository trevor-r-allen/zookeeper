export default class Frog {
  constructor(name="unnamed", previousOwner="none"){
    this.type = "tiny beast"
    this.armorClass = 11
    this.hitPoints = Math.floor(Math.random() * (3 - 1) + 1)
    this.speed = 20 //in feet
    this.traits = []
    this.actions = []
  }
}