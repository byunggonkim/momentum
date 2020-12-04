//변수
const clockContainer = document.querySelector(".clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
	// Date
	const date = new Date();
	const hour = date.getHours();
	const min = date.getMinutes();
	const sec = date.getSeconds();
	
	clockTitle.innerText = `${hour < 10 ? `0${hour}`:hour} : ${min < 10 ? `0${min}`:min} : ${sec < 10 ? `0${sec}`:sec}`;
};

function init(){
	getTime();
	setInterval(getTime,1000);	//DOM객체 window, 1초간격으로 표현
};

init();
