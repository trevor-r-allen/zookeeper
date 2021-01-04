export default class Gazer {
  constructor(name="unnamed", previousOwner="none"){
    this.type = "tiny aberration"
    this.armorClass = 13
    this.hitPoints = Math.floor(Math.random() * (19 - 7) + 7)
    this.speed = 0 //in feet
    this.traits = []
    this.actions = []
  }
}