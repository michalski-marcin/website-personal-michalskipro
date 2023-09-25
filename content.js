const about = {
        name: "about",
        content:`
        <div class="profile">
                <div class="pic-wrapper">
                    <div class="profile-pic-container">
                        <img class="profile-pic" src="pics/profile.jpg" alt="profile picture">
                    </div>
                </div>
                <div class="profile-text">
                <p>const <span class="code-different">frontendDev</span> = <span class="code-different">{</span>
    firstName: <span class="code-string">"Marcin"</span>,
    lastName: <span class="code-string">"Michalski"</span>,
    basedIn: <span class="code-string">"Wroclaw, Poland"</span>,
    repositories: <a href="https://github.com/michalski-marcin">github.com</a>,
    socials: <a href="https://linkedin.com/in/michalski-marcin">linkedin.com</a>
    <span class="code-different">}</span>;</p>
                    </div>
                </div>
        `
}

const skills = {
    name: "skills",
    content:`
<div class="profile-bottom">
<div class="main-tech">
    <div class="icon-tooltip"><img src="pics/htmlicon.svg" alt="html"><span
            class="icon-tooltiptext">HTML</span></div>
    <div class="icon-tooltip"><img src="pics/cssicon.svg" alt="html"><span
            class="icon-tooltiptext">CSS</span></div>
    <div class="icon-tooltip"><img src="pics/jsicon.svg" alt="html"><span
            class="icon-tooltiptext">JavaScript</span></div>
    <div class="icon-tooltip"><img src="pics/reacticon.svg" alt="html"><span
            class="icon-tooltiptext">React.Js</span></div>
    <div class="icon-tooltip"><img class="not-done" src="pics/tsicon.svg" alt="html"><span
            class="icon-tooltiptext">TypeScript</span></div>
    <div class="icon-tooltip"><img class="not-done" src="pics/sassicon.svg" alt="html"><span
            class="icon-tooltiptext">SASS</span></div>
    <div class="icon-tooltip"><img class="not-done" src="pics/tailicon.svg" alt="html"><span
            class="icon-tooltiptext">Tailwhind</span></div>
</div>
<div class="minor-tech">
    <div class="icon-tooltip"> <img src="pics/giticon.svg" alt="html"><span
            class="icon-tooltiptext">GIT</span></div>
    <div class="icon-tooltip"> <img src="pics/mysqlicon.svg" alt="html"><span
            class="icon-tooltiptext">MySQL</span></div>
    <div class="icon-tooltip"> <img src="pics/figmaicon.svg" alt="html"><span
            class="icon-tooltiptext">Figma</span></div>
    <div class="icon-tooltip"> <img src="pics/canvaicon.svg" alt="html"><span
            class="icon-tooltiptext">Canva</span></div>
    <div class="icon-tooltip"> <img src="pics/photoshopicon.svg" alt="html"><span
            class="icon-tooltiptext">Photoshop</span></div>
</div>
</div>`
}

const projects = {
    name: "projects",
    content: `Project HAHAJAJ`}

const contact = {
    name: "contact",
    content: `hejo`}


export const contentArr = [about, skills, projects, contact]