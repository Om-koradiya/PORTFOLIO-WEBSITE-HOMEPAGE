let cardElements = document.querySelectorAll('.card');

cardElements.forEach(function(cardElement) {

  let paraElement = cardElement.querySelector('.para');
  let spanElement = cardElement.querySelector('span');

  cardElement.addEventListener('mouseenter', function () {

    paraElement.style.color = 'white';  
    spanElement.style.color = 'rgb(54, 48, 98)';
  });

  cardElement.addEventListener('mouseleave', function () {

    paraElement.style.color = 'black';
    spanElement.style.color = 'black';
  });
});

let om_Portfolio = document.getElementById("om-port");
let kavy_Portfolio = document.getElementById("kavy-port");
let nishanshu_Portfolio = document.getElementById("nishanshu-port");

om_Portfolio.addEventListener('click', function() {
    window.open("https://om-koradiya-portfolio.netlify.app/", "_blank")
})

kavy_Portfolio.addEventListener('click', function() {
    window.open("https://kavy-patel-portfolio.netlify.app/", "_blank")
})

nishanshu_Portfolio.addEventListener('click', function() {
    window.open("https://nishanshu-kanani-portfolio.netlify.app/", "_blank")
})

// let button_Hover = document.querySelectorALL("button")
let buttons_Hover = document.getElementsByTagName("button");

for (let i = 0; i < buttons_Hover.length; i++) {
    buttons_Hover[i].addEventListener('mouseenter', function() {
        buttons_Hover[i].innerHTML = "click me";
    });
}

for (let i = 0; i < buttons_Hover.length; i++) {
    buttons_Hover[i].addEventListener('mouseleave', function() {
        buttons_Hover[i].innerHTML = "Read more";
    });
}

