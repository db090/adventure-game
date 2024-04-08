import chalk from "chalk";
import inquirer from "inquirer";
// clasess of playes aund villain
class player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelincrease() {
        this.fuel = 100;
    }
}
class opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let playerName = await inquirer.prompt({
    type: "input",
    name: "Pname",
    message: "what would you  like to name your player",
});
let opponentName = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "select your opponent",
    choices: ["skeleton", "assasin", "tyrant"],
});
// gather data
let p1 = new player(playerName.Pname);
let o1 = new opponent(opponentName.select);
do {
    //skeleton
    if (opponentName.select == "skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "",
            choices: ["attack", "drink portion", "run for your life"],
        });
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name}'s fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name}'s fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you lost, better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name}'s fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name}'s fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "drink portion") {
            p1.fuelincrease();
            console.log(chalk.bold.italic.green(`you drank health portion your fuel is now ${p1.fuel} `));
        }
        if (ask.opt == "run for your life") {
            console.log(chalk.red.bold.italic("you lost, better luck next time"));
            process.exit();
        }
    }
    //assasin
    if (opponentName.select == "assasin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "",
            choices: ["attack", "drink portion", "run for your life"],
        });
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name}'s fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name}'s fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you lost, better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name}'s fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name}'s fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "drink portion") {
            p1.fuelincrease();
            console.log(chalk.bold.italic.green(`you drank health portion your fuel is now ${p1.fuel} `));
        }
        if (ask.opt == "run for your life") {
            console.log(chalk.red.bold.italic("you lost, better luck next time"));
            process.exit();
        }
    }
    //tyrant
    if (opponentName.select == "tyrant") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "",
            choices: ["attack", "drink portion", "run for your life"],
        });
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name}'s fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name}'s fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you lost, better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name}'s fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name}'s fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "drink portion") {
            p1.fuelincrease();
            console.log(chalk.bold.italic.green(`you drank health portion your fuel is now ${p1.fuel} `));
        }
        if (ask.opt == "run for your life") {
            console.log(chalk.red.bold.italic("you lost, better luck next time"));
            process.exit();
        }
    }
} while (true);
