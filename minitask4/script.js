const user = "aqil";
const pass = "naminamu123";

document.addEventListener("DOMContentLoaded", () => {
    const userData = localStorage.getItem("user-data");
    if (userData) {
        window.location.href = "home.html"; 
    }
});

const loginForm = document.getElementById("form-container");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmErr = document.getElementById('confirmError');


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    if (password.length < 8) {
        confirmErr.innerText = "Password must be at least 8 characters.";
        confirmErr.style.display = "block";
        confirmErr.classList.remove('hidden');
        return;   
    }
    if (username === user && password === pass) {
        const dataToSave = {
            username: username,
            password: password,
        };
        localStorage.setItem("user-data", JSON.stringify(dataToSave));
        window.location.href = "home.html";
    } else {
        confirmErr.innerText = "Username or Password is incorrect!";
    }
});