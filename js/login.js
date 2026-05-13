document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {

            document.getElementById("successMessage").style.display = "block";

            setTimeout(function () {
                window.location.href = "index.html"; // sudah benar
            }, 1200);

        } else {
            alert("Username dan password wajib diisi!");
        }
    });

});
