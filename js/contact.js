document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll(".js-contact-form");

    forms.forEach((form) => {
        const status = form.querySelector(".form-status");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const data = Object.fromEntries(new FormData(form).entries());
            const errors = validateForm(data);

            if (errors.length) {
                setStatus(status, errors[0], "error");
                markInvalidField(form, errors[1]);
                return;
            }

            const savedForms = JSON.parse(localStorage.getItem("honeydewVetForms") || "[]");
            savedForms.push({
                type: form.dataset.formType || "contact",
                submittedAt: new Date().toISOString(),
                ...data
            });
            localStorage.setItem("honeydewVetForms", JSON.stringify(savedForms));

            setStatus(status, "Thanks, your details are ready. Your email app will open with the message filled in for Honeydew Vet.", "success");
            pulseForm(form);
            openEmailDraft(form, data);
            form.reset();
        });
    });
});

function validateForm(data) {
    if (!data.firstName || data.firstName.trim().length < 2) {
        return ["Please enter your first name.", "firstName"];
    }

    if (!data.lastName || data.lastName.trim().length < 2) {
        return ["Please enter your last name.", "lastName"];
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
        return ["Please enter a valid email address.", "email"];
    }

    if (!data.phone || !/^[+()\s0-9-]{9,20}$/.test(data.phone.trim())) {
        return ["Please enter a valid phone number.", "phone"];
    }

    if (!data.message || data.message.trim().length < 8) {
        return ["Please add a short message so the clinic can help properly.", "message"];
    }

    return [];
}

function markInvalidField(form, fieldName) {
    const field = form.querySelector(`[name="${fieldName}"]`);
    if (!field) {
        return;
    }

    field.focus();
    field.setAttribute("aria-invalid", "true");

    field.addEventListener("input", () => {
        field.removeAttribute("aria-invalid");
    }, { once: true });
}

function setStatus(status, message, type) {
    if (!status) {
        return;
    }

    status.textContent = message;
    status.className = `form-status is-visible ${type}`;
}

function pulseForm(form) {
    if (typeof window.gsap === "undefined") {
        return;
    }

    window.gsap.fromTo(form, {
        scale: 0.985
    }, {
        scale: 1,
        duration: 0.45,
        ease: "back.out(1.7)",
        clearProps: "transform"
    });
}

function openEmailDraft(form, data) {
    const subject = encodeURIComponent(form.dataset.subject || "Honeydew Vet website enquiry");
    const body = encodeURIComponent(formatBody(data));
    const recipient = form.dataset.recipient || "";

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
}

function formatBody(data) {
    const lines = [
        `Name: ${data.firstName || ""} ${data.lastName || ""}`,
        `Email: ${data.email || ""}`,
        `Phone: ${data.phone || ""}`
    ];

    if (data.petName) {
        lines.push(`Pet name: ${data.petName}`);
    }

    if (data.petType) {
        lines.push(`Pet type: ${data.petType}`);
    }

    if (data.service) {
        lines.push(`Service needed: ${data.service}`);
    }

    lines.push("", "Message:", data.message || "");

    return lines.join("\n");
}
