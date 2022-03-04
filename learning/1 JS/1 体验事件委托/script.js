const btn = document.querySelector(".btns");

btn.addEventListener("click", (event) => {
    const ev = event || window.event;
    const target = ev.target || ev.srcElement;
    if (target.className.toLowerCase() === "btn") {
        console.log("son");
    }
});
