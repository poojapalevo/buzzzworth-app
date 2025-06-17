

/* onScroll addClass to header */
// $(window).scroll(function () {
//   if ($(window).width() > 1000) {
//     if ($(window).scrollTop() >= 50) {
//       $('header').addClass('headerTop');
//     } else {
//       $('header').removeClass('headerTop');
//     }
//   } else {
//     if ($(window).scrollTop() >= 30) {
//       $('header').addClass('headerTop');
//     } else {
//       $('header').removeClass('headerTop');
//     }
//   }
// });

/* mobile menu */
$('.nav1Toggle').click(function () {
  $(this).toggleClass('open');
  $('nav').toggleClass('open-menu');
  if ($('.nav1Toggle').hasClass('open')) {
    $('html,body').css('overflow', 'hidden');
    $('.mobnav1Overlay').fadeIn();
  } else {
    $('html,body').css('overflow', 'auto')
    $('.mobnav1Overlay').hide();
  }
});
/*   $('.mobnav1Overlay').click(function () {
      $(this).hide();
      $('.nav1Toggle').removeClass('open');
      $('.leftnav1').removeClass('leftnav1Open');
      //$('html,body').css('overflow', 'auto')
  }); */
if ($(window).width() <= 1000) {
  /* Menu dropdown js */
  $('.menuDD').on('click', function () {
    if ($(this).parents('li').hasClass('menuDDActive')) {
      $(this).parents('li').removeClass('menuDDActive');
      $(this).parents('li').find('.submenu').slideUp();
    }
    else {
      $(this).parents('.nav1').find('li.menuDDActive').removeClass('menuDDActive');
      $(this).parents('li').addClass('menuDDActive');
      $(this).parents('.nav1').find('.submenu').slideUp();
      $(this).parents('li').find('.submenu').slideDown();
    }
  });

  /* Footer menu dropdown js */
  // $('.footerDD').on('click', function () {
  //   if ($(this).parents('.footernav1Item').hasClass('footerDDActive')) {
  //     $(this).parents('.footernav1Item').removeClass('footerDDActive');
  //     $(this).parents('.footernav1Item').find('ul').slideUp();
  //   }
  //   else {
  //     $(this).parents('.footernav1ListInner').find('.footernav1Item.footerDDActive').removeClass('footerDDActive');
  //     $(this).parents('.footernav1Item').addClass('footerDDActive');
  //     $(this).parents('.footernav1ListInner').find('.footernav1Item ul').slideUp();
  //     $(this).parents('.footernav1Item').find('ul').slideDown();
  //   }
  // });

}



      const productItem = document.querySelectorAll('.project-budget-list-item');
      const interestedInItems = document.querySelectorAll('.interestedIn-list-item');
      productItem.forEach(item => {
        item.addEventListener('click', () => {
          productItem.forEach(i => i.classList.remove('active'));

          item.classList.add('active');
        });
      });

      interestedInItems.forEach(item => {
        item.addEventListener('click', () => {
          item.classList.toggle('active');
        });
      });




// dropdown



// const selectedAll = document.querySelectorAll(".wrapper-dropdown");

// selectedAll.forEach((selected) => {
//   const optionsContainer = selected.children[2];
//   const optionsList = selected.querySelectorAll("div.wrapper-dropdown li");

//   selected.addEventListener("click", () => {
//     let arrow = selected.children[1];

//     if (selected.classList.contains("active")) {
//       handleDropdown(selected, arrow, false);
//     } else {
//       let currentActive = document.querySelector(".wrapper-dropdown.active");

//       if (currentActive) {
//         let anotherArrow = currentActive.children[1];
//         handleDropdown(currentActive, anotherArrow, false);
//       }

//       handleDropdown(selected, arrow, true);
//     }
//   });

//   // update the display of the dropdown
//   for (let o of optionsList) {
//     o.addEventListener("click", () => {
//       selected.querySelector(".selected-display").innerHTML = o.innerHTML;
//     });
//   }
// });

// // check if anything else ofther than the dropdown is clicked
// window.addEventListener("click", function (e) {
//   if (e.target.closest(".wrapper-dropdown") === null) {
//     closeAllDropdowns();
//   }
// });

// // close all the dropdowns
// function closeAllDropdowns() {
//   const selectedAll = document.querySelectorAll(".wrapper-dropdown");
//   selectedAll.forEach((selected) => {
//     const optionsContainer = selected.children[2];
//     let arrow = selected.children[1];

//     handleDropdown(selected, arrow, false);
//   });
// }

// // open all the dropdowns
// function handleDropdown(dropdown, arrow, open) {
//   if (open) {
//     arrow.classList.add("rotated");
//     dropdown.classList.add("active");
//   } else {
//     arrow.classList.remove("rotated");
//     dropdown.classList.remove("active");
//   }
// }




