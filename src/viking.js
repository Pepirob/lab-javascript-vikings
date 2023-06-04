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

  // bonus

  strike(strikerArr, receiverArr) {
    const randomizer = (num) => {
      return Math.floor(Math.random() * num);
    };
    const result = receiverArr[randomizer(receiverArr.length)].receiveDamage(
      strikerArr[randomizer(strikerArr.length)].strength
    );
    receiverArr.forEach((receiver, index) =>
      receiver.health <= 0 ? receiverArr.splice(index, 1) : null
    );

    return console.log(result);
  }
  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    if (this.saxonArmy.length && this.vikingArmy.length) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

const viking = new Viking("pepe", 100, 30);
const saxon = new Saxon(100, 30);
const game = new War();
game.addSaxon(saxon);
game.addViking(viking);
game.strike(game.saxonArmy, game.vikingArmy);
game.strike(game.vikingArmy, game.saxonArmy);

console.log(viking, saxon);
