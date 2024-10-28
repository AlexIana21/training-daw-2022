window.onload = function(){

    var enlace=document.querySelectorAll('a');
    console.log (enlace)

    var penultimoEnlace=document.querySelectorAll('a')[5];
    console.log (penultimoEnlace.href)

    var tercerParrafo =  document.querySelectorAll('p')[2]
    let enlaces = tercerParrafo.querySelectorAll ('a')
    console.log(enlaces)

    const totalLinks = document.querySelectorAll ('a')
    let counter = 0
    for (let link of totalLinks){
        if (link.href === 'http://prueba/'){
            counter ++
        }
    }
    console.log (`total http://pruba links ${counter}`)


}