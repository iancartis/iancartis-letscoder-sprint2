let containerTeam = document.querySelector('.container.team');
console.log(containerTeam);
let className2 = "html";

appendHtml();
animation();

function appendHtml() {
    for (i = 0; i < 5; i++) {
        let html = document.createElement('div');
        html.classList.add(className2);
        html.style.top = randomNumber() + "px";
        html.style.left = randomNumber() + "px";
        html.style.bottom = randomNumber() + "px";
        html.style.right = randomNumber() + "px";
        containerTeam.append(html);
    }
    setTimeout(() => {
        appendHtml();
        animation();
    }, 100);
}

function animation() {
    let html = document.querySelectorAll('.html:not(.animated)');
    for (i = 0; i < html.length; i++) {

        html[i].style.setProperty('--translate-x', randomNumber() + '%');
        html[i].style.setProperty('--translate-y', randomNumber() + '%');
        html[i].classList.add('animated');
    }

}