const box1=document.querySelector("#box1")
const box2=document.querySelector("#box2")
const box3=document.querySelector("#box3")
const box4=document.querySelector("#box4")
const screen =document.querySelector("body")
box1.addEventListener("click",()=>{
      document.body.style.background="red";
})
box2.addEventListener("click",()=>{
      document.body.style.background="blueviolet";
})
box3.addEventListener("click",()=>{
      document.body.style.background="yellow";
})
box4.addEventListener("click",()=>{
      document.body.style.background="green";
})
