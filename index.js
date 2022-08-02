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

let gear = document.querySelector(".fa-gear");
let optBox = document.querySelector(".option-box");

gear.onclick = function () {
  gear.classList.toggle("fa-spin");
  optBox.classList.toggle("show");
};
// ........................................................................

let textOne = document.querySelector(".first-top-text");
let textTwo = document.querySelector(".middle-text");
let textThree = document.querySelector(".bottom-text");
let textFour = document.querySelector(".get-touch");
let textFive = document.querySelector(".text-video");
let textSix = document.querySelector(".fa-angles-up");

let colorChange = document.querySelectorAll(".avai-col li");

if (window.localStorage.getItem("color")) {
  colorChange.forEach((li) => {
    li.addEventListener("click", (C) => {
      li.classList.remove("active-col-font");
      C.target.classList.add("active-col-font");
    });
    textOne.style.color = window.localStorage.getItem("color");
    textTwo.style.color = window.localStorage.getItem("color");
    textThree.style.color = window.localStorage.getItem("color");
    textFour.style.color = window.localStorage.getItem("color");
    textFive.style.color = window.localStorage.getItem("color");
    textSix.style.color = window.localStorage.getItem("color");
  });
}

colorChange.forEach((li) => {
  li.addEventListener("click", (C) => {
    colorChange.forEach((li) => {
      li.classList.remove("active-col-font");
      li.classList.remove("ball-above");
      C.target.classList.add("active-col-font");
      C.target.classList.add("ball-above");
      window.localStorage.setItem("color", C.target.dataset.color);
      textOne.style.color = C.target.dataset.color;
      textTwo.style.color = C.target.dataset.color;
      textThree.style.color = C.target.dataset.color;
      textFour.style.color = C.target.dataset.color;
      textFive.style.color = C.target.dataset.color;
      textSix.style.color = C.target.dataset.color;
    });
  });
});
