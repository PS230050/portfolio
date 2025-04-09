document.addEventListener("DOMContentLoaded", function() {
    let popUp = document.getElementById("cookiePopup");

    // Accept Cookie (but doesn't store it permanently for testing)
    document.getElementById("acceptCookie").addEventListener("click", () => {
        popUp.classList.add("hide");
        popUp.classList.remove("show");
    });

    // Deny Cookie (but doesn't store it permanently for testing)
    document.getElementById("denyCookie").addEventListener("click", () => {
        popUp.classList.add("hide");
        popUp.classList.remove("show");
    });

    // Show Cookie Banner Always (ignores previous cookies)
    popUp.classList.add("show");
    popUp.classList.remove("hide");
});