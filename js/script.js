
// header > nav
// ==================================================
$(function() {
  $(".nav-btn").on("click", function() {
    $(this).toggleClass("is_active");
    $(".header-nav").toggleClass("js-nav");
  });
});

// animation / wow.js
// ==================================================
$(function(){
  new WOW().init();
});

// animation / start-btn
// ==================================================
$(function () {
  $(".js-hover").hover(
    function () {
      $(".js-hover").addClass("tada");
    },
    function () {
      $(".js-hover").removeClass("tada");
    }
  );
});