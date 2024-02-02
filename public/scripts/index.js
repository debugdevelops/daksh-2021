const navBar = document.querySelector('.nav_container');
window.onscroll = () => {
    if (window.scrollY >= 100) {
        navBar.classList.add('nav-bg');
    }
    if (window.scrollY <= 100) {
        navBar.classList.remove('nav-bg');
    }
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');

let menu = false;
hamburger.addEventListener('click', () => {
    if(!menu){
        hamburger.classList.toggle("open");
        navLinks.style.display = "flex";
        navLinks.classList.toggle("nav__links__open");
        navBar.classList.add("nav-bg");
        menu = true;
    }else{
        hamburger.classList.toggle("open");
        navLinks.style.display = "none";
        navLinks.classList.toggle("nav__links__open");
        if (window.scrollY <= 100) {
            navBar.classList.remove('nav-bg');
        }
        menu = false;
    }
})

const events = document.querySelectorAll(".event");
const eventspopup = document.querySelectorAll(".event-pop");
const eventclose = document.querySelectorAll(".event-close");

if(events.length) {
  function task(i) { 
    setTimeout(function() { 
      events[i] && events[i].addEventListener('click', () => {
        eventspopup[i].classList.add("dispop");
      })
      eventclose[i] && eventclose[i].addEventListener('click', () => {
        eventspopup[i].classList.remove("dispop");
      })
    }, 500); 
  }

  for (let i=0; i<10; i++) { 
    task(i); 
  } 
}

const w1 = document.getElementById("workshop1");
const wpop1 = document.getElementById("wpop1");
const w2 = document.getElementById("workshop2");
const wpop2 = document.getElementById("wpop2");
const wc1 = document.getElementById("wclose1");
const wc2 = document.getElementById("wclose2");

w1 && w1.addEventListener('click', ()=> {
  wpop1.classList.add("dispop");
})
w2 && w2.addEventListener('click', ()=> {
  wpop2.classList.add("dispop");
})
wc1 && wc1.addEventListener('click', ()=> {
  wpop1.classList.remove("dispop");
})
wc2 && wc2.addEventListener('click', ()=> {
  wpop2.classList.remove("dispop");
})



/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#0e0e0e",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);