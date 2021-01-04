export default class Raven {
  constructor(name="unnamed", previousOwner="none"){
    this.type = "tiny beast"
    this.armorClass = 12
    this.hitPoints = Math.floor(Math.random() * (3 - 1) + 1)
    this.speed = 10 //in feet
    this.traits = []
    this.actions = []
  }
}