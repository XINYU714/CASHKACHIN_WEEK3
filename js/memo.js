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
{ "top":"30px","left":"134px"},
{"top":"15px","left":"256px"},
{"top":"165px","left":"10px"},
{"top":"170px","left":"134px"},
{"top":"155px","left":"256px"},
{"top":"285px","left":"10px" },
{"top":"295px","left":"134px"},
{"top":"270px","left":"256px"},
]
const initialNote=document.querySelectorAll('.memo-container .memo'); 
for(let i=0;i<memo.length;i++)
{
    memo[i].forEach(element => {
         element.addEventListener('dragstart',(event)=>{
            memoDragging[i] = event.target;
            memoDragging[i].style.opacity = '0.2';
        });
    });
    memo[i].forEach(element => {
        element.addEventListener('dragend',(event)=>{
           memoDragging[i].style.opacity = '1';
           activeRetroBtn();
       });
   });
    memoContainer[i].addEventListener('dragover', (event)=>{
    event.preventDefault();
    memoContainer[i].appendChild(memoDragging[i]);
    memoDragging[i].style.position="static";
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
        console.log('excellent');
        turnNextPage(8);
    }
    else{
        console.log('oh no');
        resetMemo();
    }

}
