let isUserValid=false;
let isEmailValid=false;
let isPasswordValid=false;
let isConfirmValid=false;


const user1 = document.getElementById("user");
const p1 = document.getElementById("userV");
user1.addEventListener("blur",function(){
 const user_V1 = user1.value;
 const regex =  /^[a-zA-Z0-9]{3,15}$/;
 userV.style.color = 'red';
 if(regex.test(user_V1)){
     console.log("its right");  
       isUserValid=true;
    }else{
     p1.textContent = 'username must be 3-15 characters (letters & numbers only)';
    console.log(p1.textContent);
      isUserValid=false;
 }
   checkFormValidity();
    console.log(user_V1);
});
   


const Email1 = document.getElementById("email");
const p2 = document.getElementById("emailV");
Email1.addEventListener("blur",function(){
    const email_v2 = Email1.value;
    const regex = /^[a-z0-9._%-]+@[a-z]+\.[a-z]{2,}$/;
     emailV.style.color = 'red';
    if(regex.test(email_v2)){
        console.log("right email format");
         isEmailValid=true;
       
    }else{
         p2.textContent = 'invalid eamil address';
        console.log(p2.textContent);
         isEmailValid=false;
    }
     checkFormValidity();
    console.log(email_v2);
});

const Password1 = document.getElementById("pwd");
const p3 = document.getElementById("pwdV");
Password1.addEventListener("blur",function(){
    var pwd_v3 = Password1.value;
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,}$/;
      pwdV.style.color = 'red';
    if(regex.test(pwd_v3)){
        console.log("password entered");
        isPasswordValid=true;
    }else{
         p3.textContent = 'password must be 8+ chars, including uppercase, lowercase & number';
        console.log(p3.textContent);
        isPasswordValid=false;
    }
     checkFormValidity();
    console.log(pwd_v3);
});

const conpwd1 = document.getElementById("confirm-pwd");
const p4 = document.getElementById("conpwdV");
conpwd1.addEventListener("blur",function(){
    const Password1 = document.getElementById("pwd");
     var pwd_v3 = Password1.value;
    const con_pwd_v4 = conpwd1.value;
     conpwdV.style.color = 'red';
    if(pwd_v3 === con_pwd_v4){      
        console.log("perfect");
         isConfirmValid=true;
    }else{
          p4.textContent = 'Password and confirm password do not match';
        console.log(p4.textContent);
         isConfirmValid=false;
    }
     checkFormValidity();
    console.log(con_pwd_v4);
});




function checkFormValidity(){
    const submit_btn=document.getElementById("submitbtn");
    if(isUserValid && isEmailValid && isPasswordValid && isConfirmValid){
        submit_btn.disabled=false;
    }else{
        submit_btn.disabled=true;
    }
}