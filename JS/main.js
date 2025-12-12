// ==============================
//  Basic JS for portfolio site
// ==============================

// Simple contact form handling (frontend demo only)
const form = document.getElementById("contact-form");
const messageEl = document.getElementById("form-message");

if (form && messageEl) {
  // Make message area focusable for accessibility
  messageEl.setAttribute("tabindex", "-1");

  const isValidEmail = (value) => {
    // Simple, readable email check (good enough for frontend demo)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const setStatus = (text, isError = false) => {
    messageEl.textContent = text;
    messageEl.style.color = isError ? "#ffb3b3" : "#d9a37d";
    messageEl.focus(); // helps keyboard/screen reader users notice feedback
  };

  const markInvalid = (field, invalid) => {
    field.setAttribute("aria-invalid", invalid ? "true" : "false");
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameField = form.elements.namedItem("name");
    const emailField = form.elements.namedItem("email");
    const messageField = form.elements.namedItem("message");

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();

    // reset aria-invalid
    markInvalid(nameField, false);
    markInvalid(emailField, false);
    markInvalid(messageField, false);

    if (!name || !email || !message) {
      if (!name) markInvalid(nameField, true);
      if (!email) markInvalid(emailField, true);
      if (!message) markInvalid(messageField, true);

      setStatus("Please fill in all fields.", true);
      return;
    }

    if (!isValidEmail(email)) {
      markInvalid(emailField, true);
      setStatus("Please enter a valid email address.", true);
      return;
    }

    setStatus("Thank you! This demo form has been submitted (no real email is sent).");
    form.reset();
  });
}
