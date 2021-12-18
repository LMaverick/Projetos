/*
     força hulk= bombado
     destreza john wick = precisão e agilidade
     constituição superman = resistencia fisica

     inteligencia sherlock holmes = conhecimentos especificos
     sabedoria avó = conhecimentos gerais
     carisma agostinho = lidar com pessoas

     humano
 */

 //==============================================================

let person = ['', 'raca', 'classe']


//==============================================================

function pegarNome(){
    person[0] = document.getElementById('nome').value

    if (person[0].length == 0){
        var inserirNome = document.getElementById('inserirNome').style.opacity="0";
    } else {
        var inserirNome = document.getElementById('inserirNome').style.opacity="1";
    
    }
}

setInterval(pegarNome, 2000)
//==============================================================

function sumir(){
    var sumir = document.getElementById('sumir').remove()
}

//==============================================================