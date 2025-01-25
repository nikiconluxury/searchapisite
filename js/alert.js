// Function to trigger an alert
function triggerAlert(status, message) {
  const alertBox = document.getElementById("alertBox");
  const icon = alertBox.querySelector(".icon");
  const messageSpan = alertBox.querySelector(".message");

  // Update the alert message and styling
  messageSpan.innerText = message;
  alertBox.className = `alert-box ${status}`; // Add the status class for styling
  
  // Update the icon based on the status
  if (status === "success") {
    icon.className = "icon fas fa-check-circle";
  } else if (status === "error") {
    icon.className = "icon fas fa-exclamation-circle";
  } else if (status === "info") {
    icon.className = "icon fas fa-info-circle";
  } else {
    icon.className = "icon fas fa-question-circle"; // Default icon for unknown status
  }

  // Show the alert
  alertBox.style.display = "flex";

  // Auto-hide the alert after 5 seconds
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 5000);
}

function closeAlert() {
  const alertBox = document.getElementById("alertBox");
  alertBox.style.display = "none";
}