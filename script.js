
// Contact Form
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

document.getElementById('nav-toggle').addEventListener('click', () => {
document.getElementById('nav-links').classList.toggle('open');
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    msg.textContent = "Please fill out required fields.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Message sent successfully!";
  msg.style.color = "lightgreen";
  form.reset();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

