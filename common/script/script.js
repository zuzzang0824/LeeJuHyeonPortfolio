AOS.init();

// swiper
new Swiper(".swiper", {
  autoplay: {
    delay: 2500,
  },
  slidesPerView: 1,
  spaceBetween: 50,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1025: { slidesPerView: 3 },
  },
});

// profile
$(".menuBtn").on("click", () => {
  $(".mobileGNBdrop").show(300, "swing");

  $(".menuBtn").hide();
  $(".menuClose").show();
});

$(".menuClose").on("click", () => {
  $(".mobileGNBdrop").hide(300, "swing");
  $(".menuBtn").show();
  $(".menuClose").hide();
});

// topBtn
$(window).scroll(function () {
  let top = $(window).scrollTop();
  if (top > 1500) {
    $(".topBtn").fadeIn();
  } else {
    $(".topBtn").fadeOut();
  }
});

// expandInfo
$(".expandArrow").click(function (event) {
  event.preventDefault();
  $(".expandInfo").slideDown(300, "swing");
});
$(".scrollClose").click(function () {
  $(".expandInfo").slideUp(300, "swing");
});

// mouse event
let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

const cursor = document.querySelector(".cursor");

document.body.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function mouseEffect() {
  requestAnimationFrame(mouseEffect);

  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;

  cursor.style.transform = `translate(${cursorX}px,
    ${cursorY}px)`;
}

mouseEffect();

// egg
$(window).scroll(function () {
  let scrT = $(window).scrollTop();
  if (scrT == $(document).height() - $(window).height()) {
    $(".easterEgg").addClass("on");
  } else {
    $(".easterEgg").removeClass("on");
  }
});
