
let button = document.getElementById("btn")

button.addEventListener("click", function tempConv(){
   userInput = document.getElementById("user").value

   document.getElementById("res").innerHTML = userInput *1.8+32

    
})
