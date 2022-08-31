
// JSON 
var ttest = document.getElementById("ttest") // Select Options
ttest.addEventListener("click",function(e){

 

        // console.log(e.target) // Test 
   

    var booksJson = new XMLHttpRequest();  // Step One Initilaiz 
    booksJson.open("GET","https://www.googleapis.com/books/v1/volumes?q=" + e.target.value );  // Step Two Server Connection 

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
                document.querySelectorAll(".leftimg img")[i].src = arr.items[i].volumeInfo.imageLinks.smallThumbnail
                document.querySelectorAll("h4 span")[i].innerHTML = arr.items[i].volumeInfo.publishedDate
                document.querySelectorAll(".righttext p:last-of-type")[i].innerHTML = arr.items[i].volumeInfo.description
                // Add Attribute Title In Pragraph
                document.querySelectorAll(".righttext p:last-of-type")[i].setAttribute("title", arr.items[i].volumeInfo.description ) 
                // console.log(document.querySelectorAll("h4 span")[0])
                // console.log(arr.items[i].volumeInfo.description)
                // console.log(document.querySelectorAll(".leftimg img")[i].src)
                // console.log( arr.items[i].volumeInfo.imageLinks.smallThumbnail)

            }



        }

    }
    booksJson.send()





}) // End The Event Listener





// Start PRODUCT TAGES 

// JSON 
var tages = document.getElementById("tagg") // Select Options

tages.addEventListener("click",function(e){

    console.log(e.target.title)

        // console.log(e.target) // Test 
   

    var booksJson = new XMLHttpRequest();  // Step One Initilaiz 
    booksJson.open("GET","https://www.googleapis.com/books/v1/volumes?q=" + e.target.title );  // Step Two Server Connection 

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
                document.querySelectorAll(".leftimg img")[i].src = arr.items[i].volumeInfo.imageLinks.smallThumbnail
                document.querySelectorAll("h4 span")[i].innerHTML = arr.items[i].volumeInfo.publishedDate
                document.querySelectorAll(".righttext p:last-of-type")[i].innerHTML = arr.items[i].volumeInfo.description
                // Add Attribute Title In Pragraph
                document.querySelectorAll(".righttext p:last-of-type")[i].setAttribute("title", arr.items[i].volumeInfo.description ) 
                // console.log(document.querySelectorAll("h4 span")[0])
                // console.log(arr.items[i].volumeInfo.description)
                // console.log(document.querySelectorAll(".leftimg img")[i].src)
                // console.log( arr.items[i].volumeInfo.imageLinks.smallThumbnail)

            }



        }

    }
    booksJson.send()





}) // End The Event Listener





// Start Search
// JSON 
var searchInput = document.getElementById("searchButton") // Select Options
var bookSearch = document.getElementById("searccInput")
searchInput.addEventListener("click",function(){

   
    console.log(bookSearch.value)

        // console.log(e.target) // Test 
   

    var booksJson = new XMLHttpRequest();  // Step One Initilaiz 
    booksJson.open("GET","https://www.googleapis.com/books/v1/volumes?q=" + bookSearch.value );  // Step Two Server Connection 

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
                document.querySelectorAll(".leftimg img")[i].src = arr.items[i].volumeInfo.imageLinks.smallThumbnail
                document.querySelectorAll("h4 span")[i].innerHTML = arr.items[i].volumeInfo.publishedDate
                document.querySelectorAll(".righttext p:last-of-type")[i].innerHTML = arr.items[i].volumeInfo.description
                // Add Attribute Title In Pragraph
                document.querySelectorAll(".righttext p:last-of-type")[i].setAttribute("title", arr.items[i].volumeInfo.description ) 
                // console.log(document.querySelectorAll("h4 span")[0])
                // console.log(arr.items[i].volumeInfo.description)
                // console.log(document.querySelectorAll(".leftimg img")[i].src)
                // console.log( arr.items[i].volumeInfo.imageLinks.smallThumbnail)

            }



        }

    }
    booksJson.send()





}) // End The Event Listener




