// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
  
  // Add click handlers for buttons
  const primaryBtn = document.querySelector(".primary-btn");
  if (primaryBtn) {
    primaryBtn.addEventListener("click", () => {
      // Add your sign-up or get started logic here
      console.log("Get Started clicked");
    });
  }
  
  const secondaryBtn = document.querySelector(".secondary-btn");
  if (secondaryBtn) {
    secondaryBtn.addEventListener("click", () => {
      // Add your documentation navigation logic here
      console.log("View Documentation clicked");
    });
  }


  const API_URL = "https://solid-doodle-wrrrg7gqj56x259pj-8000.app.github.dev";
  // Toggle Functions
  function toggleToLogin() {
    document.getElementById("login-section").style.display = "block";
    document.getElementById("register-section").style.display = "none";
    clearMessages();
  }

  function toggleToRegister() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("register-section").style.display = "block";
    clearMessages();
  }

  // Clear Error Messages
  function clearMessages() {
    document.getElementById("login-error").innerText = "";
    document.getElementById("register-error").innerText = "";
    document.getElementById("login-error").style.display = "none";
    document.getElementById("register-error").style.display = "none";
  }

  // Register User
  async function registerUser() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert("Registration successful! Please log in.");
        toggleToLogin();
      } else {
        const data = await response.json();
        document.getElementById("register-error").innerText = data.detail || "An error occurred.";
        document.getElementById("register-error").style.display = "block";
      }
    } catch (error) {
      document.getElementById("register-error").innerText = "An error occurred. Please try again.";
      document.getElementById("register-error").style.display = "block";
    }
  }

  // Login User
  async function loginUser() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    try {
      const response = await fetch(`${API_URL}/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("access_token", data.access_token);
        showAlert("success", "Login successful! Welcome back.");
        window.location.href = "dashboard.html"; // Redirect to dashboard
      } else {
        const data = await response.json();
        showAlert("error", "Invalid username or password. Please try again.");
      }
    } catch (error) {
      showAlert("error", "Invalid username or password. Please try again.");
    }
  }


// JavaScript for Accordion Functionality with Fixed Height and Single Open Item
document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  // Function to set all accordion-content to the same height
  const setAccordionFixedHeight = () => {
    const accordionContents = document.querySelectorAll('.accordion-content');
    let maxHeight = 0;
    
    // Reset heights to auto to calculate natural height
    accordionContents.forEach(content => {
      content.style.maxHeight = 'none';
      content.style.height = 'auto';
      if (content.scrollHeight > maxHeight) {
        maxHeight = content.scrollHeight;
      }
    });
    
    // Set fixed max-height based on the tallest content
    accordionContents.forEach(content => {
      content.style.maxHeight = '0';
      content.dataset.height = maxHeight; // Store the max height
    });
  };
  
setAccordionFixedHeight();
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(setAccordionFixedHeight, 200);
});

  // Adjust fixed height on window resize

  window.addEventListener('resize', setAccordionFixedHeight);
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const accordionContent = header.nextElementSibling;
      const isActive = accordionItem.classList.contains('active');
      
      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = '0';
        item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });
      
      if (!isActive) {
        // Open the clicked accordion item
        accordionItem.classList.add('active');
        accordionContent.style.maxHeight = accordionContent.dataset.height + 'px';
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
const toggleButton = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
  toggleButton.setAttribute('aria-expanded', !isExpanded);
  navLinks.classList.toggle('active');
});
