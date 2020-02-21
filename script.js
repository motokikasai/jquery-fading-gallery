let slider = $(".gallery-item");
let active = $(".active");
slider.hide();
active.show();

setInterval(slideImg, 2000);

function slideImg() {
  let nextImg = active.next();
  console.log(nextImg.length);

  if (nextImg.length === 0) {
    nextImg = slider.first();
    // nextImg.addClass("active");
  }
  active.fadeOut(1000);
  nextImg.fadeIn(1000);
  active.removeClass("active");
  nextImg.addClass("active");
}
