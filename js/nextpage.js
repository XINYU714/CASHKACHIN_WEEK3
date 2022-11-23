const allSection=document.querySelectorAll('.container >section');
const preBtn=document.querySelectorAll('.arrow-wrap .pre');
const nextBtn=document.querySelectorAll('.arrow-wrap .next');
const againBtn=document.getElementById('again');
let currentIndex=0;
againBtn.onclick=()=>{
    window.location.reload();
}
