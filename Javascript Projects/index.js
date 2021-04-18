const ad =document.querySelector(".add")
const sub =document.querySelector(".sub")
const reset=document.querySelector(".reset")
const screen =document.querySelector(".screen")
const body= document.querySelector("body")

let num=0;


ad.addEventListener("click",()=>{
    num++
    screen.innerHTML=num
    if(num>0){
        screen.style.color="blue"
    }
  
    }
    )
    
 
sub.addEventListener("click",()=>{
    num--
    screen.innerHTML=num
    
    if(num<0){
        screen.style.color="red"
    }
    
    }
    )
    
 reset.addEventListener("click", ()=>{
    num=0
    screen.innerHTML=num
    if(num.innerHTML="0"){
        screen.style.color="yellow"
    }
 })