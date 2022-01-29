const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

// add the clase of show-nav

open.addEventListener("click", () => container.classList.add("show-nav"));

// remove nav
close.addEventListener("click", () => container.classList.remove("show-nav"));
