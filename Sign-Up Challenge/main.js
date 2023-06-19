const email = document.querySelector("input");
const btn = document.querySelector("button");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sign = document.querySelector(".sign-up-box");
const succed = document.querySelector(".succed-box");
const alert = document.querySelector("#err");
const email_msg = document.querySelector("#email");
const dis_btn = document.querySelector("#dismiss");


btn.addEventListener("click",()=>{
        if(emailRegex.test(email.value)){
            sign.style.display="none";
            succed.style.display="block";
            email_msg.textContent=email.value;
        }else{
            alert.style.visibility="visible";
            email.style.border="1px solid hsl(4, 100%, 67%)";
        }
})

dis_btn.addEventListener("click",()=>{
    sign.style.display="flex";
    succed.style.display="none";
    email.value="";
    alert.style.visibility="hidden";
    email.style.border="1px solid hsl(231, 7%, 60%)";
})






