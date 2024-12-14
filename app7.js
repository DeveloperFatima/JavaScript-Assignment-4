let secretNumber = 9;
let userNumber = +prompt("Enter a Guess Number ranging from 1 to 10")
if (userNumber == secretNumber)
    {document.write("Congratulations! You guess correct number")}
else if (++userNumber == secretNumber)
    {document.write("You are very close to the correct number")}
else{document.write("Ooo! Your answer is wrong")}