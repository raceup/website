var offset = -70;

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY + offset);
});