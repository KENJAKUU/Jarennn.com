gsap.registerPlugin(ScrollTrigger);

var disableScroll = document.getElementById("body_scroll");


var afterLoad = gsap.timeline({delay: 4})
afterLoad.from(".fade_up_main_heading",{y:50, opacity: 0, duration: 1, ease: "power4"});
afterLoad.from(".sub_header_heading",{y:-50, opacity: 0, duration: 1, ease: "power4", }, 1);

var loading = gsap.timeline({delay: 3})
loading.to(".loading_screen",{opacity:0, display: "none", duration: 0.5});


var openModal = gsap.timeline()

openModal.from(".beta_warning",{opacity: 0, duration: .2, ease: "power4", display: 'none', delay: 1})
openModal.from(".modal",{scale:0, opacity: 0, duration: .2, ease: "power4, "});
openModal.pause()

setTimeout(playModal, 10000);
setTimeout(scrollEnable, 4000);


function playModal() {
    openModal.resume()
    disableScroll.style.overflowY ='hidden';
}



function scrollEnable(){
    disableScroll.style.overflowY ='visible';
}
function scrollDisable(){
    disableScroll.style.overflowY ='hidden';
}




window.addEventListener('load', (event) => {
    loading.resume();
    afterLoad.resume();
     loader.style.display = 'none';

});



gsap.to(".background_fade", {
    scrollTrigger: { 
    trigger: ".contents",
    start: "top bottom",
    end: "center 100px",
  
    scrub: true,
    ease: "power3"
  },
    opacity: .94
  });



gsap.to(".main_header_heading_1" , {
    scrollTrigger: {
        trigger: ".page_content",
        start: "center center" ,
        end: "bottom center",
        scrub: true,
        ease: "power2",
    },
    x: 200,
 

 
})

gsap.to(".main_header_heading_2" , {
    scrollTrigger: {
        trigger: ".page_content",
        start: "center center" ,
        end: "bottom center",
        scrub: true,
        ease: "power2",
    },
    x: -200,
    

    
})








// Inspired by: 
// https://codepen.io/sgorneau/pen/mWEddP
// as described in the above codepen, if we set the value `x` to something like -100% it'll go too fast
// so I took the function to calculate the rate and applied to my code

let marquee = document.querySelectorAll('.clipped-text');

// added event listener because it doesn't get the right width
addEventListener("load", function () {
 marquee.forEach(el => {
  // set a default rate, the higher the value, the faster it is
  let rate = 200;
  // get the width of the element
  let distance = el.clientWidth;
  // get the margin-right of the element
  let style = window.getComputedStyle(el);
  let marginRight = parseInt(style.marginRight) || 0;
  // get the total width of the element
  let totalDistance = distance + marginRight;
  // get the duration of the animation 
  // for a better explanation, see the quoted codepen in the first comment
  let time = totalDistance / rate;
  // get the parent of the element
  let container = el.parentElement;

  gsap.to(container, time, {
   repeat: -1,
   x: '-'+totalDistance,
   ease: Linear.easeNone,
  });
 });
});


