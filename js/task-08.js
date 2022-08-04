const form = document.querySelector('.login-form');

form.addEventListener('submit', handeleOnSubmitForm);

function handeleOnSubmitForm(event) {
  event.preventDefault();

  let { email, password } = event.target.elements;

  email = email.value;
  password = password.value;

  const userData = {
    email,
    password,
  };

    if(email === '' || password === '') {
      return alert('Please enter your details')
    }

    console.log(userData);

  event.target.reset();
}

