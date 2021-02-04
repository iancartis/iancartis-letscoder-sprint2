let container = document.getElementById('container');
const burguer = document.querySelector(".nav-burguer");
const secondaryMenu = document.querySelector(".secondary");
const close = document.querySelector(".secondary img");
let circle = document.createElement('div');
let className = "circle";



console.log(burguer);

//Responsive menu


function displayResponsiveMenu() {
    burguer.addEventListener("click", function() {
        secondaryMenu.classList.toggle('display');
    });
}

function closeResponsiveMenu() {
    close.addEventListener("click", function() {
        secondaryMenu.classList.remove("display");
    });
}




displayResponsiveMenu();
closeResponsiveMenu();

//Bubble generator
function randomNumber() {
    let randomNumber = Math.floor((Math.random() * 1000) + 100);
    return randomNumber;
}




//Dark Mode
const body = document.querySelector('body');
let theme = "light";
const toggler = document.querySelector(".toggler");
const onOff = document.querySelector(".on-off");


function togglerSlider() {
    toggler.addEventListener('click', function() {
        onOff.classList.toggle('toggle');

        if (theme = "light") {
            console.log('Light')
            body.classList.toggle('dark');
            theme = "Dark";
        } else {
            console.log('Dark')
            theme = "Light"
            body.classList.toggle('light');
        }
    });
}
togglerSlider();
const sendButton = document.getElementById('enviar');
const form = document.querySelector('form');
// let elements = form.elements;
// var elemsArr1 = Array.from(elements);
const data = new URLSearchParams(new FormData(form));



function getData() {

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        for (var [key, value] of data) {
            console.log(value);
        }

    });

}
getData();