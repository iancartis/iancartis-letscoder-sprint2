function appendCircle() {
    for (i = 0; i < 100; i++) {
        let circle = document.createElement('div');

        circle.classList.add(className);

        circle.style.top = randomNumber() + "px";
        circle.style.left = randomNumber() + "px";
        circle.style.bottom = randomNumber() + "px";
        circle.style.right = randomNumber() + "px";
        container.append(circle);



    }
}

function animation() {
    let bubble = document.querySelectorAll('.circle');
    for (i = 0; i < bubble.length; i++) {

        bubble[i].style.setProperty('--translate-x', randomNumber() + '%');
        bubble[i].style.setProperty('--translate-y', randomNumber() + '%');
    }

}



appendCircle();
animation();