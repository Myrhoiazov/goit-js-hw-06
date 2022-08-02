const form = document.querySelector('.login-form');

form.addEventListener('submit', handeleOnSubmitForm);

function handeleOnSubmitForm(event) {
  event.preventDefault();

  let { email, password } = event.target.elements;

  //   console.log(obj);

  email = email.value;
  password = password.value;

  const userData = {
    email,
    password,
  };

    if(email === '' || password === '') {
      alert('Please enter your details')
    }

  event.target.reset();
}
