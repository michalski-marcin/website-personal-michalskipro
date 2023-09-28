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


// HAMBURGER ANIMATION

checkbox.addEventListener('change', function () {

    if (checkbox.checked) {
        hamburgerLine1.style.transform = "rotate(45deg)"
        hamburgerLine2.style.transform = "scaleY(0)"
        hamburgerLine3.style.transform = "rotate(-45deg)"
    } else {
        hamburgerLine1.style.transform = "rotate(0deg)"
        hamburgerLine2.style.transform = "scaleY(1)"
        hamburgerLine3.style.transform = "rotate(0deg)"
    }
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


// RADIAL GRADIENT FOLLOWING CURSOR POSITION

const gradientContainer = document.querySelector('.gradient-background')
const bodyBackground = document.querySelector('body')


document.addEventListener("mousemove", (e) => {
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;
    let x = e.pageX - gradientContainer.offsetLeft
    let y = e.pageY - gradientContainer.offsetTop
    x = x - bodyBackground.offsetWidth
    y = y - bodyBackground.offsetHeight

    circle.style.left = `${e.pageX - width / 2 + 5}px`
    circle.style.top = `${e.pageY - height / 2 + 5}px`
    gradientContainer.style.backgroundPosition = `${x}px ${y}px`

    // Set cursor pointer on hover
    if (e.target.classList.contains('pointer-link')) {
        circle.style.display = "none"
    } else if (!e.target.classList.contains('pointer-link')) {
        circle.style.display = "initial"
    }

    // Remove Circle cursor in less than 800px width
    const mediaQuery = window.matchMedia('(max-width: 800px)')
    if (mediaQuery.matches) {
        circle.style.display = "none"
    }
})


// TYPEWRITING ANIMATION

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

const indexTyping = setInterval(addLetter, 10);