// top arrow

// const btnTop = document.querySelector('.btn-top');

// const displayButton = () => {
//   window.addEventListener('scroll', () => {
//     // console.log(window.scrollY);

//     if (window.scrollY > 100) {
//       btnTop.style.display = "flex";
//     } else {
//       btnTop.style.display = "none";
//     }
//   });
// };

// const scrollToTop = () => {
//   btnTop.addEventListener("click", () => {
//     window.scroll({
//       top: 0,
//       left: 0,
//       behavior: 'smooth'
//     });
//     // console.log(event);
//   });
// };

// displayButton();
// scrollToTop();









// $('.menuDD.htyup').hover(
//   function() { // Mouse enters the .menuDD element
//       $('.mainnav1').addClass('color-change');
//   }, 
//   function() { // Mouse leaves the .menuDD element
//       $('.mainnav1').removeClass('color-change');
//   }
// );



// $('.submenuList').hover(
//   function() { // Mouse enters the .menuDD element
//       $('.mainnav1').addClass('color-change');
//   }, 
//   function() { // Mouse leaves the .menuDD element
//       $('.mainnav1').removeClass('color-change');
//   }
// );





// scroll fade js



// const sections = document.querySelectorAll('section');
//   let current = 0;
//   let isScrolling = false;

//   function showSection(index) {
//     if (index < 0 || index >= sections.length || isScrolling) return;

//     isScrolling = true;

//     sections[current].classList.remove('sec-parent');
//     sections[index].classList.add('sec-parent');
//     current = index;

//     setTimeout(() => {
//       isScrolling = false;
//     }, 1000); // match transition duration
//   }

//   window.addEventListener('wheel', (e) => {
//     if (e.deltaY > 0) {
//       showSection(current + 1);
//     } else {
//       showSection(current - 1);
//     }
//   });

//   // Optional: scroll with arrow keys
//   window.addEventListener('keydown', (e) => {
//     if (e.key === 'ArrowDown') showSection(current + 1);
//     if (e.key === 'ArrowUp') showSection(current - 1);
//   });




// const sections = document.querySelectorAll('section');
// let current = 0;
// let isScrolling = false;

// function showSection(index) {
//   if (index < 0 || index >= sections.length || isScrolling) return;

//   isScrolling = true;

//   // Store previous section index
//   const prevIndex = current;

//   // Remove sec-parent from current section
//   sections[prevIndex].classList.remove('sec-parent');

//   // Add prev-parent to previous section
//   sections[prevIndex].classList.add('prev-parent');

//   // Add sec-parent to new section
//   sections[index].classList.add('sec-parent');

//   // Remove prev-parent after 1 second
//   setTimeout(() => {
//     sections[prevIndex].classList.remove('prev-parent');
//   }, 1000);

//   // Update current index
//   current = index;

//   // Re-enable scrolling after 1 second
//   setTimeout(() => {
//     isScrolling = false;
//   }, 1000);
// }

// window.addEventListener('wheel', (e) => {
//   if (e.deltaY > 0) {
//     showSection(current + 1);
//   } else {
//     showSection(current - 1);
//   }
// });

// window.addEventListener('keydown', (e) => {
//   if (e.key === 'ArrowDown') showSection(current + 1);
//   if (e.key === 'ArrowUp') showSection(current - 1);
// });









  var swiper = new Swiper(".temp-8-slider", {
    // slidesPerView: 3.999,
    // spaceBetween: 30,
    freeMode: true,
    // slidesOffsetBefore: 140,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 10,
        // freeMode: true,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
      },
      767: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      
        slidesOffsetBefore: 40,
        slidesOffsetAfter: 40,
      },
      1025: {
        slidesPerView: 4.99,
        spaceBetween: 10,
      
        slidesOffsetBefore: 100,
        slidesOffsetAfter: 100,
      },
      1280: {
        slidesPerView: 4.99,
        spaceBetween: 10,
      
        slidesOffsetBefore: 100,
        slidesOffsetAfter: 100,
      },
      1600: {
        slidesPerView: 4.9,
        spaceBetween: 10,
        slidesOffsetBefore: 120,
        slidesOffsetAfter: 120,
      }
    }


    
  });

































//     var swiper = new Swiper(".ourscroll-slider", {
//     slidesPerView: 3.1,
//     spaceBetween: 20,
//     freeMode: false,
//     pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     },
// });



var swiper5 = new Swiper(".ourscroll-slider", {

  freeMode: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 20,
      slidesOffsetBefore: 20,
    },
    1280: {
      slidesPerView: 3.3,
      spaceBetween: 20,
    },
    1650: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },

    1800: {
      slidesPerView: 3.1,
      spaceBetween: 20,
    },


  },


});










