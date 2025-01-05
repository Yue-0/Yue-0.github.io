/* author: YueLin */

const photos = [
    {year: "2024", src: "img/2024.jpg"},
    {year: "2023", src: "img/2023.jpg"},
    {year: "2022", src: "img/2022.jpg"},
    {year: "2021", src: "img/2021.jpg"},
    {year: "2020", src: "img/2020.jpg"}
];

const image = document.getElementById("photo");
const container = document.getElementById("photos");

photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.year;

    const year = document.createElement("span");
    year.textContent = photo.year;

    const div = document.createElement("div");
    div.className = "photo";
    div.appendChild(img);
    div.appendChild(year);
    container.appendChild(div);
});

image.addEventListener("mouseover", () => {
    document.querySelectorAll(".photo").forEach(item => {
        item.style.opacity = "1";
        item.style.height = "160px";
    });
});

image.addEventListener("mouseout", () => {
    document.querySelectorAll(".photo").forEach(item => {
        item.style.opacity = "0";
        item.style.height = "0";
    });
});
