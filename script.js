import { contentArr } from './content.js';


const contentScreen = document.querySelector('section')
const menuLink = document.querySelectorAll('.menu-link')
let arrowLink = document.querySelectorAll('.menu-link span')


contentScreen.innerHTML = contentArr[0].content
arrowLink[0].style.transform = 'rotate(90deg)'



menuLink.forEach((item) => {
    item.addEventListener("click", function (e) {
        if (!contentScreen.classList.contains(e.target.id)) {
            turnBackArrow(e.target.id)
            linkEffects(item)
            for (let i = 0; i < contentArr.length; i++) {
                if (arrowLink[i].classList.contains('arrow-visible')) {
                    arrowLink[i].style.transform = 'rotate(0deg)'
                }
                if (contentArr[i].name == e.target.id) {
                    setTimeout(function () { arrowLink[i].style.transform = 'rotate(90deg)' }, 700)
                    arrowLink[i].classList.add('arrow-visible')
                    contentScreen.style = `left: 200%; opacity:0`;
                    setTimeout(function () { contentScreen.innerHTML = contentArr[i].content }, 500)
                    contentScreen.className = e.target.id
                    setTimeout(function () { contentScreen.style = `left: 50%; opacity:1` }, 500)
                }
            }
        }
    })
})

function turnBackArrow(id) {
    for (let i = 0; i < arrowLink.length; i++) {
        if (arrowLink[i].classList.contains(`${id}-arrow`)) {
            arrowLink[i].style.transform = "rotate(0deg)"
        }

    }
}

function linkEffects(e) {

    for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].classList.remove("active-link")
    }
    e.classList.add("active-link")
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

    setTimeout(() => {
        circle.style.left = `${e.pageX - width / 2 + 5}px`
        circle.style.top = `${e.pageY - height / 2 + 5}px`
        gradientContainer.style.backgroundPosition = `${x}px ${y}px`

    }, 10);


})
