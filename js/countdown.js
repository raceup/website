// Set the date we're counting down to
var countDownDates = [
    new Date("Oct 12, 2019 23:59:59").getTime()
];

/**
 * Dynamically displays date in the countdown HTML element
 * @param htmlCountdown HTML id of countdown element to edit
 * @param date deadline date
 */
function dynamicCountdown(htmlCountdown, date) {
    var now = new Date().getTime();  // Get todays date and time
    var distance = date - now;  // Find the distance between now an the count down date

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // write to screen
    if (distance >= 0) {  // show careers info
        document.getElementById(htmlCountdown).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        return true;
    }

    return false;
}

/**
 * Dynamically displays date in the countdown HTML element
 * @param htmlCountdown HTML id of countdown element to edit
 * @param date deadline date
 * @param updateInterval seconds between 2 consecutive updates
 */
function runCountdown(htmlCountdown, date, updateInterval) {
    var countdown = setInterval(function () {
        var isDeadlined = !dynamicCountdown(htmlCountdown, date);

        if (isDeadlined) {
            clearInterval(countdown);  // stop interval
            document.getElementById(htmlCountdown).style.display = 'none';  // hide div
        }
    }, updateInterval * 1000);
}

runCountdown("countdown_1", countDownDates[0], 1);  //run countdown
