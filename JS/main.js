// ==============================
//  Basic JS for portfolio site
// ==============================

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Simple contact form handling (frontend demo only)
const form = document.getElementById("contact-form");
const messageEl = document.getElementById("form-message");

if (form && messageEl) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      messageEl.textContent = "Please fill in all fields.";
      messageEl.style.color = "#ffb3b3"; // lys rød / feilmelding
      return;
    }

    messageEl.textContent =
      "Thank you! This demo form has been submitted (no real email is sent).";
    messageEl.style.color = "#d9a37d"; // samme tone som knappen
    form.reset();
  });
}
