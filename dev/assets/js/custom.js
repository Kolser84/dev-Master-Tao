const btnBurger = document.querySelector('.hamburger')
btnBurger.addEventListener('click', () => btnBurger.classList.toggle('is-active')) 

const swiper = new Swiper('.swiper-banner', {
  // Optional parameters
  loop: true,
  spaceBetween: 24,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  // If we need pagination

  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },


  

   // Responsive breakpoints
   breakpoints: {
    992: {
        
    }
  }



 
});
  
   