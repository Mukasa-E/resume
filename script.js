document.addEventListener("DOMContentLoaded", function () {
  // Responsive Navbar (Hamburger Menu)
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "&#9776;"; // Hamburger icon

  const navbar = document.querySelector(".navbar");
  navbar.parentNode.insertBefore(menuToggle, navbar);

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Form Validation
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      const email = document.querySelector("input[name='email']");
      const message = document.querySelector("textarea[name='message']");

      if (!email.value.includes("@") || message.value.trim() === "") {
        alert("Please enter a valid email and message.");
        event.preventDefault();
      }
    });
  }

  // Image Resizing for Responsiveness
  function adjustImageSize() {
    const homeImg = document.querySelector(".home-img img");
    if (homeImg) {
      if (window.innerWidth < 768) {
        homeImg.style.width = "250px"; // Smaller size for mobile
      } else {
        homeImg.style.width = "400px"; // Default size for larger screens
      }
    }
  }

  // Adjust image size on load and when resizing
  window.addEventListener("resize", adjustImageSize);
  adjustImageSize();
});
