var swiper = new Swiper(".s1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".s1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".s1 .swiper-button-next",
    prevEl: ".s1 .swiper-button-prev",
  },
});

var swiper = new Swiper(".s2", {
  slidesPerView: 5,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".brands_slider .swiper-button-next",
    prevEl: ".brands_slider .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".s3", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".arrows_side .swiper-button-next",
    prevEl: ".arrows_side .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".s4", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".arrows_block .swiper-button-next",
    prevEl: ".arrows_block .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".s5", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".sale_arrows .swiper-button-next",
    prevEl: ".sale_arrows .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

$(".dropdown-accordion").on("show.bs.dropdown", function (event) {
  var accordion = $(this).find($(this).data("accordion"));
  accordion.find(".panel-collapse.in").collapse("hide");
});

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var links = this.el.find(".link");

    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
    }
  };

  var accordion = new Accordion($("#accordion"), false);
});

$(document).on("click", ".filter_ .dropdown-menu", function (e) {
  e.stopPropagation();
});
var swiper = new Swiper(".mySwiper_1", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
var swiper2 = new Swiper(".mySwiper_2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

const favBlock = document.querySelectorAll(".fav_block");
favBlock.forEach(function (star) {
  star.addEventListener("click", function () {
    let borderedHeart = star.querySelector(".heart_one");
    let yellowHeart = star.querySelector(".heart_two");
    if (!borderedHeart) return;
    if (!yellowHeart) return;
    borderedHeart.classList.toggle("hide_");
    yellowHeart.classList.toggle("show_");
  });
});

function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
}

let burgerMenu = document.querySelector(".burger_menu");
let mobileNavigation = document.querySelector(".mobile_navigation");

burgerMenu.addEventListener("click", (e) => {
  burgerMenu.querySelector(".burger__").classList.toggle("burg_act");
  mobileNavigation.classList.toggle("nav_act");
  document.body.classList.toggle("overflow_hidden");
});
