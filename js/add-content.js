const button = document.querySelector("nav button")
const aside = document.querySelector("body > aside")
button.addEventListener("click",function(){
    aside.classList.toggle("is-shown")
})
