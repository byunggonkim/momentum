//변수
const form = document.querySelector(".user"),		//입력값
	input = form.querySelector("input");
	greeting = document.querySelector(".greeting");	//환영인사
const userName = "currentUser";		//입력값
	className = "show";				//입력창 숨기고 환여인사 출력

//localStorage에 입력값 저장
function saveName(text){
	localStorage.setItem(userName,text);
}
	
//입력값 전송
function handleSubmit(event){
	event.preventDefault();				//input 엔터 새로고침 막기
	const currentValue = input.value;
	paintGreeting(currentValue);
	saveName(currentValue);
}

//입력창
function askForName(){
	form.classList.add(className);					//show클래스 추가
	form.addEventListener("submit",handleSubmit);	//제출시 handleSubmit 호출
}

//환영인사	
function paintGreeting(text){
	form.classList.remove(className);		//form의 show클래스 제거
	greeting.classList.add(className);		//h4의 show클래스 추가
	greeting.innerText = `Hello! ${text}`;	//h4의 환영문구 출력
}

//localStorage 저장값 불러오기
function loadName(){
	const currentUser = localStorage.getItem(userName);
	if(currentUser === null){
		askForName();
	}else {
		paintGreeting(currentUser);
	}
};

//초기화
function init(){
	loadName();
};

init();