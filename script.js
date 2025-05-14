onload = () => {
    document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const letter = document.querySelector(".letter");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

let isFlipped = false;

openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";

    setTimeout(() => {
        if (wrapper.classList.contains("open")) {
            letter.classList.add("flipped");
            isFlipped = true;
        }
    }, 1000);
});

closeBtn.addEventListener("click", () => {
    if (isFlipped) {
        letter.classList.remove("flipped");
        isFlipped = false;

        setTimeout(() => {
            wrapper.classList.remove("open");
            closeBtn.style.display = "none";
            openBtn.style.display = "inline-block";
        }, 700);
    } else {
        wrapper.classList.remove("open");
        closeBtn.style.display = "none";
        openBtn.style.display = "inline-block";
    }
});