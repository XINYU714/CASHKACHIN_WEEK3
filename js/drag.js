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
