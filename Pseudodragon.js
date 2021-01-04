export default class Pseudodragon {
  constructor(name="unnamed", previousOwner="none"){
    this.type = "tiny dragon"
    this.armorClass = 13
    this.hitPoints = Math.floor(Math.random() * (10 - 3) + 3)
    this.speed = 15 //in feet
    this.traits = []
    this.actions = []
  }
}