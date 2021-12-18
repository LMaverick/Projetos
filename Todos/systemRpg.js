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
//     status: vigor, mana, força, destreza(velocidade e esquiva), constituição(resistencia fisica), inteligencia (conhecimentos especificos), sabedoria (conhecimentos gerais e experiencias), carisma (lidar com pessoas)
//vigor, mana, força, destreza, consti, inteligencia, sabedoria, carisma
let status = [100, 0, 0, 0, 0, 0, 0, 0]


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

function pegarRaca(letra){
    person[1] = letra
    let status = [100, 0, 0, 0, 0, 0, 0, 0]

    if (person[1] == 'Humano'){
        status[5] += 2 // aumenta a constituição

    } else if (person[1] == 'Elfo'){
        status[4] += 2  // aumenta a destreza
        
    } else if (person[1] == 'Anão'){
        status[3] += 2 // aumenta a velocidade
        
    }

}
