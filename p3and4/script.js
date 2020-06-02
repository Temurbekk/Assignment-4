
const passwordSubmit = document.getElementById("submit");
const passwordValue = document.forms["myform"]["password"].value;

console.log(passwordSubmit)
passwordSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('clicked submit');
  const passwordValue = document.forms["myform"]["password"].value;
  if(checkPassword(passwordValue)===true){
     alert('OK!')
     myform.innerHTML = '<h1>Thank you for entering your info.</h1>';
   }
  else alert('Incorrect password!')
});

//const formDiv = document.getElementById('form');


function checkPassword(value){
  if(value=='12345678')
    return true;
  return false;
}
