var cont = document.querySelector('.relogio')


const update = () => {
    var now = new Date()
    
    var h = now.getHours()
    var m = now.getMinutes()
    var s = now.getSeconds()
    
    if (h >= 6 && h < 12) {
        document.body.style.background = '#f0e43a'
    } else if (h >= 12 && h < 18){
        
        document.body.style.background = '#df643f'
    } else if (h >= 18 && h < 0){
        
        document.body.style.background = '#1c2155'
    } else if (h >= 0 && h < 6){
        
        document.body.style.background = '#212121'
    } 


    const relogio =`
        <span> ${String(h).length === 1 ? `0${h}` : h}</span> :
        <span> ${String(m).length === 1 ? `0${m}` : m}</span> :
        <span> ${String(s).length === 1 ? `0${s}` : s}</span>
    `

    cont.innerHTML = relogio
}


setInterval(update, 1000)


