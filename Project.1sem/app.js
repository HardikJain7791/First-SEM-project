document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("form").forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const message = document.createElement("p");
            message.className = "form-message";
            message.setAttribute("role", "status");
            message.textContent = form.closest(".login-container")
                ? "Demo login accepted. Connect a backend to authenticate users."
                : form.closest(".registration-container")
                    ? "Registration saved for this demo. We will contact you soon."
                    : "Account details captured for this demo. Welcome to GNAN!";

            form.querySelector(".form-message")?.remove();
            form.append(message);
        });
    });

    const passwordInput = document.querySelector('.show-password')?.previousElementSibling;
    const passwordToggle = document.querySelector('.show-password');

    passwordToggle?.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        passwordToggle.textContent = isPassword ? "◉" : "○";
        passwordToggle.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
    });
});
