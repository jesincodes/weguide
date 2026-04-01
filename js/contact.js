/**
 * Sends the contact form via FormSubmit (see form action in index.html).
 * Submissions are emailed to the address in the form action.
 * First-time setup: FormSubmit will email you once to confirm the address.
 */
export function initContact(form, statusEl) {
  if (!form || !statusEl) return;

  const submitBtn = form.querySelector("#contactSubmitBtn");
  const action = form.getAttribute("action");
  if (!action || !action.includes("formsubmit.co")) {
    statusEl.textContent =
      "Form is not configured. Set the form action to your FormSubmit URL in index.html.";
    statusEl.style.color = "#8b4513";
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.textContent = "";
    statusEl.style.color = "";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }

    try {
      const res = await fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        statusEl.textContent = "Thank you. Your message has been sent — we will reply soon.";
        statusEl.style.color = "#1f7a2a";
        form.reset();
      } else {
        statusEl.textContent =
          data.message || "Something went wrong. Please try again or contact us on WhatsApp.";
        statusEl.style.color = "#a61e1e";
      }
    } catch {
      statusEl.textContent =
        "Could not send right now. Check your connection or message us on WhatsApp.";
      statusEl.style.color = "#a61e1e";
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }
    }
  });
}
