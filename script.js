document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const msg = document.getElementById("message");

  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Correct way to block suspicious characters
    const suspicious = /['"=;!]/; // removed invalid '--'

    if (!username || !password) {
      msg.textContent = "⚠️ Please fill in both fields.";
      msg.className = "error";
      return;
    }

    if (suspicious.test(username) || suspicious.test(password)) {
      msg.textContent = "❌ Suspicious characters detected!";
      msg.className = "error";
      return;
    }

    if (username === "student" && password === "password123") {
      msg.textContent = "✅ Login successful! Redirecting to YouTube...";
      msg.className = "success";

      // Redirect to YouTube after 1 second
      setTimeout(() => {
        window.location.href = "https://www.youtube.com";
      }, 1000);

    } else {
      msg.textContent = "❌ Invalid username or password.";
      msg.className = "error";
    }
  });
});
