// Fill User Name
function fillUserName() {
  var user_name = document.getElementById("user_name").value;
  document.getElementById("fill-user-name").innerText = document.getElementById(
    "fill-user-name-last"
  ).innerText = user_name;
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
const poSubmit = document.getElementById("po-submit");
const poTextArea = document.getElementById("po-textarea");
const dynamicTask = document.getElementById("dynamic-task");
function poTextarea() {
  poSubmit.classList.remove("disable");
}

function poSubmitFunc() {
  dynamicTask.innerText = poTextArea.value;
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
let scrumResult = true;
function scrumSubmit() {
  if ((scrumMasterContainer[1].childElementCount = 5)) {
    let testPriority = [];
    document.querySelectorAll(".priority-no").forEach((no) => {
      testPriority.push(Number(no.innerText));
    });

    testPriority.forEach((test, i, arr) => {
      if (test < arr[i + 1]) {
        scrumResult = false;
      }
    });
  } else {
    scrumResult = false;
  }

  if (scrumResult == true) {
    console.log("you success");
  } else {
    console.log("you faild");
    resetScrumPriority();
    scrumResult = true;
  }
}

function resetScrumPriority() {
  scrumMasterTask.forEach((task) => {
    scrumMasterContainer[0].appendChild(task);
  });
  submitBTN.classList.add("disable");
  resetBTN.classList.add("disable");
}
