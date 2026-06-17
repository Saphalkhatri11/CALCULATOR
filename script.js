let show = document.querySelector("#show")
const secondRectangle = document.querySelector("#second-rectangle")
const backspace = document.querySelector("#cancel");


backspace.addEventListener("click", function(event){
         show.textContent = show.textContent.slice(0, -1)
         event.stopPropagation();
})
const clear = document.querySelector("#clear")

const equal = document.getElementById("equal")
equal.addEventListener("click" , function(event){
        let value = eval(show.textContent)
        show.textContent = value.toString().slice(0, 13)
        console.log(typeof value)
        event.stopPropagation()
})

clear.addEventListener("click" , function(event){
        show.textContent =""
        event.stopPropagation();
})

secondRectangle.addEventListener("click" , function(event){
        let number = show.textContent.length
        number = show.textContent.length
        if(event.target === this){
                return false
        }else if(number < 13){
                show.textContent += event.target.dataset.id}
        
         

       
})



