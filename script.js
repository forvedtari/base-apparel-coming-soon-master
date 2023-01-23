 const submit= document.getElementById('submit');
 const email = document.getElementById('email_input');
 let error_message1=document.getElementById("error_message1");
const error_message2=document.getElementById("error_message2");
 let error=document.getElementById("error")
 submit.onclick=function() {
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(email.value== " ")
    {
        error_message1.style.display="none";
        error_message2.style.display="inline";
        error.style.display="block"
        return true;
    }
    else if(email.value.match(mailformat)){
        alert(" You've entered a valid Email")
        error_message1.style.display="none";
        error_message2.style.display="none";
        error.style.display="none"

    }
    else{
        error_message2.style.display="none"
        error_message1.style.display="inline";
        error.style.display="block"
        return false;
    }
    
    
    console.log(email.value)};