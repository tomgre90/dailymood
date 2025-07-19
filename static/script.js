document.addEventListener("DOMContentLoaded", function () {
  const flashContainer = document.getElementById("flash-message");
  const message = flashContainer?.dataset.message;

  if (message === "submitted") {
    const popup = document.getElementById("popup");
    if (popup) {
      popup.style.display = "flex";
    }
  }
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
  window.location.href = "/";
}
