function showSection(idToShow) {
    let sections = document.querySelectorAll('section');
        for (let i = 0; i < sections.length; i++) {
            if (idToShow != sections[i].id) {
            sections[i].style = `left: 150%; opacity:0`;
        }
    }

    setTimeout(function () { document.getElementById(idToShow).style = `left: 50%; opacity:1` }, 500)

}
