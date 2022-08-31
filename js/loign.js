// Select Element Button Inside Form 
var inlog = document.getElementById("in")
var uplog = document.getElementById("up")

// Function One Switch To Up 
function inloglog()
{
    console.log("testr")
    uplog.style.transform = "translateX(600px)";
    inlog.style.transform = "translateX(600px)";    


}
// Function Two Switch To In
function uploglog()
{
    console.log("testr")
    uplog.style.transform = "translateX(0)";
    inlog.style.transform = "translateX(-600px)";


}


// Start Chick About Form 
var fName = document.getElementById("fname") // UserName
var femail = document.getElementById("ename") // Email 
var pasOne = document.getElementById("pasOne") // Pas One 
var pasTwo = document.getElementById("pasTwo") // Pas Two 

function sginUp()
{

    // var pOne = pasOne.value;
    // var pTwo = pasTwo.value;

    if(pasOne.value == pasTwo.value)
    {
        console.log("true") // Test 
        localStorage.setItem("username", fName.value)
        localStorage.setItem("email", femail.value)
        uplog.setAttribute("action","./index.html")

    } else {

        console.log("false") // Test 
        
        uplog.setAttribute("action","#")
    }
}


