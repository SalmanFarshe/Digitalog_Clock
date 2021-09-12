const clock_kata_hours = document.querySelector(".clock_kata_hours");
const clock_kata_minutes = document.querySelector(".clock_kata_minutes");
const clock_kata_seconds = document.querySelector(".clock_kata_seconds");
function clock() {
	var timee = new Date();
	var hours = timee.getHours();
	var minutes = timee.getMinutes();
	var seconds = timee.getSeconds();
	hoursDegrees = (360 / 60) * hours + 90;
	minutesDegrees = (360 / 60) * minutes + 90;
	secondsDegrees = (360 / 60) * seconds + 90;
	clock_kata_seconds.style.transform = `rotate(${secondsDegrees}deg)`;
	clock_kata_minutes.style.transform = `rotate(${minutesDegrees}deg)`;
	clock_kata_hours.style.transform = `rotate(${hoursDegrees}deg)`;

	// digitalclock
    if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
        minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	const digital_hours = document.querySelector(".digital_hours");
	digital_hours.innerHTML = `${hours}:`;
	const digital_minutes = document.querySelector(".digital_minutes");
	digital_minutes.innerHTML = `${minutes} :`;
	const digital_seconds = document.querySelector(".digital_seconds");
	digital_seconds.innerHTML = `${seconds}`;
}
setInterval(clock, 1000);
