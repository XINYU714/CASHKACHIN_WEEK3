const allSection = document.querySelectorAll(".inner-wrap >section");
const nextBtn = document.querySelectorAll(".arrow-wrap .next");
const preBtn = document.querySelectorAll(".arrow-wrap .pre");
const againBtn = document.getElementById("again");
let undragItem=['.card:not(.dragging)','.tasks:not(.dragging)'];
for (let i = 0; i < preBtn.length; i++) {
  preBtn[i].onclick = () => turnPrePage(i + 2);
}
for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].onclick = () => turnNextPage(i + 2);
}
function turnNextPage(n)
{
   allSection[n+1].style.transition='0.5s'
   allSection[n+1].style.transform=`translateX(calc(-1200px * ${n}))`;

}
function turnPrePage(x) {
  let tranSec=x * 0.5;
  allSection[x+1].style.transition=tranSec+'s';
  allSection[x + 1].style.transform = `translateX(calc(1200px * ${x}))`;
}
//dragging order
function getDragAfterElement(container, y, undragitem) {
  const draggableElements = [...container.querySelectorAll(undragitem)];
  return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
          return {
              offset: offset,
              element: child
          }
      } else {
          return closest
      }
  }, {
      offset: Number.NEGATIVE_INFINITY
  }).element
}
const screen = document.createElement('div');
const img = document.createElement('img');
img.src="./src/computer.svg";
let newContent = document.createElement('p');
newContent.textContent="You have to use a device with over 1200 pixels to have a better experience.";
screen.classList.add('screen-max', 'display-none');
newContent.classList.add('h4');
window.onresize=()=>resizeScreen();
screen.appendChild(img);
screen.appendChild(newContent);
document.body.appendChild(screen);
function resizeScreen(){
    if (window.screen.width<1200)
    {
      screen.classList.remove('display-none');
    }
    else{
      screen.classList.add('display-none');
    }
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
againBtn.onclick=()=>{
  window.location.reload();
}

