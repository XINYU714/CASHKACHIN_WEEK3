const allSection=document.querySelectorAll('.inner-wrap >section');
const nextBtn=document.querySelectorAll('.arrow-wrap .next');
const preBtn=document.querySelectorAll('.arrow-wrap .pre');
const againBtn=document.getElementById('again');
let currentIndex=0;
for(let i=0;i<preBtn.length;i++)
{
    preBtn[i].onclick=()=>turnPrePage(i+2);
}
// nextBtn 0 1
// nextBtn[i].onclick=()=>turnNextPage(i+2);
nextBtn[0].onclick=()=>turnNextPage(2);
nextBtn[1].onclick=()=>turnNextPage(3);
nextBtn[5].onclick=()=>turnPrePage(7);
againBtn.onclick=()=>{
    window.location.reload();
}
function turnNextPage(n)
{

    allSection[n+1].style.transform=`translateX(calc(-1200px * ${n}))`;
    console.log(allSection[n+1].style.transform);
}
function turnPrePage(x)
{
    allSection[x+1].style.transform=`translateX(calc(1200px * ${x}))`;
    console.log(allSection[x+1].style.transform);
}

