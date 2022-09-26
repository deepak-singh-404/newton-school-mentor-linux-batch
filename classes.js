class Car {

    //This is called as constructor
    //Whenver we create new instance from a claass, costructor will be called first
    constructor(name, year) {
        this.name = name;
        this.year = year;
        this.power = false
    }

    constructor() {
        console.log("I am with no args constructor")
    }

    //Method inside class
    switchPower(powerMode) {
        this.power = powerMode
    }
    drive() {
        if (this.power) {
            console.log("Car is in drive mode")
        }
        else {
            console.log("Please switch on power")
        }
    }
}



// let Baleno = new Car("Baleno", "2015")
// Baleno.switchPower(true)
// Baleno.drive()

let Baleno = new Car()

int i, j, k = 0;

for (i = n / 2; i <= n; i++) {

    for (j = 2; j <= n; j = j * 2) {

        k = k + n / 2;

    }

}