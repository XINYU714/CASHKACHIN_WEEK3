// dailysection 
const dailyDraggable=document.querySelectorAll('.list-ct .card[draggable="true"]');
const dailyDragContainer=document.querySelectorAll('.list-ct .drag-container');
const todoContainer=document.querySelector('.list-todo');
const dailyListText=document.querySelectorAll('.list-title h2');
//btn
const resetdailyBtn=document.getElementById('daily-reset');
const ctadailyBtn=document.getElementById('daily-cta-btn');
let dailyDragging = null;
let clickActice=false;
//daily drag event
dailyDraggable.forEach(dragelement=>{
    dragelement.addEventListener('dragstart',(event)=>{
        dailyDragging = event.target;
        dailyDragging.style.opacity = '0.2';
    });
    dragelement.addEventListener('dragend',(event)=>{
        dailyDragging.style.opacity = '1';
        countCard();
        activeBtn();
    });
    dailyDragContainer.forEach(container => {
        container.addEventListener('dragover', (event)=>{
            event.preventDefault();
            container.appendChild(dailyDragging);
        
        });
    });

    });
countCard();
function countCard()
{
    dailyListText[0].innerHTML="TO DO"+" "+ dailyDragContainer[0].childElementCount;
    dailyListText[1].innerHTML="TO BE HANDLED"+" "+ dailyDragContainer[1].childElementCount;
    dailyListText[2].innerHTML="IN PROGRESS"+" "+ dailyDragContainer[2].childElementCount;
    // for(let i=0;i<dailyListText.length -1;i++)
    // {
    //    dailyListText[i].innerHTML.replace('0',' ');
    // }
};
// Resetevent 
resetdailyBtn.addEventListener('click',resetDailyList);
function resetDailyList()
{
    if(clickActice==true){
    dailyDraggable.forEach(element => {
    dailyDragContainer[0].appendChild(element);
    });
    console.log('reset success');
    activeBtn();
    countCard();
}
}
//active two btn and add click event
function activeBtn()
{
    if(dailyDragContainer[1].childElementCount >0 || dailyDragContainer[2].childElementCount >0)
    {
        resetdailyBtn.classList.remove('disable');
        ctadailyBtn.classList.remove('disable');
        clickActice=true;

    }
    else{
        resetdailyBtn.classList.add('disable');
        ctadailyBtn.classList.add('disable');
        clickActice=false;

    }
   
}
//check btn
ctadailyBtn.addEventListener('click',checkDailyAns);
function checkDailyAns()
{
    let ans=0;
    const checkContainer1=document.querySelectorAll('.list-handled >.card');
    const checkContainer2=document.querySelectorAll('.list-progress >.card');
    checkContainer1.forEach(element => {
        ans+=Number(element.dataset.hour);
       
    });
    checkContainer2.forEach(element => {
        ans+=Number(element.dataset.hour);
    });
   if(ans==8)
   {
    console.log('ans is correct');
    //add arrow btn active
   }
   else{
    console.log('please try again');
    resetDailyList();
   }
}