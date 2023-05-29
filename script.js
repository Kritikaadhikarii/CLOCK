function startCountdown() {
    var durationInput = document.getElementById("duration-input");
    var duration = parseInt(durationInput.value);

    if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid duration.");
        return;
    }

    durationInput.disabled = true;
    document.getElementById("start-btn").disabled = true;

    countdownTimer(duration);
}

function countdownTimer(duration) {
    var startTime = new Date().getTime();
    var endTime = startTime + (duration * 1000);

    updateTimer();

    function updateTimer() {
        var currentTime = new Date().getTime();
        var timeDifference = endTime - currentTime;

        if (timeDifference <= 0) {
            // Countdown completed
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            
            document.getElementById("flip-hours").innerHTML = "00";
            document.getElementById("flip-minutes").innerHTML = "00";
            document.getElementById("flip-seconds").innerHTML = "00";

            document.getElementById("duration-input").disabled = false;
            document.getElementById("start-btn").disabled = false;

            return;
        }

        var hours = Math.floor(timeDifference / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("hours").innerHTML = padNumber(hours);
        document.getElementById("minutes").innerHTML = padNumber(minutes);
