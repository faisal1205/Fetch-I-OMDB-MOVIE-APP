




document.querySelector("#search").addEventListener("click",movieFunction)

function movieFunction()
{
    const container = document.getElementById("container")

    let name = document.getElementById("name").value 

    const url = `http://www.omdbapi.com/?t=${name}&apikey=41ab18cf`
    // console.log(url)

    fetch(url)
    .then(function(res)
   {
    return res.json()
   })
   .then(function(res){
   // console.log(res)
    appendMovie(res)
    })
    .catch(function(err)
    {
    //console.log(err)
    appendMovie(err)
    })
   
}
    function appendMovie(data)
    {
        container.innerHTML = null
     
       if(data.Error === 'Movie not found!' || data.Response === undefined || data.Title == undefined)
        {
           var errImage = document.createElement("img")
          
           errImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQ-XLGTAj_Odjjdw2zaSYNUGwG6DHNN-wQg&usqp=CAU"
           console.log(errImage)
           document.getElementById("container").append(errImage)
        }
           
        else {

            let Div = document.createElement("div")
            let title = document.createElement("p")
           title.innerText =    `Name of Movie :  ${data.Title}` 
            let year= document.createElement("p")
            year.innerText = `Year of Release : ${ data.Year}`
            let Rating= document.createElement("p")
            Rating.innerText = `IMDB Rating :  ${data.imdbRating}` 
            
            let image = document.createElement("img")
            image.src = data.Poster
          

            if(data.imdbRating > 8.5)
            {
                var btndiv = document.createElement("div")
                console.log(Rating)
                let button = document.createElement("button")
                button.innerText = "Recommended to Watch"
                btndiv.append(button)
                Div.append(title,year,Rating,image,btndiv)
            }

              else{
                Div.append(title,year,Rating,image)
                 }
            
            //console.log(Div)
            document.getElementById("container").append(Div)
        }
        
       
        
    }



