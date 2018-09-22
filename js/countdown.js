// Set the date we're counting down to
var countDownDate = new Date("Oct 7, 2018 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();  // Get todays date and time
    var distance = countDownDate - now;  // Find the distance between now an the count down date

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance >= 0) {  // show careers info
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";
        document.getElementById("careers").style.display = 'block';  // show div
    } else {  // stop interval
        clearInterval(x);
    }
}, 1000);  // 1000ms => 1s