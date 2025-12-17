// APPS SCRIPT URL YAHAN PASTE KARO
const API_URL = "YOUR_DEPLOYED_WEB_APP_URL_HERE"; 

function checkSession(role) {
    const userRole = sessionStorage.getItem('userRole');
    if (!userRole) {
        window.location.href = 'index.html';
    } else if (role && userRole !== role) {
        alert("Access Denied! Wrong Department.");
        window.location.href = 'index.html';
    }
}
