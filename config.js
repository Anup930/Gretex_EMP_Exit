// APPS SCRIPT URL YAHAN PASTE KARO
const API_URL = "https://script.google.com/macros/s/AKfycbxM4m4g4cgeKXSA2CF6uhJ42OJuYgdYr-JRFmqTbqH7_p51VAWrk9hoY6IWhE8gE1bMdQ/exec"; 

function checkSession(role) {
    const userRole = sessionStorage.getItem('userRole');
    if (!userRole) {
        window.location.href = 'index.html';
    } else if (role && userRole !== role) {
        alert("Access Denied! Wrong Department.");
        window.location.href = 'index.html';
    }
}
