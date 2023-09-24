import { contentArr } from './content.js';
console.log(contentArr)


const profileTextbreak = document.querySelector('.profile-text-break')
profileTextbreak.textContent = `const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
};`;


const contentScreen = document.querySelector('section')
const menuLink = document.querySelectorAll('.menu-link')

menuLink.forEach((item) => {
    item.addEventListener("click", function (e) {
        if (!contentScreen.classList.contains(e.target.id)) {
            for (let i = 0; i < contentArr.length; i++) {
                if (contentArr[i].name == e.target.id) {
                    contentScreen.style = `left: 200%; opacity:0`;
                    console.log(e.target.id)
                    setTimeout(function () { contentScreen.innerHTML = contentArr[i].content }, 500)
                    contentScreen.className = e.target.id
                    setTimeout(function () { contentScreen.style = `left: 50%; opacity:1` }, 500)
                }
            }
        }
    })
})




