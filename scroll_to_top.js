const goTopBtn = document.querySelector(".btn__top");


window.addEventListener("scroll", trackScroll);

goTopBtn.addEventListener("click", goTop);

function trackScroll() {

  const scrolled = window.pageYOffset;

  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {

    goTopBtn.classList.add("btn__top__show");
  } else {

    goTopBtn.classList.remove("btn__top__show");
  }
}

function goTop() {

  if (window.pageYOffset > 0) {
  
    window.scrollBy(0, -10); //другий аргумент - це швидкість скролу
    setTimeout(goTop, 0); 
  }
}