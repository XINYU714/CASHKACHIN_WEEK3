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

// Scrum Master
const scrumMasterTask = document.querySelectorAll(
  ".task-container .tasks[draggable=true]"
);
const scrumMasterContainer = document.querySelectorAll(".task-container");
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
  ).innerText = `issue ${scrumMasterContainer[1].childElementCount}`;
}

countIssue();
