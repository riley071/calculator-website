let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
}

// swiper slider home
var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // swiper slider courses
  var swiper = new Swiper(".home-courses-slider", {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      loop:true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 4,
        },
      },
  });


 

  
    var swiper = new Swiper(".logo-slider", {
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
              0: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 4,
              },
            },
    });



    
  let displayValue = '0';

  function updateDisplay() {
      document.getElementById('result').value = displayValue;
  }
  
  function appendToDisplay(value) {
      if (displayValue === '0' && value !== '.') {
          displayValue = value;
      } else {
          displayValue += value;
      }
      updateDisplay();
  }
  
  function clearDisplay() {
      displayValue = '0';
      updateDisplay();
  }
  
  function calculateResult() {
      try {
          displayValue = eval(displayValue).toString();
      } catch (error) {
          displayValue = 'Error';
      }
      updateDisplay();
  }
  
 
  updateDisplay();
  
  
  
      
      document.getElementById("search-input").addEventListener("keyup", searchArticles);
  
   
          

