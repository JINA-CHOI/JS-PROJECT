
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput=toDoForm.querySelector("input"),
    toDoList=document.querySelector(".js-Pending"),
    toFinishedList=document.querySelector(".js-Finished");

const PENDING_LS="PENDING";
let PENDING=[];

const Finished_LS="FINISHED";
let FINISHED=[];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanPENDING = PENDING.filter(function(toDo){
      console.log("toDo.id="+toDo.id, "parseInt(li.id) ="+parseInt(li.id));
      return toDo.id !== parseInt(li.id);
    });
    PENDING = cleanPENDING;
    console.log("cleanPENDING = "+cleanPENDING, "PENDING = "+PENDING);
    savePENDING();
  }

function deleteFinihed(event){
    const btn = event.target;
    const li = btn.parentNode;
    toFinishedList.removeChild(li);
    const cleanFinished = FINISHED.filter(function(toFinish){
      console.log(toFinish.id, parseInt(li.id));
      return toFinish.id !== parseInt(li.id);
    });
    FINISHED = cleanFinished;
    console.log(cleanFinished, FINISHED);
    saveFinish();
}

function savePENDING() {
  localStorage.setItem(PENDING_LS, JSON.stringify(PENDING));
}

function saveFinish() {
  localStorage.setItem(Finished_LS, JSON.stringify(FINISHED));
}


function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const sendFinished = document.createElement("button");
    const span = document.createElement("span");
    const newId = PENDING.length + 1;
    delBtn.innerText = "❌";
    sendFinished.innerText = "★";
    delBtn.addEventListener("click", deleteToDo);
    sendFinished.addEventListener("click", SendFinishedList);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(sendFinished);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
      text: text,
      id: newId
    };
    PENDING.push(toDoObj);
  }

function SendFinishedList(event){
  const spanText = event.path[1].childNodes[0].innerHTML;
  deleteToDo(event);
  finishedToDo(spanText);

}

function SendPendingList(event){
  const spanText2 = event.path[1].childNodes[0].innerHTML;
  deleteFinihed(event);
  paintToDo(spanText2);
  savePENDING();
}

function finishedToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const sendPending = document.createElement("button");
    const span = document.createElement("span");
    const newId = FINISHED.length + 1;
    delBtn.innerText = "❌";
    sendPending.innerText = "☆";
    delBtn.addEventListener("click", deleteFinihed);
    sendPending.addEventListener("click", SendPendingList);
    span.innerText = text;
    li.id = newId;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(sendPending);
    toFinishedList.appendChild(li);
    const toFinishedObj = {
      text: text,
      id: newId
    };
    FINISHED.push(toFinishedObj);
    saveFinish();
  }

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
  }

function loadPENDING() {
    const loadedPENDING = localStorage.getItem(PENDING_LS);
    if (loadedPENDING !== null && loadedPENDING !== undefined) {
      const parsedPENDING = JSON.parse(loadedPENDING);
      parsedPENDING.forEach(function(toDo) {
        paintToDo(toDo.text);
      });
    }
  }

function loadFINISHED() {
    const loadFINISHED = localStorage.getItem(Finished_LS);
    if (loadFINISHED !== null && loadFINISHED !== undefined) {
      const parsedFINISHED = JSON.parse(loadFINISHED);
      parsedFINISHED.forEach(function(toFinish) {
        finishedToDo(toFinish.text);
      });
    }
  }


function init(){
    loadPENDING();
    loadFINISHED();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();

