const READLINE = require("readline-sync");

let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: undefined,
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
player.weapon= READLINE.question("What is your weapon of choice?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears a screeching sound coming from what feels like nowhere. `);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door to reveal a dark shadow at the end of the hall.`);
  // continue the story
  console.log(`${player.name} hears the door shut behind them and their ${player.weapon} is snatched from them. `);
 let firstDecision = READLINE.question("What do you do next? (keep walking or run back)");
 if(firstDecision=="keep walking"){
  player.courage++;
   console.log(`${player.name} keeps walking through and the lights all turn off completely. `);
   console.log(`${player.name} is grabbed and pulled into a small empty room.`);
   

}
else{
    player.intellect++;
    console.log(`${player.name} tries to run back but the lights turn off completely and they run into a wall.`)
    console.log(`${player.name} gets up but is then is grabbed and pulled into a small empty room.`)





 }
} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However the door slams open and they're pushed inside. They then feel their ${player.weapon} snatched from them `);
  let firstDecision = READLINE.question("What do you do next? (keep walking or run back)");
  if(firstDecision == "keep walking") {
    player.courage++;
    console.log(`${player.name} keeps walking through and the lights all turn off completely. `);
    console.log(`${player.name} is grabbed and pulled into a small empty room.`);



  }
  else{
    player.intellect++;
    console.log(`${player.name} tries to run back but the lights turn off completely and they run into a wall.`)
    console.log(`${player.name} gets up but is then is grabbed and pulled into a small empty room.`)
  
  }
}
  let secondDecision= READLINE.question("There is a small child standing in the corner. Do you approach them? (yes or no) ");
  if(secondDecision == "yes"){
    player.courage++;
    console.log(`${player.name} approaches the child and taps them on the shoulder`);
    console.log(`......`);
    console.log(`the small child turns their head 180 degrees and stares at you in fright`);
    console.log(`${player.name} runs towards the door hoping to leave but realizes it's locked`);
}
else{
  console.log(`${player.name} chooses to stay in place but the child's head turns 180 degrees and stares at them.`);
  console.log(`${player.name} bolts towards the door and punches the door hoping the open it but it doesnt open.. They're stuck.`);
  console.log("To be continued....")
}


  console.log(`Courage points: ${player.courage}`);
  console.log(`intellect points: ${player.intellect}`);


console.log("Thanks for playing!");
