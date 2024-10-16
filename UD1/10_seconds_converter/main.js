function secondsToString(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var secs = seconds % 60;
    //que tenga dos sigitos
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (secs < 10) {
        secs = '0' + secs;
    }

    return hours + ':' + minutes + ':' + secs;
}

var segundos = 14562;
console.log(secondsToString(segundos))