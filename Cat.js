export default class Cat {
  constructor(name="unnamed", previousOwner="none"){
    this.type = "tiny beast"
    this.armorClass = 12
    this.hitPoints = Math.floor(Math.random() * (4 - 1) + 1)
    this.speed = 40 //in feet
    this.traits = []
    this.actions = []
  }
}