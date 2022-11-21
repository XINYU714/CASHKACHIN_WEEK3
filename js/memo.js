const goodMemo=document.querySelectorAll('.good-memo');
const bebetterMemo=document.querySelectorAll('.be-better-memo');
const letdoMemo=document.querySelectorAll('.let-do-memo');
// const betterContainer=
// const DoContainer=document.querySelector('.let-do-container');
const memo=[document.querySelectorAll('.good-memo'),document.querySelectorAll('.be-better-memo'),document.querySelectorAll('.let-do-memo')];
const memoContainer=[document.querySelector('.good-container'),document.querySelector('.be-better-container'),document.querySelector('.let-do-container')];
let memoDragging = null;
for(let i=0;i<memo.length;i++)
{
    memo[i].forEach(element => {
         element.addEventListener('dragstart',(event)=>{
            memoDragging = event.target;
            memoDragging.style.opacity = '0.2';
            console.log('xxx');
        });
    });
    memo[i].forEach(element => {
        element.addEventListener('dragend',(event)=>{
           memoDragging.style.opacity = '1';
           console.log('sss', element);
       });
   });
   memoContainer[i].addEventListener('dragover', (event)=>{
        event.preventDefault();
        memoContainer[i].appendChild(memoDragging);
        console.log('qqq');
    
    });

}
