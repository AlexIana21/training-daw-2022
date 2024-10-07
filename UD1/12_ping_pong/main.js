function pingPong() {
    for (let i = 0; i<100; i++){
        if (i % 5 === 0){
            if (i % 10 === 0){
                console.log ('PING')
            } else {
                console.log ('PONG')
            }
        } else {
            console.log (i)
        }
    } 
}
pingPong()