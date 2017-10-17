// Set the date we're counting down to
var countDownDate = new Date("ffff 017 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();  // Get todays date and time
    var distance = countDownDate - now;  // Find the distance between now an the count down date

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Candidature chiuse";
        document.getElementById("careers").innerHTML = "Le candidature per la stagione 2017 - 2018 sono ufficialmente chiuse!<br>A tutti coloro che hanno inviato il curriculum arriverà una mail con la convocazione per i colloqui!<br>A breve vedrete il volto del nuovo Team.<br><br>State aggiornati!"
    }
}, 1000);