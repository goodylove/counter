let value = document.querySelector(".value");
let reset = document.querySelector(".Reset");
let Increase = document.querySelector(".Increase");
let decrease = document.querySelector(".Decrease");

let count = 0;
Increase.addEventListener("click",()=>{
   count = count +1
   value.textContent = count
   value.textContent.style.color = "red"
})
decrease.addEventListener("click",()=>{
   count = count -1
   value.textContent = count;
   value.textContent.style.color = "blue"

})
reset.addEventListener("click",()=>{
   value.textContent = 0
})