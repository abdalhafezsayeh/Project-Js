
function funcOne() {

// JSON 

document.addEventListener("click",function(e){


        var lo = e.target.value;  


   


var booksJson = new XMLHttpRequest();  // Step One Initilaiz 
booksJson.open("GET","https://www.googleapis.com/books/v1/volumes?q=" + lo );  // Step Two Server Connection 

booksJson.onreadystatechange = function()
{
    if(booksJson.readyState == 4 && booksJson.status == 200)
    {
        var arr = JSON.parse(booksJson.responseText)



        // console.log(arr.items.length) // Test 
        for(var i = 0; i<arr.items.length; i++ )
        {
            // console.log(arr.items[i].volumeInfo.title) // Test 

            
            // console.log( document.querySelectorAll(".righttext h2")[i]) // Test 

            document.querySelectorAll(".righttext h2")[i].innerHTML = arr.items[i].volumeInfo.title
            document.querySelectorAll(".righttext .authors")[i].innerHTML = arr.items[i].volumeInfo.authors

        }



    }

}
booksJson.send()

})

}



