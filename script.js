// =========================================================
// KANISH PORTFOLIO JAVASCRIPT
// =========================================================

// Certificate fullscreen viewer
const certificateModal = document.getElementById("certificateModal");
const modalCertificate = document.getElementById("modalCertificate");
const closeButton = document.querySelector(".modal-close");

document.querySelectorAll(".certificate-photo img").forEach((img) => {
  img.addEventListener("click", () => {
    modalCertificate.src = img.src;
    modalCertificate.alt = img.alt;
    certificateModal.classList.add("show");
    certificateModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });
});

function closeCertificateModal() {
  certificateModal.classList.remove("show");
  certificateModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  setTimeout(() => {
    modalCertificate.src = "";
  }, 200);
}

closeButton.addEventListener("click", closeCertificateModal);

certificateModal.addEventListener("click", (event) => {
  if (event.target === certificateModal) {
    closeCertificateModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && certificateModal.classList.contains("show")) {
    closeCertificateModal();
  }
});

// Prevent placeholder project links from jumping to the top.
// Replace data-placeholder links with your real GitHub/demo URLs later.
document.querySelectorAll("[data-placeholder]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Replace this # with your real project link.");
  });
});
