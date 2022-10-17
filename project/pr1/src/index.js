const form = document.querySelector(".js-form"),
  select = form.querySelector("#selectBox");


const result = document.querySelector(".result");
const USER_LS = "나라";

//3.currentValue에 저장된 select 벨류값을 로컬스토리지에 저장
function saveCountry(select){
  localStorage.setItem(USER_LS, select);
}

function handleSubmit(event){
  //1.일단 이벤트를 멈추고
  event.preventDefault();
  //2.현재 가지고 있는 벨류값 저장
  const currentValue=select.options[select.selectedIndex].value;
  saveCountry(currentValue);
  console.log("mypick:"+currentValue);
  result.innerHTML="당신은 "+currentValue+"에서 왔군요!";

}

function selectOne(){
  form.addEventListener("change", handleSubmit);
}

function loadCountry() {

  const myPick = localStorage.getItem(USER_LS);
  if(myPick === null){
    selectOne();
  }else{

  }
}

function init() {
  loadCountry();
}

init();


