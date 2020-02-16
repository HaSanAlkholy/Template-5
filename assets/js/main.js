$('.services-body').slick({
    dots: false,
    infinite: true,
    speed: 700,
    autoplaySpeed: 2500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

//   navbar color change
      
window.addEventListener("scroll",navbarChange);
function navbarChange (){
    if (window.pageYOffset > 750 ) {
      document.querySelector("#mainNav").classList.add("nav-active");
    }else{
        document.querySelector("#mainNav").classList.remove("nav-active");
    }
}

// gallery image overlay

document.querySelector("body").addEventListener("click",imageOverlay);
document.querySelector(".img-overlay").addEventListener("click",imageOverlayDel);

function imageOverlay (e){
    if (e.target.className == "img") {  
        document.querySelector('.img-overlay img').src = e.target.src;
        $(".img-overlay").fadeIn();
        document.querySelector('.img-overlay').style.display="flex";
    }
}
function imageOverlayDel (e){
        $(".img-overlay").fadeOut();
    
}