// function count nums 
let nums = document.querySelectorAll(".count-sec .container .row .middle-count .nums .num"); 
console.log(nums);
function startCount(el) {
  let goal = el.dataset.goal;
  console.log(goal);
  let count = setInterval(() => {
    el.textContent++;
    
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000/goal);
}
  nums.forEach((num) => startCount(num));

  // swiper function 
  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });




