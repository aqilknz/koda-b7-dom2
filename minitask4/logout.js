const logout = document.getElementById('logout-btn');

logout.addEventListener('click', () => {
    localStorage.removeItem("user-data");
    window.location.href = "login.html";
});