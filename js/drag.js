// Fill User Name
const nameForm = document.querySelector("#name-button");
const userInput = document.querySelector("#user_name");
function startFillName() {
  nameForm.classList.remove("name-disable");
  nameForm.disabled = false;
}
function haveName() {
  if (userInput.value == "") {
    nameForm.classList.add("name-disable");
    nameForm.disabled = true;
  }
}
function fillUserName() {
  document.getElementById("fill-user-name").innerText = document.getElementById(
    "fill-user-name-last"
  ).innerText = userInput.value;
  turnNextPage(1);
}
// Fill the textarea
const poSubmit = document.querySelector("#po-submit");
const poTextArea = document.querySelector("#po-textarea");
const dynamicText = document.querySelector("#dynamic-task");
const poNextBTN = document.querySelector("#po-next-btn");
function poTextAreaF() {
  poSubmit.classList.remove("disable");
  poSubmit.disabled = false;
}
function havePoText() {
  if (poTextArea.value == "") {
    poSubmit.classList.add("disable");
    poSubmit.disabled = true;
  }
}
function poSubmitFunc() {
  dynamicText.innerText = poTextArea.value;
  poSubmit.classList.add("display-none");
  poNextBTN.disabled = false;
  poTextArea.disabled = true;
  turnNextPage(4);
}
// hover
const hoverForMore = document.querySelectorAll(".hover-for-info");
const moreInfo = document.querySelectorAll(".more-info");
for (let i = 0; i < hoverForMore.length; i++) {
  hoverForMore[i].addEventListener("mouseover", function () {
    moreInfo[i].style.display = "block";
  });
  hoverForMore[i].addEventListener("mouseout", function () {
    moreInfo[i].style.display = "none";
  });
}

// Scrum Master
const scrumMasterTask = document.querySelectorAll(
  ".task-container .tasks[draggable=true]"
);
const scrumMasterContainer = document.querySelectorAll(".task-container");
const submitBTN = document.getElementById("scrum-submit");
const resetBTN = document.getElementById("scrum-reset");
scrumMasterTask.forEach((drag) => {
  drag.addEventListener("dragstart", (event) => {
    event.stopPropagation();
    drag.classList.add('dragging');
  });
  drag.addEventListener("dragend", (event) => {
    drag.classList.remove('dragging');
    countIssue();
  });
  scrumMasterContainer.forEach((container) => {
    container.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const afterElement = getDragAfterElement(container, event.clientY,undragItem[1]);
      const draggable = document.querySelector('.dragging');
      if (afterElement == null) {
          container.appendChild(draggable);
        } else {
          container.insertBefore(draggable, afterElement);
        }
    });
  });
});
function countIssue() {
  document.getElementById(
    "realtime-issue"
  ).innerText = `${scrumMasterContainer[1].childElementCount} issue`;
  if (scrumMasterContainer[1].childElementCount > 0) {
    submitBTN.classList.remove("disable");
    resetBTN.classList.remove("disable");
  }
}
countIssue();
let scrumResult = 2;
function scrumSubmit() {
  if (scrumMasterContainer[1].childElementCount == 5) {
    let testPriority = [];
    document.querySelectorAll(".priority-no").forEach((no) => {
      testPriority.push(Number(no.innerText));
    });
    testPriority.forEach((test, i, arr) => {
      if (test < arr[i + 1]) {
        scrumResult = 1;
      }
    });
  } else {
    scrumResult = 0;
  }
  if (scrumResult == 2) {
    turnNextPage(5);
    submitBTN.classList.add("display-none");
    document.querySelector("#scrum-next-btn").disabled = false;
    resetBTN.classList.add("disable");
    resetBTN.disabled = true;
    scrumMasterTask.forEach((div) => {
      div.draggable = false;
    });
  } else {
    resetScrumPriority();
    wrongAnswer(scrumResult);
    scrumResult = 2;
  }
}
function resetScrumPriority() {
  scrumMasterTask.forEach((task) => {
    scrumMasterContainer[0].appendChild(task);
  });
  submitBTN.classList.add("disable");
  resetBTN.classList.add("disable");
}

