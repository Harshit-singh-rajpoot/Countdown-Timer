let timer = false;
var minutes;
var seconds;
function watch() {
    setTimeout(watch, 1000);
    if (timer == true) {
        if (seconds > 60) {
            alert("Enter second from 1-60");
            document.getElementById("show1").innerHTML = "error min ";
            document.getElementById("show2").innerHTML = "error sec";
        }
        seconds--;
        if (seconds == 0) {
            minutes--;
            seconds = 59;
        }
        if (minutes <= 0 && seconds == 1) {
          timer=false;
        }
        document.getElementById("show1").innerHTML = minutes + " min ";
        document.getElementById("show2").innerHTML = seconds + " sec";
        
   }

}

function start() {
    timer = true;
    minutes = parseInt(document.getElementById("min").value);
    seconds = parseInt(document.getElementById("sec").value);
    watch();
}
function stop() {
    timer = false;
    document.getElementById("show1").innerHTML = "00 min ";
    document.getElementById("show2").innerHTML = "00 sec";
}


// var getmin = document.getElementById("min").value;
        // if (getmin === isNaN) {
        //     var getsec = document.getElementById("sec").value;
        //     getsec--;
        //     if (getsec == 0) {
        //         alert("Completed");
        //     }
        //     document.getElementById("show1").innerHTML = "00 min";
        //     document.getElementById("show2").innerHTML = intsec + " sec";
        // }
