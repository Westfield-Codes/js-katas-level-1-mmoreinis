/* Var Alert Prompt */
// make a string variable for favorite ice cream flavor, prompt user for it
var flavor = prompt("What's your favorite ice cream flavor?");
// make an integer variable for number of scoops on the cone, prompt user for it
var scoops = prompt("How many scoops?");
if (scoops > 3) alert("You are fat enough.");
// alert "You want " scoops "scoops of " flavor
else alert("You want " + scoops + " scoops of " + flavor );