function loadComponent(id, file, callback) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback();
        });
}

// Load header
loadComponent("header", "components/header.html");

// Load footer THEN run scripts safely
loadComponent("footer", "components/footer.html", () => {
    console.log("Footer loaded, scripts ready");
});