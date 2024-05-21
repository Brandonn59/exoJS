document.getElementById('theme').onclick = function() {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.getElementById('titre').style.color = 'black';
        document.getElementById('question').style.color = 'black';
        document.getElementById('question').style.borderColor = 'black';
        document.getElementById('reponse').style.color = 'black';
        document.getElementById('reponse').style.borderColor = 'black';
        document.getElementById('theme').innerText = 'Thème sombre';
    } else {
        document.body.style.backgroundColor = 'black';
        document.getElementById('titre').style.color = 'white';
        document.getElementById('question').style.color = 'white';
        document.getElementById('question').style.borderColor = 'white';
        document.getElementById('reponse').style.color = 'white';
        document.getElementById('reponse').style.borderColor = 'white';
        document.getElementById('theme').innerText = 'Thème clair';
    }
};

document.getElementById('question').onclick = function() {
    if (document.getElementById('reponse').style.display === 'none') {
        document.getElementById('reponse').style.display = 'block';
    } else {
        document.getElementById('reponse').style.display = 'none';
    }
}


var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");


openBtn.onclick = openNav;
closeBtn.onclick = closeNav;


function openNav () {
    sidenav.classList.add("active");
}


function closeNav() {
    sidenav.classList.remove("active");
}