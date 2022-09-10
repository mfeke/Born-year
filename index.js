
let button = document.getElementById("btn-1")

button.addEventListener("click", function ageCal(){
   // bornYear= document.getElementById("bornYear").value
   // curYear = document.getElementById("currYear").value
   userInput = document.getElementById("celsius").value
   sum = userInput *1.8+32
   
   if(sum){
       alert(sum +" Fahrenheit")
   }
   
})
// let btn = document.getElementById("btn-2")

// btn.addEventListener("click", function ageCal(){
  
//   userInput = document.getElementById("fahrenheit").value
//   sum = userInput *1.8+32
 
  
//   if(sum){
//       alert(sum +" Fahrenheit")
//   }


// })
// let btn = document.getElementById("btn-1")

// function tempConv(){
   
//    userInput = document.getElementById("celsius").value
//    res =document.getElementById("res").value
//    res.innerHTML = userInput *1.8+32
   
// }
