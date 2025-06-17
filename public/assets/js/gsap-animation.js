gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-banner", 
    start: " top center",     
    end: "center top",        
    scrub: true, 
    onEnter: () => {
      // Add class when scrolling down into section
      document.querySelector(".banner-logo").classList.add("fixed");
    },
    onLeaveBack: () => {
      // Remove class when scrolling back up
      document.querySelector(".banner-logo").classList.remove("fixed");
    }            
  }
});

  tl.to(".nav-left", {
    duration: 0.5,
    ease: "power1.out",
    x: 0
  })
  .to(".nav-right", {
    duration: 0.5,
    ease: "power1.out",
    x: 0
  }, 0);

// Timeline animation setup
const tl2 = gsap.timeline({
scrollTrigger: {
  trigger: ".sticker-sec",            
  start: "top bottom",         
  end: "bottom center",         
  scrub: true,             
  // markers: true              
}
});

// Animate stickers
tl2.to(".st1", { top: "35%", left: "18%" }, 'stickers')
   .to(".st2", { top: "10%", right: "27%" }, 'stickers')
   .to(".st3", { left: "36%", top: "73%" }, 'stickers')
   .to(".st4", { top: "10%", left: "3%" }, 'stickers')
   .to(".st5", { bottom: "35%", right: "15%" }, 'stickers')
   .to(".st6", { bottom: "55%", right: "8%" }, 'stickers')


let lastScroll = 0;
ScrollTrigger.create({
  trigger: ".sticker-sec",
  start: "bottom bottom",
  end: "+=100%",   // or any value based on how long you want it pinned
  pin: true,
  scrub: true,
  // markers: true,
  onUpdate: (self) => {
    let currentScroll = self.scroll();
    
    // Only trigger AFTER sticker-sec is fully pinned
    if (self.progress > 0.5) {  // you can adjust 0.05 for small tolerance
        
      if (currentScroll > lastScroll) {
        // Scrolling down
        document.querySelector('.sticker-title-wrap').classList.add('text-fadeup');
      } else {
        // Scrolling up
        document.querySelector('.sticker-title-wrap').classList.remove('text-fadeup');
      }
      
    }

    lastScroll = currentScroll;
  }
});

tl2.to(".sticker-title-wrap", {
  scale: 0.3,
  opacity: 0,
  duration: 0.5,
  ease: "power2.inOut",
  onStart: () => {
    // Make sure text-fadeup is applied at the right scroll time
    document.querySelector('.sticker-title-wrap').classList.add('text-fadeup');
  }
}, "+=0.8");


// Animate new heading zoom-in
tl2.to(".brands-wrap", {
  scale: 1,
  opacity: 1,
  duration: 0.5,
  ease: "power2.inOut"
}, "<");

tl2.to(".sticker ", {
  scale: 0.3,
  opacity:0,                  
  }, "<");

tl2.to(".brand-logo ", {
  scale: 1,
  opacity: 1,
  x: 0,
  y: 0              
  }, "<");



