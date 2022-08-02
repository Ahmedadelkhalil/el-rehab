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
