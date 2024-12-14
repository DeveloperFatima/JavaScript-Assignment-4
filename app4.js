let userName = prompt("Enter Your Name") 
let math = +prompt("Enter Your Gained Marks In Math");
let english = +prompt("Enter Your Gained Marks In English");
let sindhi = +prompt("Enter Your Gained Marks In Sindhi");
let sst = +prompt("Enter Your Gained Marks In S.S.T");
let science = +prompt("Enter Your Gained Marks In Science");
let computer = +prompt("Enter Your Gained Marks In Computer");
let urdu = +prompt("Enter Your Gained Marks In Urdu");
let totalMarks = 700
let marksObtained = math + english + sindhi + sst + science + computer + urdu;
let percentage = marksObtained/7
let grade = "";
let remarks = "";
if(percentage >= 80)
    {grade = "A-One";
    remarks = "Excellent 🥇";
    }
else if (percentage >= 70)
    {grade = "A ";
    remarks = "Good 👍";
    }
else if (percentage >= 60)
    {grade = "B ";
    remarks = "You need to improve 😢"
    }
else if (percentage < 60)
    {grade = "Fail";
    remarks = "Sorry ❌"
    }
else{grade = ""}
document.write( "Name : " + userName);
document.write( "<br>Total Marks : " + totalMarks);
document.write( "<br> Marks Obtained : " + marksObtained);
document.write( "<br> Percentage : " + percentage + " %");
document.write( "<br> Grade : " + grade);
document.write( "<br> Remarks : " + remarks);