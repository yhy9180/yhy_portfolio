const $wrap = document.querySelector('#wrap');
const btns = document.querySelectorAll(".btns li");
const len = btns.length;    

for(let i=0; i<btns.length; i++){
    
    btns[i].addEventListener("click",  e=>{               
        e.preventDefault();

        for(let k=0; k<btns.length; k++){
            btns[k].className="";           
        }
        e.currentTarget.className = "on";
        
        $wrap.className='box'+i;
    })   
}   
   

