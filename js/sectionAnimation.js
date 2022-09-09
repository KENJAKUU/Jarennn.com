var sectionAnimation = gsap.timeline()


sectionAnimation.to(".section_div_button_p" ,{y: 0, opacity: 0, duration: .3, ease: "expo.out"},1);
sectionAnimation.to(".original_h1",{y:0, duration: .3, ease: "expo.out"},1)
sectionAnimation.to(".original_h1",{scale: 0.7, duration: .3, ease: "expo.in",delay: .7})
sectionAnimation.to(".h1_clone_up",{y:0 ,scale:0.7, duration: 1, ease: "expo.out", opacity: 1, delay:.2},2)
sectionAnimation.to(".h1_clone_down",{y:0 , scale:0.7, duration: 1, ease: "expo.out", opacity:1, delay:.2},2)

sectionAnimation.pause();



function sectionAnimationHover() {
   
    sectionAnimation.play();
}
function sectionAnimationOnLeave() {
 
    sectionAnimation.reverse();

}


var sectionButton = document.getElementById("section_div_button");

sectionButton.addEventListener('mouseover', sectionAnimationHover);
sectionButton.addEventListener('mouseout', sectionAnimationOnLeave);
