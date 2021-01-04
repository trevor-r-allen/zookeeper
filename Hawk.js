export default class Hawk {
  constructor(name="unnamed", previousOwner="none"){
    this.type = "tiny beast"
    this.armorClass = 13
    this.hitPoints = Math.floor(Math.random() * (3 - 1) + 1)
    this.speed = 10 //in feet
    this.traits = []
    this.actions = []
  }
}