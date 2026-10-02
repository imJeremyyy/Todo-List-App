const root = document.getElementById("root");

if (root) {
    fetch("hero.html")
        .then(response => response.text())
        .then(html => {
            root.innerHTML = html;
        });
}