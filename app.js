var features=document.querySelectorAll(".feature");
var showImages=document.querySelector(".showImage");
var hero=document.querySelector(".heroPage");


features.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        showImages.style.display="block";
        var imageAddress=e.getAttribute("data-image");
        showImages.style.backgroundImage=`url(${imageAddress})`;
    });

    e.addEventListener("mouseleave",function(){
        showImages.style.display="none";
    });

   
})

// loading page

setTimeout(function(){
    hero.style.top="-100%"
}, 4200)


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true,
  });
