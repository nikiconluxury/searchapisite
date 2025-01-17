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
