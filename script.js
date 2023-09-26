const profileCodeText = document.querySelector('.profile-text')
const profileCodeNums = document.querySelector('.profile-code')
const profileDescription = document.querySelector('.description')
const contentArr = ["about", "skills", "projects", "contact"]
const sections = document.querySelectorAll('section')
const menuLink = document.querySelectorAll('.menu-link')
const arrowLink = document.querySelectorAll('.menu-link span')



arrowLink[0].style.transform = 'rotate(90deg)'
menuLink[0].classList.add("active-link")




function showSection(idToShow) {
    let sections = document.querySelectorAll('section');
    for (let i = 0; i < sections.length; i++) {
        if (idToShow != sections[i].id) {
            sections[i].style = `left: 200%; opacity:0`;
        }
    }

    setTimeout(function () { document.getElementById(idToShow).style = `left: 50%; opacity:1` }, 500)
}

menuLink.forEach((item) => {
    item.addEventListener("click", function (e) {

        for (let i = 0; i < sections.length; i++) {
            arrowLink[i].style.transform = 'rotate(0deg)'
            if (!e.target.classList.contains(sections[i].id)) {
                linkEffects(item)

                if (menuLink[i].classList.contains("active-link")) {
                    setTimeout(function () { arrowLink[i].style.transform = 'rotate(90deg)' }, 600)
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

const circle = document.querySelector('.circle')
document.addEventListener("mousemove", (e) => {
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;
    let x = e.pageX - gradientContainer.offsetLeft
    let y = e.pageY - gradientContainer.offsetTop

    x = x - bodyBackground.offsetWidth
    y = y - bodyBackground.offsetHeight

    if (e.target.classList.contains('target')) {
        // circle.style.transform = 'scale(3)';
        circle.classList.add('big')
    } else {
        circle.classList.remove('big')
        // circle.style.transform = 'scale(1)'
    }


    circle.style.left = `${e.pageX - width / 2 + 5}px`
    circle.style.top = `${e.pageY - height / 2 + 5}px`
    gradientContainer.style.backgroundPosition = `${x}px ${y}px`




})




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


const indexTyping = setInterval(addLetter, 35);