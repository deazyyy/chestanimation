function treasurebox(params, var1) {
  let a = params.get('items')
  var b = a.split(",").map(function(item) {
      return parseInt(item, 10);
  });
  var c = a.split("[").map(function(item) {
      return parseInt(item, 10);
  });
  var resarr=c.concat(b);
  var itemList=[];
  for(var i =0;i<resarr.length;i++){
    if(resarr[i]){
      itemList.push(resarr[i])
    }
  }

  let itemHtml="";
  for(var i =0;i<itemList.length;i++){
    itemHtml+=`
      <div data-times="${itemDB[itemList[i]-1].multiplier}" data-name="${itemDB[itemList[i]-1].name}">
        <img src="images/ic/${itemDB[itemList[i]-1].imgName}.png" alt="" />
      </div>
    `
  }

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
                ${itemHtml}
            </div>
            <div class="sparkle">
                
                <div class="content"><span> x32</span></div>
            </div>
            <div class="sparklename">
               <div class="content"><span> Emerald</span></div>
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
      $(".sparkle .content").hide();
      $(".sparkle .content").empty().append($(".slick-center").attr("data-times")).fadeIn(300);
      $(".sparklename .content").hide();
      $(".sparklename .content").empty().append($(".slick-center").attr("data-name")).fadeIn(300);
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