var swiper5 = new Swiper(".em-card-slider", {

  freeMode: false,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 20,
      slidesOffsetBefore: 0,
    },
       650: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      slidesOffsetBefore: 0,
    },
      992: {
      slidesPerView: 3.5,
      spaceBetween: 20,
      slidesOffsetBefore: 0,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1650: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    1800: {
      slidesPerView: 5,
      spaceBetween: 20,
    },


  },


});

var swiper = new Swiper(".musings-mob-slider", {
  slidesPerView: '1.1', // allows slide width to depend on content
  spaceBetween: 10,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
});


  var swiper = new Swiper(".letest-blogs-slider", {
      slidesPerView: 5,
        spaceBetween: 20,

      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 20,
          slidesOffsetBefore: 0,
        },
        650: {
          slidesPerView: 1.5,
          spaceBetween: 20,
          slidesOffsetBefore: 0,
        },
        992: {
          slidesPerView: 3.5,
          spaceBetween: 10,
          slidesOffsetBefore: 0,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
       
      }
    });

     var swiper = new Swiper(".aboutus-banner-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      direction: "vertical",
      loop:true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    });


        
    var swiper = new Swiper(".leadership-slider", {
      slidesPerView: 5,
        spaceBetween: 20,
        breakpoints: {
            0: {
              slidesPerView: 1.3,
              spaceBetween: 20,
              slidesOffsetBefore: 0,
            },
              650: {
              slidesPerView: 2.5,
              spaceBetween: 20,
              slidesOffsetBefore: 0,
            },
              992: {
              slidesPerView: 3.5,
              spaceBetween: 20,
              slidesOffsetBefore: 0,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            1650: {
              slidesPerView: 5,
              spaceBetween: 20,
            },

            1800: {
              slidesPerView: 5,
              spaceBetween: 20,
            },


          },

    });

    
    var swiper = new Swiper(".review-slider", {
      
      breakpoints: {
        0: {
          slidesPerView: 1.3,
          spaceBetween: 20,
          slidesOffsetBefore: 0,
        },
          650: {
          slidesPerView: 2.5,
          spaceBetween: 20,
          slidesOffsetBefore: 0,
        },
          992: {
          slidesPerView: 2.5,
          spaceBetween: 20,
          slidesOffsetBefore: 0,
        },
        1280: {
          slidesPerView: 4,
           spaceBetween: 20,
        },
        1650: {
          slidesPerView: 4,
          spaceBetween: 20,
        },

        1800: {
          slidesPerView:4,
          spaceBetween: 20,
        }

      },
    });


   window.addEventListener('scroll', function () {
  if (window.innerWidth <= 991) return; // Disable on mobile

  const header = document.querySelector('.buzz-common header');
  if (window.scrollY > 50) {
    header.classList.add('second-active');
  } else {
    header.classList.remove('second-active');
  }
});



  const ctaWrap = document.querySelector('.floating-CTA-wrap');
  const form = document.querySelector('.floating-form');
  const linkswrap = document.querySelector('.floating-links-wrap');
  const formlink = document.querySelector('.form-link');
  const className = 'show'; 
  
  
  ctaWrap.addEventListener('click', function(event) {
    event.stopPropagation(); 
     linkswrap.classList.toggle('links-show');
     ctaWrap.classList.toggle(className);
  });
  formlink.addEventListener('click', function(event) {
    event.stopPropagation(); 
     form.classList.toggle('show');
  });


  form.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  document.addEventListener('click', function() {
    form.classList.remove(className);
    ctaWrap.classList.remove(className);
  });


  //
  var swiper = new Swiper('.bw_banner_slider', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  grabCursor: true,
  loop: true,
  autoplay:true,
  autoplay: {
    delay: 100,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 3000, // adjust as needed for smoothness
});

window.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth <= 991) {
    const desktopHeadings = document.querySelectorAll('.heading-wrap h2');
    const mobileSlides = document.querySelectorAll('.bw_banner_mob .banner_slide_in');

    desktopHeadings.forEach((heading, index) => {
      const target = mobileSlides[index];
      if (heading && target) {
        target.innerHTML = heading.outerHTML;
      }
    });
  }
});

window.addEventListener('DOMContentLoaded', function () {
  const sourceHeadings = document.querySelectorAll('.temp2.buzz-brands-sec h2');
  const targetContainers = document.querySelectorAll('.bw_sec_heading');

  sourceHeadings.forEach((heading, index) => {
    const target = targetContainers[index];
    if (heading && target) {
      target.innerHTML = heading.outerHTML;
    }
  });
});



