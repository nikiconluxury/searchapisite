const API_BASE_URL = "https://solid-doodle-wrrrg7gqj56x259pj-8000.app.github.dev"; // Update this if your server is running elsewhere

/**
 * Logs the user in and stores the access token in localStorage.
 * @param {Event} event - The form submission event.
 */
async function loginUser(event) {
  event.preventDefault(); // Prevent form submission

  // Capture form data
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  try {
    // Make API call to authenticate user
    const response = await fetch(`${API_BASE_URL}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: username,
        password: password,
      }),
    });

    // Handle response
    if (!response.ok) {
      throw new Error("Invalid username or password.");
    }

    const data = await response.json();

    // Store token and redirect to dashboard
    localStorage.setItem("access_token", data.access_token);
    showAlert("success", "Login successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);
  } catch (error) {
    console.error("Login error:", error.message);
    showAlert("error", error.message);
  }
}
// Automatically set the "active" class for the current page
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link"); // Select all nav links

  navLinks.forEach((link) => {
    // Check if the link's href matches the current page's URL
    if (link.href === window.location.href) {
      link.classList.add("active"); // Add the active class
    } else {
      link.classList.remove("active"); // Remove the active class from others
    }
  });
});

/**
 * Displays an alert box with the specified status and message.
 * @param {string} status - Alert type (success, error, info).
 * @param {string} message - Message to display in the alert box.
 */
function showAlert(status, message) {
  const alertBox = document.getElementById("alertBox");
  const icon = alertBox.querySelector(".icon");
  const messageSpan = alertBox.querySelector(".message");

  // Update alert content
  messageSpan.innerText = message;
  alertBox.className = `alert-box ${status}`;

  // Set icon based on status
  icon.className =
    status === "success"
      ? "icon fas fa-check-circle"
      : "icon fas fa-exclamation-circle";

  // Show alert
  alertBox.style.display = "flex";

  // Auto-hide alert after 5 seconds
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 5000);
}

/**
 * Closes the alert box manually.
 */
function closeAlert() {
  document.getElementById("alertBox").style.display = "none";
}

/**
 * Checks if the user is already logged in and redirects if necessary.
 */
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("access_token");

  if (token) {
    // Validate token with the server
    fetch(`${API_BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid token.");
        }

        return response.json();
      })
      .then(() => {
        // If already logged in and on login page, redirect to dashboard
        if (window.location.pathname.includes("login.html")) {
          window.location.href = "dashboard.html";
        }
      })
      .catch(() => {
        // If token is invalid, remove it
        localStorage.removeItem("access_token");
      });
  }
});
// Logout Function
function logout() {
  try {
    // Trigger alert to notify the user
    triggerAlert("info", "Logging out...");
    
    // Clear the access token and redirect
    setTimeout(() => {
      localStorage.removeItem("access_token"); // Clear the stored token
      window.location.href = "login.html"; // Redirect to the login page
    }, 2000); // Delay to show alert
  } catch (error) {
    // Handle errors during logout
    triggerAlert("error", "Logout failed. Please try again.");
    console.error("Logout Error:", error.message);
  }
}
