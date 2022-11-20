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

// dailysection
let startValue = 0;
const listCard0 = {
  ele: document.querySelectorAll(".list-todo .card")[0],
  hour: 2,
};
const listCard1 = {
  ele: document.querySelectorAll(".list-todo .card")[1],
  hour: 4,
};
const listCard2 = {
  ele: document.querySelectorAll(".list-todo .card")[2],
  hour: 4,
};
const listCard3 = {
  ele: document.querySelectorAll(".list-todo .card")[3],
  hour: 2,
};
//if else hour =8

// reset btn
const resetDaily = document.getElementById("daily-reset");
