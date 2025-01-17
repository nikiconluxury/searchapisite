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
