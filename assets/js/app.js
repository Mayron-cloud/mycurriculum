var exibirSobre = function () {
    divSobre = document.querySelector("#sobre");
    divAbilidades = document.querySelector("#habilidades");
    divFormacao = document.querySelector("#formacao");
    divHobbies = document.querySelector("#hobbies");
    divBooks = document.querySelector("#books");

    divSobre.style.display = "block";
    divAbilidades.style.display = "none";
    divFormacao.style.display = "none";
    divHobbies.style.display = "none";
    divBooks.style.display = "none";
}

var exibirAbilidades = function () {
    divSobre = document.querySelector("#sobre");
    divAbilidades = document.querySelector("#habilidades");
    divFormacao = document.querySelector("#formacao");
    divHobbies = document.querySelector("#hobbies");
    divBooks = document.querySelector("#books");

    divSobre.style.display = "none";
    divAbilidades.style.display = "block";
    divFormacao.style.display = "none";
    divHobbies.style.display = "none";
    divBooks.style.display = "none";
}

var exibirFormacao = function () {
    divSobre = document.querySelector("#sobre");
    divAbilidades = document.querySelector("#habilidades");
    divFormacao = document.querySelector("#formacao");
    divHobbies = document.querySelector("#hobbies");
    divBooks = document.querySelector("#books");

    divSobre.style.display = "none";
    divAbilidades.style.display = "none";
    divFormacao.style.display = "block";
    divHobbies.style.display = "none";
    divBooks.style.display = "none";
}

var exibirHobbies = function () {
    divSobre = document.querySelector("#sobre");
    divAbilidades = document.querySelector("#habilidades");
    divFormacao = document.querySelector("#formacao");
    divHobbies = document.querySelector("#hobbies");
    divBooks = document.querySelector("#books");

    divSobre.style.display = "none";
    divAbilidades.style.display = "none";
    divFormacao.style.display = "none";
    divHobbies.style.display = "block";
    divBooks.style.display = "none";
}

var exibirBooks = function () {
    divSobre = document.querySelector("#sobre");
    divAbilidades = document.querySelector("#habilidades");
    divFormacao = document.querySelector("#formacao");
    divHobbies = document.querySelector("#hobbies");
    divBooks = document.querySelector("#books");

    divSobre.style.display = "none";
    divAbilidades.style.display = "none";
    divFormacao.style.display = "none";
    divHobbies.style.display = "none";
    divBooks.style.display = "block";
}


var modoNoturno = function () {
    var body = document.getElementById('corpo');
    if (body.classList.contains('modo-noturno')) {
        body.classList.remove('modo-noturno');
    } else {
        body.classList.add('modo-noturno');
    }
}