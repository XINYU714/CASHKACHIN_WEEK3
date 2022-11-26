// dailysection 
const dailyDraggable=document.querySelectorAll('.list-ct .card[draggable="true"]');
const dailyDragContainer=document.querySelectorAll('.list-ct .drag-container');
const dailyListText=document.querySelectorAll('.list-title h2');
//btn
const resetdailyBtn=document.getElementById('daily-reset');
const ctadailyBtn=document.getElementById('daily-cta-btn');
let clickActive=false;
//daily drag event
dailyDraggable.forEach(dragelement=>{
    dragelement.addEventListener('dragstart',()=>{
        // dragelement = event.target;
        dragelement.classList.add('dragging');
    });
    dragelement.addEventListener('dragend',()=>{
        // dragelement.style.opacity = '1';
        dragelement.classList.remove('dragging');

        countCard();
        activeBtn();
    });

    dailyDragContainer.forEach(container => {
        container.addEventListener('dragover', (event)=>{
            event.preventDefault();
            const afterElement = getDragAfterElement(container, event.clientY,undragItem[0]);
            
            const draggable = document.querySelector('.dragging');

            if (afterElement == null) {
                container.appendChild(draggable);
              } else {
                container.insertBefore(draggable, afterElement);
              }
            

        
        });
    });

    });
    
    function getDragAfterElement(container, y,undragitem) {
        const draggableElements = [...container.querySelectorAll(undragitem)];
        return draggableElements.reduce((closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
          } else {
            return closest
          }
      
        }, { offset: Number.NEGATIVE_INFINITY }).element
      }
countCard();
function countCard()
{
    dailyListText[0].innerHTML=`TO DO  ${dailyDragContainer[0].childElementCount}`;
    dailyListText[1].innerHTML=`TO BE HANDLED ${dailyDragContainer[1].childElementCount}`;
    dailyListText[2].innerHTML=`IN PROGRESS ${dailyDragContainer[2].childElementCount}`;
};
// Resetevent 
resetdailyBtn.addEventListener('click',resetDailyList);
function resetDailyList()
{
    if(clickActive==true){
    dailyDraggable.forEach(element => {
    dailyDragContainer[0].appendChild(element);
    });
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
        clickActive=true;

    }
    else{
        resetdailyBtn.classList.add('disable');
        ctadailyBtn.classList.add('disable');
        clickActive=false;
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
    clickActive=false;
    const removeDrag=document.querySelectorAll('.card');
    for(let i=0;i<removeDrag.length;i++)
    {
        removeDrag[i].setAttribute('draggable',false);
    }
    turnNextPage(6);
    resetdailyBtn.classList.add('display-none');
    ctadailyBtn.classList.add('display-none');
    nextBtn[4].disabled = false;
   }
   else{
    resetDailyList();
    wrongAnswer(2);
   }
}