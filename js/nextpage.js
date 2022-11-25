const allSection = document.querySelectorAll(".inner-wrap >section");
const nextBtn = document.querySelectorAll(".arrow-wrap .next");
const preBtn = document.querySelectorAll(".arrow-wrap .pre");
const againBtn = document.getElementById("again");
let currentIndex = 0;
for (let i = 0; i < preBtn.length; i++) {
  preBtn[i].onclick = () => turnPrePage(i + 2);
}
for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].onclick = () => turnNextPage(i + 2);
}

for(let i=0;i<nextBtn.length;i++)
{
    nextBtn[i].onclick=()=>turnNextPage(i+2);
}
againBtn.onclick=()=>{
    window.location.reload();
}
function turnNextPage(n)
{

    allSection[n+1].style.transform=`translateX(calc(-1200px * ${n}))`;
    console.log(allSection[n+1].style.transform);

}
function turnPrePage(x) {
  allSection[x + 1].style.transform = `translateX(calc(1200px * ${x}))`;
  console.log(allSection[x + 1].style.transform);
}
//max 1200px
const screen = document.createElement('div');
const img = document.createElement('img');
img.src="../src/computer.svg";
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
}