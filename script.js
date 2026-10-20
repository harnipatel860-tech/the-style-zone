// ===== THE STYLE ZONE =====

const appointmentForm = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");
const whatsappButton = document.getElementById("whatsappButton");

// Actual salon number milne ke baad yahan add karenge.
// Country code ke saath, bina + ya spaces ke.
const whatsappNumber = "+917861902952";

// Footer mein current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// WhatsApp appointment form
appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !service || !date) {
        formMessage.textContent =
            "Please fill in all required fields.";
        return;
    }

    const selectedDate = new Date(date + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        formMessage.textContent =
            "Please choose today or a future date.";
        return;
    }

    // Salon number add hone tak form data safe rakho.
    if (!whatsappNumber) {
        formMessage.textContent =
            "Your details are ready. The salon's WhatsApp number will be added soon.";
        return;
    }

    const whatsappMessage =
        "Hello The Style Zone! ✨\n\n" +
        "I would like to request an appointment.\n\n" +
        "Name: " + name + "\n" +
        "Customer Phone: " + phone + "\n" +
        "Service: " + service + "\n" +
        "Preferred Date: " + date + "\n" +
        "Additional Details: " + (message || "None") + "\n\n" +
        "Thank you!";

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    formMessage.textContent =
        "WhatsApp opened. Please send your appointment request.";

    appointmentForm.reset();
});

// Floating WhatsApp button
whatsappButton.addEventListener("click", function (event) {
    if (!whatsappNumber) {
        event.preventDefault();
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
        formMessage.textContent =
            "The salon's WhatsApp number will be added soon.";
        return;
    }

    whatsappButton.href = "https://wa.me/" + whatsappNumber;
});

if (whatsappNumber) {
    whatsappButton.href = "https://wa.me/" + whatsappNumber;
}