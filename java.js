
///slide trang web

    var slides = document.querySelectorAll('.slide');
        var btns = document.querySelectorAll('.btn');
        let currentSlide = 1;
    
        // Javascript for image slider manual navigation
        var manualNav = function(manual){
          slides.forEach((slide) => {
            slide.classList.remove('active');
    
            btns.forEach((btn) => {
              btn.classList.remove('active');
            });
          });
    
          slides[manual].classList.add('active');
          btns[manual].classList.add('active');
        }
    
        btns.forEach((btn, i) => {
          btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
          });
        });
    
        // Javascript for image slider autoplay navigation
        var repeat = function(activeClass){
          let active = document.getElementsByClassName('active');
          let i = 1;
    
          var repeater = () => {
            setTimeout(function(){
              [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
              });
    
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;
    
            if(slides.length == i){
              i = 0;
            }
            if(i >= slides.length){
              return;
            }
            repeater();
          }, 3000);
          }
          repeater();
        }
        repeat();


///navbar menu mobile

var toggleNav = document.getElementById("menu-bar-icon");
const mNav = document.querySelector(".mobile_nav");
const mParent = document.querySelectorAll(".Menu_item");


toggleNav.addEventListener("click", function () {

  mNav.classList.toggle("open");
  toggleNav.classList.toggle("open");
})


for (let i = 0; i < mParent.length; i++) {
    mParent[i].addEventListener("click", function () {
      let ddStatus = mParent[i].childNodes[2].style.display;
  
      if (ddStatus === "block") {
        mParent[i].childNodes[2].style.display = "none";
      } else {
        closeAll(mParent);
        mParent[i].childNodes[2].style.display = "block";
      }
    })
  }

  function closeAll(arg) {
      for (let i = 0; i < arg.length; i++) {
        arg[i].childNodes[2].style.display = "none";
      }
    }