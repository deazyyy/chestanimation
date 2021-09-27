function treasurebox(params, var1) {
  return `
    <div class="herobox">
      <div class="sky-gradient sky-gradient-${params.get('time')}"></div>
     <img src="images/cloud${params.get('weather')}.png" alt="" class="clouds" />
     <img src="images/dusk.png" alt="" class="dusk" />
      <img src="images/foreground.png" alt="" class="foreground" />
      <div class="maintreasurebx">
    <img src="images/chest_idle.gif" alt="" class="treasurebx" />
        <div class="sliderouter">
            <div class="slickslider">
                <div data-times="x32" data-name="Emerald Sword">
                  <img src="images/ic/ic1.png" alt="" />
                </div>
                <div data-times="x32" data-name="Emerald Sword1">
                  <img src="images/ic/ic2.png" alt="" />
                </div>
                <div data-times="x2" data-name="Emerald ">
                  <img src="images/ic/ic3.png" alt="" />
                </div>
                <div data-times="x12" data-name="Sword">
                  <img src="images/ic/ic4.png" alt="" />
                </div>
                <div data-times="x42" data-name="Emerald Sword2">
                  <img src="images/ic/ic5.png" alt="" />
                </div>
                <div data-times="x82" data-name="Emerald Sword4">
                  <img src="images/ic/ic6.png" alt="" />
                </div>
                <div data-times="x32" data-name="Emerald Sword6">
                  <img src="images/ic/ic7.png" alt="" />
                </div>
            </div>
            <div class="sparkle">
                x32
            </div>
            <div class="sparklename">
                Emerald Sword
            </div>
        </div>
    </div></div>`;
}

function startanimation() {
  $(".maintreasurebx").click(function () {
    $(".maintreasurebx").css("pointer-events", "none");
    $(".treasurebx").attr("src", "images/chest_opening.gif");
    setTimeout(() => {
      $(".sliderouter").addClass("sliderouteranimated");
      setTimeout(() => {
        $(".slickslider").slick("slickPlay");
      }, 600);
    }, 1200);
    runcarousel();
  });
  $(".slickslider").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".sparkle").html($(".slick-center").attr("data-times"));
      $(".sparklename").html($(".slick-center").attr("data-name"));
      console.log(slick);
    }
  );
}

function resetanimation() {
  $(".slickslider").slick("unslick");
  $(".maintreasurebx").css("pointer-events", "auto");
  $(".treasurebx").attr("src", "images/chest_idle.gif");
  $(".sliderouter").removeClass("sliderouteranimated");
  startanimation();
}
function runcarousel() {
  $(".slickslider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 2,
    autoplay: false,
    arrows: false,
    cssEase: "ease-out",
    easing: "linear",
    infinite: true,
    draggable: true,
    autoplaySpeed: 800,
  });
}

var styleEl = document.createElement("style");
styleEl.innerHTML = `


`;
document.head.appendChild(styleEl);
