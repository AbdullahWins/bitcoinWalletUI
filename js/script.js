function satoshiLogin () {
    const username = document.getElementById('username-field').value;
    const password = document.getElementById('password-field').value;
    if (username === 'satoshi' && password === 'bitcoin') {
        window.location.href = 'bitcoin/bitcoin.html';
    }
    else {
        alert('Sorry, Only Satoshi can login');
    }
}

document.getElementById('btn-login').addEventListener('click' , satoshiLogin);