// Daily -drag
const dailyDraggable = document.querySelectorAll('.list-ct .card[draggable="true"]');
const dailyDragContainer = document.querySelectorAll('.list-ct .drag-container');
const dailyListText = document.querySelectorAll('.list-title h2');
//btn
const resetdailyBtn = document.getElementById('daily-reset');
const ctadailyBtn = document.getElementById('daily-cta-btn');
let clickActive = false;
//daily drag event
dailyDraggable.forEach(dragelement => {
    dragelement.addEventListener('dragstart', () => {
        dragelement.classList.add('dragging');
    });
    dragelement.addEventListener('dragend', () => {
        dragelement.classList.remove('dragging');
        countCard();
        activeBtn();
    });
    dailyDragContainer.forEach(container => {
        container.addEventListener('dragover', (event) => {
            event.preventDefault();
            const afterElement = getDragAfterElement(container, event.clientY, undragItem[0]);
            const draggable = document.querySelector('.dragging');
            if (afterElement == null) {
                container.appendChild(draggable);
            } else {
                container.insertBefore(draggable, afterElement);
            }
        });
    });
});
countCard();
function countCard() {
    dailyListText[0].innerHTML = `TO DO  ${dailyDragContainer[0].childElementCount}`;
    dailyListText[1].innerHTML = `TO BE HANDLED ${dailyDragContainer[1].childElementCount}`;
    dailyListText[2].innerHTML = `IN PROGRESS ${dailyDragContainer[2].childElementCount}`;
};
// Resetevent 
resetdailyBtn.addEventListener('click', resetDailyList);
function resetDailyList() {
    if (clickActive == true) {
        dailyDraggable.forEach(element => {
            dailyDragContainer[0].appendChild(element);
        });
        activeBtn();
        countCard();
    }
}
//active two btn and add click event
function activeBtn() {
    if (dailyDragContainer[1].childElementCount > 0 || dailyDragContainer[2].childElementCount > 0) {
        resetdailyBtn.classList.remove('disable');
        ctadailyBtn.classList.remove('disable');
        clickActive = true;

    } else {
        resetdailyBtn.classList.add('disable');
        ctadailyBtn.classList.add('disable');
        clickActive = false;
    }

}
//check btn
ctadailyBtn.addEventListener('click', checkDailyAns);
function checkDailyAns() {
    let ans = 0;
    const checkContainer1 = document.querySelectorAll('.list-handled >.card');
    const checkContainer2 = document.querySelectorAll('.list-progress >.card');
    checkContainer1.forEach(element => {
        ans += Number(element.dataset.hour);

    });
    checkContainer2.forEach(element => {
        ans += Number(element.dataset.hour);
    });
    if (ans == 8) {
        clickActive = false;
        const removeDrag = document.querySelectorAll('.card');
        for (let i = 0; i < removeDrag.length; i++) {
            removeDrag[i].setAttribute('draggable', false);
        }
        turnNextPage(6);
        resetdailyBtn.classList.add('display-none');
        ctadailyBtn.classList.add('display-none');
        nextBtn[4].disabled = false;
    } else {
        resetDailyList();
        wrongAnswer(2);
    }
}

//memo
const memo=[document.querySelectorAll('.good-memo'),document.querySelectorAll('.be-better-memo'),document.querySelectorAll('.let-do-memo')];
const memoContainer=[document.querySelector('.good-container'),document.querySelector('.be-better-container'),document.querySelector('.let-do-container')];
const missionContainer=document.querySelector('.memo-container');
const retroBtn=document.getElementById('retro-btn');
const retroResetBtn=document.getElementById('retro-reset-btn');
let memoDragging = [null,null,null];
let momoActive=false;
//memo pos
let notes=[
{"top":"20px","left":"10px"},
{"top":"30px","left":"134px"},
{"top":"15px","left":"250px"},
{"top":"165px","left":"15px"},
{"top":"170px","left":"134px"},
{"top":"155px","left":"256px"},
{"top":"285px","left":"10px" },
{"top":"295px","left":"134px"},
{"top":"270px","left":"254px"},
]
const initialNote=document.querySelectorAll('.memo-container .memo'); 
for(let i=0;i<memo.length;i++)
{
    memo[i].forEach(element => {
         element.addEventListener('dragstart',(event)=>{
            memoDragging[i] = event.target;
            memoDragging[i].style.opacity = '0.5';
        });
    });
    memo[i].forEach(element => {
        element.addEventListener('dragend',(event)=>{
           memoDragging[i].style.opacity = '1';
           activeRetroBtn();
           memoDragging = [null,null,null];
       });
   });
    memoContainer[i].addEventListener('dragover', (event)=>{
    event.preventDefault();
   });
   memoContainer[i].addEventListener('drop', (event)=>{
    event.preventDefault();
    memoContainer[i].appendChild(memoDragging[i]);
    memoDragging[i].style.position="static";
   });
   missionContainer.addEventListener('dragover', (event)=>{
    event.preventDefault();
   });
   missionContainer.addEventListener('drop', (event)=>{
    event.preventDefault();
    missionContainer.appendChild(memoDragging[i]);
    memoDragging[i].style.position="absolute";
   });
    memoDragging = [null,null,null];

}
initialPos();
function initialPos()
{
    for(let i=0;i<initialNote.length;i++)
    {   
        initialNote[i].style.top=notes[i].top;
        initialNote[i].style.left=notes[i].left;
    }
}
//resetbtn
retroResetBtn.addEventListener('click',resetMemo);
function resetMemo()
{
    if( momoActive==true)
    {
        initialNote.forEach(element =>{
            missionContainer.appendChild(element);

            element.style.position="absolute";
           
        });
        memoDragging = [null,null,null];
    }
    activeRetroBtn();
}
function activeRetroBtn()
{
    if(memoContainer[0].childElementCount >0 || memoContainer[1].childElementCount >0 ||memoContainer[2].childElementCount >0)
    {
        retroResetBtn.classList.remove('disable');
        retroBtn.classList.remove('disable');
        momoActive=true;
    }
    else{
        retroResetBtn.classList.add('disable');
        retroBtn.classList.add('disable');
        momoActive=false;
    }
}
//check
retroBtn.addEventListener('click',checkRetroAns);
function checkRetroAns()
{
    let checkPoint1=0;
    let checkPoint2=0;
    let checkPoint3=0;
    const checkGood=document.querySelectorAll('.good-container .memo');
    const checkBetter=document.querySelectorAll('.be-better-container .memo');
    const checkDo=document.querySelectorAll('.let-do-container .memo');
    checkGood.forEach(element => {
        checkPoint1+=Number(element.dataset.order);
    });
    checkBetter.forEach(element => {
        checkPoint2+=Number(element.dataset.order);
    });
    checkDo.forEach(element => {
        checkPoint3+=Number(element.dataset.order);
    });
    if(checkPoint1==4 && checkPoint2==9 && checkPoint3==16)
    {
        turnNextPage(8);
    }
    else{
        wrongAnswer(3);
        resetMemo();
    }

}
