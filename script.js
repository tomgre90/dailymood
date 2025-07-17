var form = document.getElementById('sheetdb-form');
var thankYouMessage = document.getElementById('thank-you-message');

form.addEventListener("submit", e => {
    e.preventDefault();
    
    fetch(form.action, {
        method : "POST",
        body: new FormData(form),
    }).then(
        response => {
            if (response.ok) {
                form.style.display = 'none';
                thankYouMessage.style.display = 'block';
            } else {
                alert("There was a problem with your submission. Please try again.");
            }
    }).catch(() => {
        alert("There was a problem with your submission. Please try again.");
    });
});