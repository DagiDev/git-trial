const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let aa=0;

next.addEventListener('click', () => {
 aa++
 if(aa>3){
     aa=3
 }
    circles[aa].classList.add('active');
    progress.style.width= (aa) / (circles.length - 1) *100 + '%';
    buttonDisable();
})

prev.addEventListener('click', () => {
     if(aa<1){
      aa=1;
    }
    circles[aa].classList.remove('active');
    aa--;
    progress.style.width= (aa) / (circles.length - 1) * 100 + "%";
    buttonDisable();
  
})
function buttonDisable(){
    if(aa < 1){
        prev.disabled = true;
    }else if(aa === 3){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}


