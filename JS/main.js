// Basic JS for portfolio site

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Simple contact form handling (frontend demo)
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
      messageEl.style.color = "var(--color-error)";
      return;
    }

    // Enkel “demo”-melding – ingen ekte sending
    messageEl.textContent = "Thank you! This demo form has been submitted.";
    messageEl.style.color = "var(--color-accent-soft)";
    form.reset();
  });
}
