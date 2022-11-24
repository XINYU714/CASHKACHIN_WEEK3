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

// hover
const hoverForMore = document.querySelectorAll(".hover-for-info");
const moreInfo = document.querySelectorAll(".more-info");

console.log(hoverForMore, moreInfo);
for (let i = 0; i < hoverForMore.length; i++) {
  hoverForMore[i].addEventListener("mouseover", function () {
    moreInfo[i].style.display = "block";
  });
  hoverForMore[i].addEventListener("mouseout", function () {
    moreInfo[i].style.display = "none";
  });
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

// Scrum Master
const scrumMasterTask = document.querySelectorAll(
  ".task-container .tasks[draggable=true]"
);
const scrumMasterContainer = document.querySelectorAll(".task-container");

const submitBTN = document.getElementById("scrum-submit");
const resetBTN = document.getElementById("scrum-reset");

let dragged = null;

scrumMasterTask.forEach((drag) => {
  drag.addEventListener("dragstart", (event) => {
    dragged = event.target;
    dragged.style.opacity = "0.5";
  });
  drag.addEventListener("dragend", (event) => {
    dragged.style.opacity = "1";
    // sprintPlanningComplete();
    countIssue();
  });
  scrumMasterContainer.forEach((container) => {
    container.addEventListener("dragover", (event) => {
      event.preventDefault();
      container.appendChild(dragged);
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

// Error Message
const errorSection = document.querySelector("#error");
const errorMessage = document.querySelector("#error-message");
const errorMessageText = [
  "Please drag all Jira tasks in the container below.",
  "Wrong order. Check if the prioritization is arrangement in descending order.",
  "Please check all task cards in ‘To Do’ and ‘In Progress’ take total 8 hours.",
  "Each topic has two correct answers, please choose the memo which uses positive words.",
];

function tryAgain() {
  errorSection.classList.add("display-none");
}

function wrongAnswer(n) {
  errorSection.classList.remove("display-none");
  errorMessage.innerText = errorMessageText[n];
}
