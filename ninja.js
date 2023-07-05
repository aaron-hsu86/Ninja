class Ninja {
    constructor(name){
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Your name is ${this.name}.`);
    }
    showStats() {
        console.log(`Your stats are:\nHealth = ${this.health}\nSpeed = ${this.speed}\nStrength = ${this.strength}`);
    }
    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();   // Your name is Hyabusa
ninja1.showStats(); // shows all stats
ninja1.drinkSake(); // increase health by 10
ninja1.showStats(); // shows stats with health increased by 10