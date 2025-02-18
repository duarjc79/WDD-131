document.addEventListener("DOMContentLoaded", function () {
    const themeSelector = document.getElementById("theme-selector");
    const body = document.body;
    const logo = document.getElementById("logo");

    function changeTheme() {
        if (themeSelector.value === "dark") {
            body.classList.add("dark");
            logo.src = "white-logo.png";
        } else {
            body.classList.remove("dark");
            logo.src = "blue-logo.png";
        }
    }

    themeSelector.addEventListener("change", changeTheme);
});