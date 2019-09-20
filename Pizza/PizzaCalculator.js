//Jason
//Lau
//Pizza Calculator

alert("Voer hier het aantal kleine, medium en grote pizza's.");

const sp = ("5");
const mp = ("8");
const gp = ("10"); // deze const bepalen de prijs per pizza

var smallpizza = prompt("Vul hier het aantal kleine pizza's in.");
var mediumpizza = prompt("Vul hier het aantal medium pizza's in");
var largepizza = prompt("Vul hier het aantal grote pizza's in");
var som =( smallpizza * sp) + (mediumpizza * mp) + (largepizza * gp); //Dit is het totaal bedrag

document.write("U heeft het volgende bestelt:");
document.write("<br>");
document.write("Kleine Pizza(s) "+ smallpizza +" €");
document.write( smallpizza * sp); // Het bedrag van de kleine pizza
document.write("<br>");
document.write("Medium Pizza(s) "+ mediumpizza +" €");
document.write( mediumpizza * mp); //Het bedrag van de medium pizza
document.write("<br>"); // 
document.write("Grote Pizza(s) "+ largepizza +" €");
document.write( largepizza * gp); // Het bedrag van de grote pizza
document.write("<br>"); 
document.write("<br>"); 
document.write("Uw totaal bedrag is  €"+ som +".-")

