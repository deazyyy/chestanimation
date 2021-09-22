

function treasurebox(var1){
    return `<div class="maintreasurebx">
    <img src="images/chest_idle.gif" alt="" class="treasurebx" />
        <div class="sliderouter">
            <div class="slickslider">
                <div><img src="images/ic/ic1.png" alt="" /></div>
                <div><img src="images/ic/ic2.png" alt="" /></div>
                <div><img src="images/ic/ic3.png" alt="" /></div>
                <div><img src="images/ic/ic4.png" alt="" /></div>
                <div><img src="images/ic/ic5.png" alt="" /></div>
                <div><img src="images/ic/ic6.png" alt="" /></div>
                <div><img src="images/ic/ic7.png" alt="" /></div>
            </div>
            <div class="sparkle">
                x32
            </div>
            <div class="sparklename">
                Emerald Sword
            </div>
        </div>
    </div>`
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
        }, 700);
        runcarousel();
      });
}

function resetanimation() {
    $('.slickslider').slick('unslick');
    $(".maintreasurebx").css("pointer-events", "auto");
    $(".treasurebx").attr("src", "images/chest_idle.gif");
    $(".sliderouter").removeClass("sliderouteranimated");
    startanimation()
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





var styleEl = document.createElement('style');
styleEl.innerHTML = `
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700");
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  font-family: "Google Sans";
}

/*Comman Css*/
a:hover,
a:focus,
a:active {
  text-decoration: none;
}
ol,
ul {
  margin: 0;
  padding: 0;
}
img {
  display: block;
}
body {
  font-size: 14px;
  font-weight: normal;
  font-family: "Google Sans";
  color: #fff;
  text-decoration: none;
  scroll-behavior: smooth;
  background: url(images/BG.png) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
.maintreasurebx {
  position: relative;
  max-width: 200px;
  margin: auto;
  top: 50vh;
  transform: translateY(-50%);
  cursor: pointer;
}
.sliderouter {
  position: absolute;
  max-width: 100%;
  overflow: hidden;
  transform: scale(0);
  margin-left: -8px;
  height: 130px;
}
.maintreasurebx img {
  width: 200px;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
.slickslider img {
  width: 16px;
  height: auto;
  transition-delay: 0.1s;
  transition: all 0.5s ease-in-out;
}

.sliderouteranimated {
  animation: mymove 600ms linear;
  animation-fill-mode: forwards;
}
.slick-center img{
  transform: scale(1.5);
  /* transform-origin: center; */
}
.slick-list, .slick-track{
  overflow: visible;
}
.slick-track{
  height: 60px;
}
.slick-slide{
  display: flex !important;
  align-items: center;
  /* justify-content: center; */
}
.sparklename{
    color: #fff;
    text-align: center;
    margin: -13px 0 0px;
    position: relative;
    left: 7px;
    top: 40px;
    font-weight: bold;
    font-size: 14px;
}
.sparkle{
    font-family: "Google Sans";
    color:#49cc2e;
    text-align: center;
    margin: -13px 0 0px;
    position: relative;
    left: 7px;
    top: -17px;
    font-weight: bold;
    font-size: 14px;
}
@keyframes mymove {
  0% {
    top: 75px;
    transform: scale(0);
  }
  100% {
    top: 44px;
    transform: scale(1);
  }
}

`;
document.head.appendChild(styleEl);