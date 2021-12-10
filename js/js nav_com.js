$(function() {function upnav () {
    document.addEventListener('scroll', onScroll, { passive: true });
   let last = 0;
    const gap = 1;
    const nav = document.querySelector('nav');
    const headerheight = document.querySelector('header').clientHeight;
  function onScroll()
  {
    
    const scrollposition = pageYOffset;
  
    if (Math.abs(last - scrollposition) <= gap) return;
    else if (scrollposition > last || scrollposition<= headerheight)
    {
      nav.classList.remove("downdown");
    }
    else if (scrollposition<last)
    { 
        nav.classList.add("downdown");  
    }
  
    last = scrollposition;
  }
  }
  upnav();

  $(".sub_mn").css({ height: "0px" });
  $(".sub_nav").css({ height: "0px" });

  $("nav").mouseenter(function () {
    $(".sub_mn").stop().animate({ height: "200px" }, 200);
    $(".sub_nav").stop().animate({ height: "200px" }, 200);
    $(".sub_mn > li > a").css({"color": "#fff;"});
    $(".member li a").css({"color": "#000;"});
  });

  $(".sub_mn").mouseleave(function () {
    $(".sub_mn").stop().animate({ height: "0px" }, 200);
    $(".sub_nav").stop().animate({ height: "0px" }, 200);
    $(".sub_mn > li > a").css({"color": "#000;"});
    $(".member li a").css({"color": "#fff;"});
  });

  $(document).mouseleave(function () {
    $(".sub_mn").stop().animate({ height: "0px" }, 200);
    $(".sub_nav").stop().animate({ height: "0px" }, 200);
  });

  $(".family_sub").hide();
  $("#f_s li").click(function(e) {
      e.preventDefault();
      $(this).find("ul").stop().slideToggle();
  });
});