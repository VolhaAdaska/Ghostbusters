$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const tab = $(".tab");

  tab.on("click", function(){
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });

  mMenuBtn.on("click", function(){
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });
  var mySwiper = new Swiper ('.swiper-container', {
    spaceBetween: 25,
    slidesPerView: 4,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
        }
      }
    }
  });
});