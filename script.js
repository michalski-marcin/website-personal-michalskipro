// VARIABLES

const profileDescription = document.querySelector('.description')
const sections = document.querySelectorAll('section')
const menuLink = document.querySelectorAll('.pointer-link')
const arrowLink = document.querySelectorAll('.pointer-link span')
const circle = document.querySelector('.circle')
const navBar = document.querySelector("header");
const checkbox = document.getElementById('menu-bar')
const hamburgerLine1 = document.querySelector('.line1')
const hamburgerLine2 = document.querySelector('.line2')
const hamburgerLine3 = document.querySelector('.line3')
const skillDimmed = document.querySelector('.show')



// HAMBURGER ANIMATION

checkbox.addEventListener('change', checkHamburger)

function checkHamburger() {
    if (checkbox.checked) {
        hamburgerLine1.style.transform = "rotate(45deg)"
        hamburgerLine2.style.transform = "translateX(100px)"
        hamburgerLine3.style.transform = "rotate(-45deg)"
    } else {
        hamburgerLine1.style.transform = "rotate(0deg)"
        hamburgerLine2.style.transform = "translateX(-3px)"
        hamburgerLine3.style.transform = "rotate(0deg)"
    }
}



document.addEventListener('scroll', (event) => {
    checkbox.checked = false;
    checkHamburger();
})


// NAVIGATION BAR BACKGROUND COLOR SCROLL OFFSET

const offset = 130;

window.addEventListener("scroll", () => {
    if (window.scrollY <= offset) {
        navBar.style.background = "rgba(11, 17, 24, 0)"
    } else {
        navBar.style.background = "rgba(11, 17, 24, 0.9)"
    }
})


// MENU ARROWS ANIMATION

arrowLink[0].style.transform = 'rotate(90deg)'
menuLink[0].classList.add("active-link")

menuLink.forEach((item) => {
    item.addEventListener("click", function (e) {

        for (let i = 0; i < sections.length; i++) {
            arrowLink[i].style.transform = 'rotate(0deg)'
            if (!e.target.classList.contains(sections[i].id)) {
                linkEffects(item)

                if (menuLink[i].classList.contains("active-link")) {
                    setTimeout(function () { arrowLink[i].style.transform = 'rotate(90deg)' }, 100)
                }
            }
        }
    })
})

function linkEffects(e) {

    for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].classList.remove("active-link")
    }
    e.classList.add("active-link")

}


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// RADIAL GRADIENT FOLLOWING CURSOR POSITION

const gradientContainer = document.querySelector('.gradient-background')

document.addEventListener("mousemove", (e) => {
    const height = gradientContainer.offsetHeight;
    const width = gradientContainer.offsetWidth;
    const circleHeight = circle.offsetHeight;
    const circleWidth = circle.offsetWidth;

    setTimeout(() => {
        circle.style.left = `${e.pageX - circleWidth / 2}px`
        circle.style.top = `${e.pageY - circleHeight / 2}px`
    }, 75);
    setTimeout(() => {
        gradientContainer.style.left = `${e.pageX - width / 2}px`
        gradientContainer.style.top = `${e.pageY - height / 2}px`
    }, 150);

})



// TYPEWRITING ANIMATION

const profileDescriptionText = `
`

let indexText = 0
const addLetter = () => {
    profileDescription.textContent += profileDescriptionText[indexText];
    indexText++;
    if (indexText == profileDescriptionText.length) clearInterval(indexTyping);
}

const indexTyping = setInterval(addLetter, 10);



// Fade IN ANIMATIONS

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
const techElements = document.querySelectorAll('.tech-element')
const projectElements = document.querySelectorAll('.project-container');
const contactSection = document.querySelectorAll('.contact-flex')

function observedElement(element) {
    element.forEach((el) => observer.observe(el));
}

observedElement(projectElements);
observedElement(contactSection);
observedElement(techElements);
// projectElements.forEach((el) => observer.observe(el));
// contactSection.forEach((el) => observer.observe(el));
// techElements.forEach((el) => observer.observe(el));


// CARD TILT ANIMATION

const tiltEffectSettings = {
    max: 7,
    perspective: 1000,
    scale: 1.1,
    speed: 1500,
    easing: "cubic-bezier(.03,.98,.52,.99)"
  };
  
  const card = document.querySelector(".card");

  const mediaQuery = window.matchMedia('(max-width: 370px)')
  if (mediaQuery.matches) {
    tiltEffectSettings.scale = 1
  }
console.log(tiltEffectSettings.scale)

  card.addEventListener("mouseenter", cardMouseEnter);
  card.addEventListener("mousemove", cardMouseMove);
  card.addEventListener("mouseleave", cardMouseLeave);


  
  function cardMouseEnter(event) {
    setTransition();
  }
  
  function cardMouseMove(event) {
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth;
    const centerY = card.offsetTop + cardHeight;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateX = (-1)*(tiltEffectSettings.max*mouseY/(cardHeight/2));
    const rotateY = (+1)*(tiltEffectSettings.max*mouseX/(cardWidth/2));
    // const rotateX = rotateXUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : (rotateXUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateXUncapped);
    // const rotateY = rotateYUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : (rotateYUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateYUncapped);
  
    card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                            scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
  }
  
  function cardMouseLeave(event) {
    card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    setTransition();
  }
  
  function setTransition() {
    clearTimeout(card.transitionTimeoutId);
    card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    card.transitionTimeoutId = setTimeout(() => {
      card.style.transition = "";
    }, tiltEffectSettings.speed);
  }

