export default class Almiraj {
  constructor(name="unnamed", previousOwner="none"){
    this.armorClass = 13
    this.hitPoints = Math.floor(Math.random() * 7)
    this.speed = 50 //in feet
    this.traits = []
    this.actions = []
  }
}