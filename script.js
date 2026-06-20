let show = document.querySelector("#show")
const secondRectangle = document.querySelector("#second-rectangle")
const backspace = document.querySelector("#cancel");
const clear = document.querySelector("#clear")
const equal = document.getElementById("equal")
const percent = document.getElementById("percentage")
const modulo = document.getElementById("divide")
const multiple = document.getElementById("multiple")
const subtract = document.getElementById("subtract")
const add = document.getElementById("add")
const history = document.getElementById("history")
const historyPanel = document.getElementById("history-rectangle")
const arrow = document.querySelector(".Arrow")

//creating a backspace.
backspace.addEventListener("click", function(event){
         show.textContent = show.textContent.slice(0, -1)
         event.stopPropagation();
})

//creating a equal button.
equal.addEventListener("click" , function(event){
        let value = eval(show.textContent)
        if(show.textContent === ""){
                show.textContent = "Error"
                
        }
        else{
                show.textContent = value.toString().slice(0, 13)}

        event.stopPropagation()
})
 //avoiding multiple modulo
percent.addEventListener("click" , function(event) {
        event.stopPropagation();
        if(show.textContent.at(-1) === "%")
                return
        else if (show.textContent.at(-1) === "+"){
                return}
        else if (show.textContent.at(-1) === "-"){
                return}       
        else if (show.textContent.at(-1) === "*"){
                return}
        else{
                show.textContent += "%"
        }
})

//avoiding multiple divide:
divide.addEventListener("click" , function(event) {
        event.stopPropagation();
        if(show.textContent.at(-1) === "/")
                return
        else if (show.textContent.at(-1) === "+"){
                return}
        else if (show.textContent.at(-1) === "-"){
                return}       
        else if (show.textContent.at(-1) === "*"){
                return}
        else{
                show.textContent += "/"
        }
})

//avoiding multple multiplication:
multiple.addEventListener("click" , function(event) {
        event.stopPropagation();
        if(show.textContent.at(-1) === "*")
                return
        else if (show.textContent.at(-1) === "+"){
                return}
        else if (show.textContent.at(-1) === "-"){
                return}       
        else if (show.textContent.at(-1) === "%"){
                return}
        else{
                show.textContent += "*"
        }
})

//avoiding multiple addition:
add.addEventListener("click" , function(event) {
        event.stopPropagation();
        if(show.textContent.at(-1) === "+")
                return
        else if (show.textContent.at(-1) === "%"){
                return}
        else if (show.textContent.at(-1) === "-"){
                return}       
        else if (show.textContent.at(-1) === "*"){
                return}
        else{
                show.textContent += "+"
        }
})
//avoiding multiple subtraction:
subtract.addEventListener("click" , function(event) {
        event.stopPropagation();
        if(show.textContent.at(-1) === "-")
                return
        else if (show.textContent.at(-1) === "+"){
                return}
        else if (show.textContent.at(-1) === "-"){
                return}       
        else if (show.textContent.at(-1) === ""){
                return}
        else{
                show.textContent += "-"
        }
})


//Creating a all clear button:
clear.addEventListener("click" , function(event){
        show.textContent =""
        event.stopPropagation();
})
//Creating main text display.
secondRectangle.addEventListener("click" , function(event){
        let number = show.textContent.length
        number = show.textContent.length
        if(number <= 6){
                show.style.fontSize = "52px"
        }else if(number <= 15){
                show.style.fontSize = "30px"
        }else if(number <= 22){
                show.style.fontSize = "20px"
        }
        if(event.target === this){
                return false
        }else if(number < 25){
                show.textContent += event.target.dataset.id}
        
         

       
})

//opening history pannel:
history.addEventListener("click" , function(event){
        historyPanel.style.display = "block"

})

//creating a back button:
arrow.addEventListener("click" , function(event){
        historyPanel.style.display = "none"
        
})



