// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(dmg) {
    this.health = this.health - dmg;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(dmg) {
    super.receiveDamage(dmg);

    if (this.health > 0) {
      return `${this.name} has received ${dmg} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(dmg) {
    super.receiveDamage(dmg);
    if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const randomizer = (num) => {
      return Math.floor(Math.random() * num);
    };
    const result = this.saxonArmy[
      randomizer(this.saxonArmy.length)
    ].receiveDamage(
      this.vikingArmy[randomizer(this.vikingArmy.length)].strength
    );
    this.saxonArmy.forEach((saxon, index) =>
      saxon.health <= 0 ? this.saxonArmy.splice(index, 1) : null
    );
    return result;
  }
  saxonAttack() {
    const randomizer = (num) => {
      return Math.floor(Math.random() * num);
    };
    const result = this.vikingArmy[
      randomizer(this.vikingArmy.length)
    ].receiveDamage(this.saxonArmy[randomizer(this.saxonArmy.length)].strength);
    this.vikingArmy.forEach((viking, index) =>
      viking.health <= 0 ? this.vikingArmy.splice(index, 1) : null
    );
    return result;
  }
  showStatus() {}
}
