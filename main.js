function playDit() {
	let ding = new Audio('ditsound.wav');
	ding.play();
}
function playDah() {
	let ding = new Audio('dahsound.wav');
	ding.play();
}

const input = document.querySelector("input");
const log = document.getElementById("log");



addEventListener("keydown",playPeriod)
function playPeriod(e) {
	if (e.code== "Period"){playDit()}

}




addEventListener("keydown",playDash)
function playDash(e) {
	if (e.code== "Minus"){playDah()}

}