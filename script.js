// Cache the DOM
var button = document.getElementById("button")

var nume = document.getElementById("nume")

var prenume = document.getElementById("prenume")

var img = document.querySelector("#rounded-img")

var asteptari = document.getElementById("asteptari")

var body = document.querySelector("body")


// Add eventListeners
button.addEventListener("click", altaViata) 



// Define functions

function altaViata(){

            nume.innerHTML = "Popesco"
            prenume.innerHTML = "Cristian"
            asteptari.innerHTML = "<ul><li>BMW M4</li><li>Hacker depanator PC</li><li>sa am si eu un leu in buzunar</li><li>Sa bat si eu dragonu pe Minecraft</li></ul>"



            img.setAttribute("src","Imagini/lion.jpg")
            img.style.opacity = "50%"
            img.style.width = "420px"
            img.style.height = "200px"
            
}
