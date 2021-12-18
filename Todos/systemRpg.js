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

function pegarRaca(raca){
    person[1] = raca
    

    if (person[1] == 'Humano'){
        status[5] += 2 // aumenta a constituição


    } else if (person[1] == 'Elfo'){
        status[4] += 2  // aumenta a destreza
        
    } else if (person[1] == 'Anão'){
        status[3] += 2 // aumenta a velocidade
        
    }

}

//==============================================================
    //vigor, mana, força, destreza, consti, inteligencia, sabedoria, carisma
function pegarClasse(classe){
    person[2] = classe
    if (person[2] == 'Cavaleiro'){
        status[2] += 4 
        status[3] += 5 
        status[4] += 3 
        status[5] += 2 
        status[6] += 3 
        status[7] += 1 
        alert(`Força: ${status[2]} | Destreza: ${status[3]} | Constituição: ${status[4]} | Inteligência: ${status[5]} | Sabedoria: ${status[6]}  | Carisma: ${status[7]} `) 

        
    } else if (person[2] == 'Bárbaro'){
        status[2] += 5 
        status[3] += 3 
        status[4] += 5
        status[5] += 1
        status[6] += 4
        status[7] += 0
        alert(`Força: ${status[2]} | Destreza: ${status[3]} | Constituição: ${status[4]} | Inteligência: ${status[5]} | Sabedoria: ${status[6]}  | Carisma: ${status[7]} `) 
    
    } else if (person[2] == 'Lutador'){
        status[2] += 6 
        status[3] += 5
        status[4] += 3
        status[5] += 1
        status[6] += 1
        status[7] += 2
        alert(`Força: ${status[2]} | Destreza: ${status[3]} | Constituição: ${status[4]} | Inteligência: ${status[5]} | Sabedoria: ${status[6]}  | Carisma: ${status[7]} `) 
     // Magos, monge e healer ==================================
    } else if (person[2] == 'Clérigo'){
        status[2] += 2  
        status[3] += 1
        status[4] += 4
        status[5] += 5
        status[6] += 4
        status[7] += 2
        alert(`Força: ${status[2]} | Destreza: ${status[3]} | Constituição: ${status[4]} | Inteligência: ${status[5]} | Sabedoria: ${status[6]}  | Carisma: ${status[7]} `) 
    
    } else if (person[2] == 'Mago'){
        status[2] += 1 
        status[3] += 2
        status[4] += 1
        status[5] += 7
        status[6] += 6
        status[7] += 1
        alert(`Força: ${status[2]} | Destreza: ${status[3]} | Constituição: ${status[4]} | Inteligência: ${status[5]} | Sabedoria: ${status[6]}  | Carisma: ${status[7]} `) 
    
    } else if (person[2] == 'Sacerdotiza'){
        status[2] += 1 
        status[3] += 1
        status[4] += 1
        status[5] += 4
        status[6] += 6
        status[7] += 5
        alert(`Força: ${status[2]} | Destreza: ${status[3]} | Constituição: ${status[4]} | Inteligência: ${status[5]} | Sabedoria: ${status[6]}  | Carisma: ${status[7]} `) 
    
        //especial =======================
    } else if (person[2] == 'Ninja'){
        status[2] += 4
        status[3] += 6
        status[4] += 1
        status[5] += 4
        status[6] += 3
        status[7] += 0
        alert(`Força: ${status[2]} | Destreza: ${status[3]} | Constituição: ${status[4]} | Inteligência: ${status[5]} | Sabedoria: ${status[6]}  | Carisma: ${status[7]} `) 
    
    } else if (person[2] == 'Samurai'){
        status[2] += 4
        status[3] += 3
        status[4] += 3
        status[5] += 3
        status[6] += 5
        status[7] += 0
        alert(`Força: ${status[2]} | Destreza: ${status[3]} | Constituição: ${status[4]} | Inteligência: ${status[5]} | Sabedoria: ${status[6]}  | Carisma: ${status[7]} `) 
    
    } else if (person[2] == 'Feiticeiro'){
        status[2] += 2
        status[3] += 1
        status[4] += 4
        status[5] += 7
        status[6] += 3
        status[7] += 1
        alert(`Força: ${status[2]} | Destreza: ${status[3]} | Constituição: ${status[4]} | Inteligência: ${status[5]} | Sabedoria: ${status[6]}  | Carisma: ${status[7]} `) 
    
    }

        
    
}