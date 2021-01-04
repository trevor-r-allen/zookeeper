export default class CrawlingClaw {
  constructor(name="unnamed", previousOwner="none"){
    this.type = "tiny undead"
    this.armorClass = 12
    this.hitPoints = Math.floor(Math.random() * (4 - 1) + 1)
    this.speed = 20 //in feet
    this.traits = []
    this.actions = []
  }
}