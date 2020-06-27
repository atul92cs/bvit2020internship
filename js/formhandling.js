let form=document.querySelector('#register-form');

formValidation=(e)=>{
  e.preventDefault();
  let name=document.querySelector('#name');
  let email=document.querySelector('#email');
  if(email.value==="")
  {
    alert('no email provided');
  }
  else if (name.value==="") {
    alert('no name provided');
  }
  else {
    alert('user registred');
  }
}
form.addEventListener('submit',formValidation);
