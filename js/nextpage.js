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

window.onresize=()=>resizeScreen();
function resizeScreen(){
    
    if (window.screen.width<1200 && tool==0)
    {
        const screen = document.createElement('div');
        const img = document.createElement('img');
        img.src="../src/computer.svg";
        let newContent = document.createTextNode('p');
        newContent.textContent="You have to use a device with over 1200 pixels to have a better experience.";
        screen.classList.add('screen-max');
        screen.appendChild(img);
        screen.appendChild(newContent);
        document.body.appendChild(screen);
        console.log('ssfs');
        return resize==false;
    }

}

