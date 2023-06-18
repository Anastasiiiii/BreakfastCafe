const btnSubmit = document.getElementById('btnSubmit'); 

btnSubmit.addEventListener('click', postData);

function postData() {
    const name = document.getElementById('InputName').value;
    const email = document.getElementById('InputEmail').value;
    const password = document.getElementById('InputPassword').value;

    const userData = {name, email, password};

    fetch('/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            console.log("Sign in is done");
        } else {
            console.log('Sign in error');
        }
    })
    .catch(err => {
        console.error('Error: ' + err);
    })
};

  const btnLogin = document.getElementById('btnLogin');
  btnLogin.addEventListener('click', checkData);

function checkData() {
    const emailInput = document.getElementById('InputEmailForCheck');
    const passwordInput = document.getElementById('InputPasswordForCheck');

    const userData = {emailInput, passwordInput};

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
          window.location.href = '/logedPage';
          console.log("Data is checked")
        } else {
          alert('Incorrect email or password');
        }
    })
    .catch(err => {
        console.error('Request error:', err);
    })
  }
  
