alert("At the time of enter your remaining fuel any quantity with litre. Example : 2litres")
let fuelChecker = prompt("Enter your remaining Fuel")
if(fuelChecker <= 0.25+"litres")
    {document.write("Oh! It's very low. Please refill it as soon as possible")}
else{document.write("You already have fuel remaining")}