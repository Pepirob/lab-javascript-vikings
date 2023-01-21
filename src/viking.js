// Soldier
class Soldier {
    constructor(health, strength) {

        this.health = health;
        this.strength = strength;

    }
    attack = () => {

        return this.strength;

    }
    receiveDamage = (damage) => {

        this.health = this.health - damage;

    }
}

console.log (Soldier);



// Viking
class Viking extends Soldier {

    constructor (name, health, strength) {

        super (health, strength)
        this.name = name;
        

    }
    receiveDamage = (damage) => {

        this.health = this.health - damage;
        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`)
        } else {
            return `${this.name} has died in act of combat`
        }

    }

    battleCry = () => {
        return "Odin Owns You All!";
    }


}
console.log(Viking)

// Saxon
class Saxon extends Soldier {

    receiveDamage = (damage) => {

        this.health = this.health - damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return "A Saxon has died in combat";
        }

    }
}

console.log(Saxon)
    

// War
class War {

    constructor() {

        this.vikingArmy = [];

        this.saxonArmy = [];
    }

    addViking = (viking) => {

        this.vikingArmy.push(viking);

    }
    addSaxon = (saxon) => {

        this.saxonArmy.push(saxon);

    }
    
   

    vikingAttack = () => {
        let randomSax = Math.random() * this.saxonArmy.length;
        let randomRoundSax = Math.floor(randomSax);

        let randomVik = Math.random() * this.vikingArmy.length;
        let randomRoundVik = Math.floor(randomVik);

        for (let i = 0; i < this.saxonArmy.length; i++) {

            if(this.saxonArmy[i].health <= 0){
                this.saxonArmy.slice(this.saxonArmy.indexOf(this.saxonArmy[i]), 1)
            }
            
        }
        
        return this.saxonArmy[randomRoundSax].receiveDamage(this.vikingArmy[randomRoundVik].strength);
    }
    saxonAttack = () => {
        let randomSax = Math.random() * this.saxonArmy.length;
        let randomRoundSax = Math.floor(randomSax);

        let randomVik = Math.random() * this.vikingArmy.length;
        let randomRoundVik = Math.floor(randomVik);

        for (let i = 0; i < this.saxonArmy.length; i++) {

            if(this.vikingArmy[i].health <= 0){
                this.vikingArmy.slice(this.vikingArmy[i], 1)
            }
            
        }
        
        return this.vikingArmy[randomRoundVik].receiveDamage(this.saxonArmy[randomRoundSax].strength);
    }
}

console.log(War)

        
        
        

        

        















