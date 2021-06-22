const login=document.querySelector(".login")
console.log(login)
const backgrounddiv=document.querySelector(".backgrounddiv")
const logindiv=document.querySelector(".logindiv")
login.addEventListener("click",function(){
logindiv.classList.remove("display")
backgrounddiv.classList.remove("display")
})
const submit=document.querySelector(".submit")
submit.addEventListener("click",function(){
    logindiv.classList.add("display")
backgrounddiv.classList.add("display")
})
const close=document.querySelector(".x")
close.addEventListener("click",function(){
      logindiv.classList.add("display")
backgrounddiv.classList.add("display")
})

const background2=document.querySelector(".background2")
const creatpassword=document.querySelector(".creatpassword ")
let forget=document.querySelector(".forget")
console.log(forget)
console.log(background2)
console.log(creatpassword)


forget.addEventListener("click",function(){
     background2.classList.remove("display")
creatpassword.classList.remove("display")
})
const restpassword=document.querySelector(".RESET")
restpassword.addEventListener("click",function(){
        background2.classList.add("display")
creatpassword.classList.add("display")
})
const close2=document.querySelector(".y")
close2.addEventListener("click",function(){
         background2.classList.add("display")
creatpassword.classList.add("display")
})
const background3=document.querySelector(".background3")
const signup=document.querySelector(".signup")
const  sign=document.querySelector(".sign")
sign.addEventListener("click",function(){
 background3.classList.remove("display")
signup.classList.remove("display")
}) 
const submit3=document.querySelector(".submit3")
const close3=document.querySelector(".x2")
submit3.addEventListener("click",function(){
    background3.classList.add("display")
signup.classList.add("display")
})
close3.addEventListener("click",function(){
      background3.classList.add("display")
signup.classList.add("display")
})