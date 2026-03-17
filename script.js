document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Page reload hone se rokta hai

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Yahan data handle hota hai
    console.log("Username: " + user);
    console.log("Password: " + pass);

    alert("Login Successful! (Check console for data)");
    
    // Aap yahan se user ko redirect bhi kar sakte hain
    // window.location.href = "https://www.instagram.com";
});
