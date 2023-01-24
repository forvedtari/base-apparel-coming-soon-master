 const submit= document.getElementById('submit');
 const email = document.getElementById('email_input');
const  error_message1=document.getElementById("error_message1");
const  error_message2=document.getElementById("error_message2");
const success = document.getElementById("success_message")
const  error=document.getElementById("error")
 submit.onclick=function() {
    console.log(email.value)
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(email.value.match(/^([a-z0-9]|([a-z0-9])){2,30}[@]([a-z0-9]){2,15}[.][a-z0-9]{2,17}$/)){
        
        error_message1.style.display="none";
        error_message2.style.display="none";
        error.style.display="none"
        success.style.display='block'
        success.innerHTML=" You have successfully signed up for adventure with us!"
        
    }
    else if(email.value.length==0)
    {   success.style.display="none";
        error_message1.style.display="none";
        error_message2.style.display="inline";
        error.style.display="block"
        
    }
    else{
        success.style.display="none";
        error_message2.style.display="none"
        error_message1.style.display="inline";
        error.style.display="block"
        
    }
    
    
};