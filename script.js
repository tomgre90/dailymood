const form = document.getElementById('sheetdb-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch("https://sheetdb.io/api/v1/0h0s4tq528dgw", {
        method: "POST",
        body: new FormData(form),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        form.style.display = "none";
        document.getElementById("thank-you-message").style.display = "block";
    })
    .catch(error => console.error("Error:", error));
});
