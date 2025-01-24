/* author: YueLin */

const links = [
    "201video",
    "icra22video"
];
const gif = document.getElementById("gif");
const overlay = document.getElementById("overlay");

links.forEach(link => {
    const a = document.getElementById(link);
    a.addEventListener("click", event => {
        event.preventDefault();
        gif.src = a.getAttribute("href");
        overlay.style.display = "flex";
    });
});

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    gif.src = "";
});
