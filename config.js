// config.js
const API_URL = "YOUR_GOOGLE_APPS_SCRIPT_DEPLOYMENT_URL_HERE";

// Ye check karega ki banda login hai ya nahi
function checkSession(requiredRole) {
    const userRole = sessionStorage.getItem('userRole');
    if (!userRole) {
        window.location.href = 'index.html'; // Login nahi hai to bhaga do
    } else if (requiredRole && userRole !== requiredRole) {
        alert("Access Denied! Aap is department ke nahi ho.");
        window.location.href = 'index.html';
    }
}
