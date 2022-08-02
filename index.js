let smallPhotosBlack = document.querySelectorAll(".sec-black img");
let smallPhotosRed = document.querySelectorAll(".sec-red img");
let activeBlack = document.querySelector(".active-black");
let activeRed = document.querySelector(".active-red");

smallPhotosBlack.forEach((img) => {
  img.addEventListener("click", (e) => {
    smallPhotosBlack.forEach((img) => {
      img.classList.remove("choosen");
      e.target.classList.add("choosen");
      activeBlack.src = e.target.src;
    });
  });
});

smallPhotosRed.forEach((img) => {
  img.addEventListener("click", (e) => {
    smallPhotosRed.forEach((img) => {
      img.classList.remove("choosen");
      e.target.classList.add("choosen");
      activeRed.src = e.target.src;
    });
  });
});

let scrollTop = document.querySelector(".scroll-to-top-btn");

window.onscroll = () => {
  if (window.scrollY >= 600) {
    scrollTop.classList.remove("hidden");
  } else {
    scrollTop.classList.add("hidden");
  }
};

scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

let lin = document.querySelectorAll("ul li a");

lin.forEach((a) => {
  a.addEventListener("click", (q) => {
    lin.forEach((a) => {
      a.classList.remove("active");
      q.target.classList.add("active");
    });
  });
});
