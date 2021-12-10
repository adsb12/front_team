$(function() {function upnav () {
    document.addEventListener('scroll', onScroll, { passive: true });
   let last = 0;
    const gap = 1;
    const nav = document.querySelector('nav');
    const headerheight = document.querySelector('header').clientHeight;
  function onScroll(){
    
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
    $(".sub_mn").stop().animate({ height: "270px" }, 200);
    $(".sub_nav").stop().animate({ height: "270px" }, 200);
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

  var lastScroll = 0;
$(window).scroll(function(event){
     var scroll = $(this).scrollTop();
     if (scroll > 1000){
     //이벤트를 적용시킬 스크롤 높이
          $("nav").addClass("on");
          $("nav a").addClass("on1");
    }
     else {
          $("nav").removeClass("on");
          $("nav a").removeClass("on1");
     }
     lastScroll = scroll;
    });


  $(".family_sub").hide();
  $("#f_s li").click(function(e) {
      e.preventDefault();
      $(this).find("ul").stop().slideToggle();
  });

  $(window).fadeThis(); 

  $("html").easeScroll({
    frameRate: 60,
    animationTime: 1500,
    stepSize: 120,
    pulseAlgorithm: !0,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: !0,
    arrowScroll: 50,
  });

  // $(function() {
  //   let d_width = 0;
  //   let d_height = 0;
  //   function tmp() {
  //     let con_width = $(window).outerWidth() + $('.box').length;
  //     $('.space_img').css({width: con_width, height: '969px'});

  //     let w_width = $(window).width();
  //     let w_height = $(window).height();
  //     d_width = con_width - w_width;
  //   }
  //   tmp();

  //   let array = [];
  //   for(let i = 0; i < $('.box').length; i++) {
  //     array[i] = $('.box').eq(i).offset().left;
  //   }
  //   let chk = true;
  //   $('.space_img').on('mousewheel DOMMouseScroll', function() {
  //     if(chk) {
  //       chk = false; 
  //       setTimeout(function(){ chk = true; }, 300) 

  //       // 휠 방향 감지(아래: -120, 위: 120) 
  //       let w_delta = event.wheelDelta / 120; 

  //       // 휠 아래로 
  //       if(w_delta < 0 && $(this).next().length > 0) 
  //       { $('.space_img').animate({ left: -array[$(this).index()+1] }, 500) } 

  //       // 휠 위로 
  //       else if(w_delta > 0 && $(this).prev().length > 0) 
  //       { $('.space_img').animate({ left: -array[$(this).index()-1] }, 500) } } });

  //       //브라우저를 resize했을시를 대비해 박스의 크기는 다시 구해준다. 
  //       $(window).resize(function(){ for(let i=0; i<$('.box').length; i++) {
  //         array[i] = $('.box').eq(i).offset().left } 
  //         tmp(); 
  //     });
  //   });
  // });
//   $(document).ready(function(){ 
//     let d_width = 0; 
//     // 브라우저 가로 
//     let d_height = 0; 
//     // 문서 전체의 높이 
//     function tmp() { 
//       // container의 가로사이즈(화면가로 * box 개수) 
//       let con_width = $('#container4').outerWidth() + $('.box').length; 
//       $('.space_img').css({ width: con_width, height: '969px'}); 
//       // css에서 해도 상관없다. 
//       $('.box').css({ width: con_width / $('.box').length, height: '969px', float: 'left' }); 
//       // box들을 위로 끌어올렸기 때문에 body의 높이는 100vh나 마찬가지인 상태. 
//       // 그래서 억지로 전체 box들의 세로크기 만큼 body에 줘야한다.(스크롤 내리기위함) 
//       // 이때 높이는 가로영역의 비율과 동일하게 준다. (이후 리미트를 주게 됨으로써 비율의 값이 정해진다.) 
//       $('body').css({ height: '969px' }); 
//       let w_width = $('#container4').width(); 
//       // 화면의 가로값 
//       let w_height = $('#container4').height() 
//       // 화면의 세로값 
//       // 스크롤 될때의 리미트 
//       d_width = con_width - w_width; 
//       // 전체 가로값 - 현재 화면의 가로값 
//       d_height = $('body').height() - w_height;
//       // 전체 세로값 - 현재 화면의 세로값 
//     } 
//     tmp(); 
//     let array = []; 
//     for(let i=0; i<$('.box').length; i++) { 
//       array[i] = $('.box img').eq(i).offset().left 
//     } 
//     let chk = true; 
//     $('#container4').on('mousewheel DOMMouseScroll', function(){ 
//       if(chk) { 
//         // 휠 일정시간동안 막기 
//         chk = false; 
//         setTimeout(function(){ 
//           chk = true; 
//         }, 500) 
//         // 휠 방향 감지(아래: -120, 위: 120) 
//         let w_delta = event.wheelDelta / 120; 
//         // 휠 아래로 
//         if(w_delta < 0 && $(this).next().length > 0) { 
//           $('.space_img').animate({ left: -array[$('.box img').index()+2] }, 500) } 
//           // 휠 위로 
//           else if(w_delta > 0 && $(this).prev().length > 0) { 
//             $('.space_img').animate({ left: -array[$('.box img').index()-2] }, 500) } } }); 
//             //브라우저를 resize했을시를 대비해 박스의 크기는 다시 구해준다. 
//             $('#container4').resize(function(){ 
//               for(let i=0; i<$('.box').length; i++) { 
//                 array[i] = $('.box').eq(i).offset().left 
//               } tmp(); 
//             }) 
//           });

//   // $('#container4').Scrolling($('#container4').offset().top,($(".space_img").height()));


// $('.space_img').on('scroll touchmove mousewheel', function(e) {
//    e.preventDefault();
//    e.stopPropagation();
//    return false;
// });
  // 3100
  $(window).load(function() {
    $('#load').fadeOut(4000);
});
});
