
function handleRegistration(event) {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);

    alert('Registration successful! You can now log in.');
    showLogin(); 
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const storedEmail = localStorage.getItem('registeredEmail');
    const storedPassword = localStorage.getItem('registeredPassword');

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html'; 
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn'); 
    window.location.href = 'login.html'; 
}

function showRegistration() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('auth-header').textContent = 'Register';
}

function showLogin() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('auth-header').textContent = 'Login';
}


function checkAuthentication() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'login.html'; 
    }
}

function logout() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    window.location.href = "login.html";
}

