export default class Quasit {
  constructor(name="unnamed", previousOwner="none"){
    this.stype = "tiny fiend"
    this.armorClass = 13
    this.hitPoints = Math.floor(Math.random() * (12 - 3) + 3)
    this.speed = 40 //in feet
    this.traits = []
    this.actions = []
  }
}