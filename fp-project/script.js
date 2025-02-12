let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let container = document.querySelector(".container");
let itens = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");
let list = container.querySelector(".list");

let active = 0;
let firstPosition = 0;
let lastPosition = itens.length - 1;

function setSlider() {
  let oldItem = container.querySelector(".list .item.active");
  oldItem.classList.remove("active");

  let oldDot = indicator.querySelector("ul li.active");
  oldDot.classList.remove("active");
  dots[active].classList.add("active");

  oldItem.classList.remove("active");

  oldDot.classList.remove("active");
  dots[active].classList.add("active");

  indicator.querySelector(".number").innerHTML = "0" + (active + 1);
}

nextBtn.addEventListener("click", () => {
  active = active + 1 > lastPosition ? 0 : active + 1;
  setSlider();
  itens[active].classList.add("active");

  list.style.setProperty("--calculation", 1);
});

prevBtn.addEventListener("click", () => {
  active = active - 1 < firstPosition ? 2 : active - 1;
  setSlider();
  itens[active].classList.add("active");

  list.style.setProperty("--calculation", -1);
});
