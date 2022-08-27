const next = document.getElementById('next');
const error__icon = document.getElementById('error-icon')
const error__text = document.getElementById('error')
next.addEventListener('click',(e)=>{
    var email = document.getElementById('email').value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.length<1){
        error__text.innerHTML = "Input can't be empty"
        error__text.style.display = "block"
    }
    else if(!email.match(mailformat)){
        error_text.innerHTML = "Enter a valid email"
        error__icon.style.display = "block"
        error__text.style.display = "block"
    }
    else{
        error__icon.style.display = "none"
        error__text.style.display = 'none'
    }
})

