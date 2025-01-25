// Function to display alert
function showAlert(type, message) {
    const alertBox = document.getElementById("alertBox");
    const icon = alertBox.querySelector(".icon");
    const messageSpan = alertBox.querySelector(".message");
  
    // Set the message
    messageSpan.innerText = message;
  
    // Set the icon and alert style based on type
    if (type === "success") {
      icon.className = "icon fas fa-check-circle";
      alertBox.style.backgroundColor = "#d4edda";
      alertBox.style.color = "#155724";
    } else if (type === "error") {
      icon.className = "icon fas fa-exclamation-circle";
      alertBox.style.backgroundColor = "#f8d7da";
      alertBox.style.color = "#721c24";
    } else if (type === "info") {
      icon.className = "icon fas fa-info-circle";
      alertBox.style.backgroundColor = "#cce5ff";
      alertBox.style.color = "#004085";
    }
  
    // Show the alert
    alertBox.style.display = "flex";
  
    // Auto-hide the alert after 5 seconds
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 5000);
  }
  
  // Function to close alert
  function closeAlert() {
    const alertBox = document.getElementById("alertBox");
    alertBox.style.display = "none";
  }