const profileCodeText = document.querySelector('.profile-text')
const profileCodeNums = document.querySelector('.profile-code')
const profileDescription = document.querySelector('.description')
const contentArr = ["about", "skills", "projects", "contact"]
const sections = document.querySelectorAll('section')
const menuLink = document.querySelectorAll('.pointer-link')
const arrowLink = document.querySelectorAll('.pointer-link span')
const circle = document.querySelector('.circle')
const navBar = document.querySelector("header");

const offset = 130;

window.addEventListener("scroll", () => {
    if (window.scrollY <= offset){
        navBar.style.background = "rgba(11, 17, 24, 0)"
    } else {
        navBar.style.background = "rgba(11, 17, 24, 0.9)"
    }
})

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
    console.log(e.classList)
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







// RADIAL GRADIENT FOLLOWS CURSOR POSITION

const gradientContainer = document.querySelector('.gradient-background')
const bodyBackground = document.querySelector('body')
// bodyBackground.onmousemove = function (e) {
//     let x = e.pageX - gradientContainer.offsetLeft
//     let y = e.pageY - gradientContainer.offsetTop

//     x = x - bodyBackground.offsetWidth
//     y = y - bodyBackground.offsetHeight
//     gradientContainer.style.backgroundPosition = `${x}px ${y}px`

// }


document.addEventListener("mousemove", (e) => {
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;
    let x = e.pageX - gradientContainer.offsetLeft
    let y = e.pageY - gradientContainer.offsetTop

    x = x - bodyBackground.offsetWidth
    y = y - bodyBackground.offsetHeight

   
    if (e.target.classList.contains('pointer-link')) {
        // circle.style.transform = 'scale(3)';
        circle.style.display = "none"
    } else if (!e.target.classList.contains('pointer-link') || (mediaQuery.matches)){
        circle.style.display = "initial"
       
        // circle.style.transform = 'scale(1)'
    }
   

    const mediaQuery = window.matchMedia('(max-width: 800px)')
    // Check if the media query is true
    if (mediaQuery.matches) {
      // Then trigger an alert
      circle.style.display = "none"
    }


    circle.style.left = `${e.pageX - width / 2 + 5}px`
    circle.style.top = `${e.pageY - height / 2 + 5}px`
    gradientContainer.style.backgroundPosition = `${x}px ${y}px`




})

const mediaQuery = window.matchMedia('(min-width: 800px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  circle.style.display = "none"
}




const profileDescriptionText = `I'm passionate about programming and dedicated to crafting seamless user experiences through
clean, efficient code and creative design solutions.
I look forward to the opportunity to collaborate on projects that not only meet but exceed
expectations, delivering experiences that leave a lasting impression on users. Let's bring your
ideas to life, together.
`

let indexText = 0
const addLetter = () => {
    profileDescription.textContent += profileDescriptionText[indexText];
    indexText++;
    
    if (indexText == profileDescriptionText.length) clearInterval(indexTyping);
}


const indexTyping = setInterval(addLetter, 20);