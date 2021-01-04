export default class Imp {
  constructor(name="unnamed", previousOwner="none"){
    this.type = "tiny fiend"
    this.armorClass = 13
    this.hitPoints = Math.floor(Math.random() * (15 - 4) + 4)
    this.speed = 20 //in feet
    this.traits = []
    this.actions = []
  }
}