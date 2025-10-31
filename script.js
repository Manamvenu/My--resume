// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for internal anchor links
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Highlight active navigation link
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav ul li").forEach(li => {
    const a = li.querySelector("a");
    if (a.getAttribute("href") === currentPage) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });

  // Contact form validation
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const msg = form.message.value.trim();

      if (!name || !email || !subject || !msg) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
      }

      message.textContent = "Message sent successfully!";
      message.style.color = "green";
      form.reset();
    });
  }

  // Optional: jQuery animations (requires jQuery)
  if (window.jQuery) {
    $("nav a").hover(
      function () {
        $(this).animate({ paddingLeft: "20px" }, 200);
      },
      function () {
        $(this).animate({ paddingLeft: "16px" }, 200);
      }
    );
  }
});
