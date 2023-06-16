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
