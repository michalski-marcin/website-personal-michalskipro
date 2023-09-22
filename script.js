
// SWITCH POSITION OF TECHNOLOGY ICONS ACCORDING TO RESOLUTION

let techIconsHighRes = document.querySelector('.profile-text-more')
let techIconsLowRes = document.querySelector('.profile-bottom')
const mediaQuery = window.matchMedia('(max-width: 945px)')




function changeIconsPosition() {
    if (mediaQuery.matches) {
        techIconsLowRes.innerHTML = techIconsHighRes.innerHTML
        techIconsHighRes.innerHTML = ""
    } else if (!mediaQuery.matches && techIconsLowRes) {
        techIconsHighRes.innerHTML = techIconsLowRes.innerHTML
        techIconsLowRes.innerHTML = ""
    }
}

mediaQuery.onchange = (e) => {
    changeIconsPosition()
}


// SWITCH SECTION CONTENT AFTER MENU LINK CLICKED

function showSection(idToShow) {
    let sections = document.querySelectorAll('section');
    for (let i = 0; i < sections.length; i++) {
        if (idToShow != sections[i].id) {
            sections[i].style = `left: 200%; opacity:0`;
            // const element = document.getElementById(idToShow)
            // console.log(element.id)
            // makeContent(element)
        }
    }
    setTimeout(function () { document.getElementById(idToShow).style = `left: 50%; opacity:1` }, 500)
}



// function makeContent(input) {
//     input.innerHTML = `<p>www</p>`
// }

var modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector('.my-btn')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.addEventListener("click", function() {
    modal.style.display = "block"
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}