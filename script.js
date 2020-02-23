let slides = $(".gallery-item");
let active = $(".active");
slides.hide();
active.show();

setInterval(slider, 2000);

function slider() {
  let active = $(".active"); // UPDATE VARIABLE!!!
  let next = active.next();

  if (next.length === 0) {
    next = slides.first();
  }

  active.fadeOut(1000);
  next.fadeIn(1000);
  active.removeClass("active");
  next.addClass("active");
}
