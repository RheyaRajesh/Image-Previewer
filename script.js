const current = document.querySelector("#current");
const imgs = document.querySelector(".sub-imgs");
const img = document.querySelectorAll(".sub-imgs img") // Each img tag from sub-imgs class
const opacity = 0.6;

imgs.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        // Reset opacity for all images
        img.forEach((imgElem) => {
            imgElem.style.opacity = 1;
        });

        // Change current image to the clicked image
        const clickedimageurl = event.target.src;
        current.src = clickedimageurl;
        current.classList.add("fadeIn");
        setTimeout(() => {
            current.classList.remove("fadeIn");
        }, 600);

        // Set opacity for the clicked image
        event.target.style.opacity = opacity;
    }
});
