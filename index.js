const btns=document.querySelectorAll(".set");

btns.forEach(e=>{
    e.addEventListener("click", e=>{

       if(e.target.classList[0]=='w'){
            var wSound= new Audio('sounds/tom-1.mp3');
            wSound.play();
            e.target.classList.add("pressed");
            setTimeout(()=>{
               e.target.classList.remove("pressed");
            },200)
          }
       else if(e.target.classList[0]=='a'){
            var wSound= new Audio('sounds/tom-2.mp3');
            wSound.play();
            e.target.classList.add("pressed");
            setTimeout(()=>{
               e.target.classList.remove("pressed");
            },200)
       }
       else if(e.target.classList[0]=='s'){
            var wSound= new Audio('sounds/tom-3.mp3');
            wSound.play();
            e.target.classList.add("pressed");
            setTimeout(()=>{
               e.target.classList.remove("pressed");
            },200)
       }
       else if(e.target.classList[0]=='d'){
             var wSound= new Audio('sounds/tom-4.mp3');
              wSound.play();
              e.target.classList.add("pressed");
            setTimeout(()=>{
               e.target.classList.remove("pressed");
            },200)
        }
        else if(e.target.classList[0]=='j'){
             var wSound= new Audio('sounds/crash.mp3');
             wSound.play();
             e.target.classList.add("pressed");
            setTimeout(()=>{
               e.target.classList.remove("pressed");
            },200)
        }  
        else if(e.target.classList[0]=='k'){
            var wSound= new Audio('sounds/kick-bass.mp3');
            wSound.play();
            e.target.classList.add("pressed");
            setTimeout(()=>{
               e.target.classList.remove("pressed");
            },200)
        }  
       else if(e.target.classList[0]=='l'){
            var wSound= new Audio('sounds/snare.mp3');
            wSound.play();
            e.target.classList.add("pressed");
            setTimeout(()=>{
               e.target.classList.remove("pressed");
            },200)
        }   
    })
}); 

    document.addEventListener("keypress", ev=>{

       if(ev.key == 'w'){
            var wSound= new Audio('sounds/tom-1.mp3');
            wSound.play();
            ev.target.classList.add("pressed");
            setTimeout(()=>{
               ev.target.classList.remove("pressed");
            },200)
       }
       else if( ev.key =='a'){
            var wSound= new Audio('sounds/tom-2.mp3');
            wSound.play();
            ev.target.classList.add("pressed");
            setTimeout(()=>{
               ev.target.classList.remove("pressed");
            },200)
       }
       else if(ev.key == 's'){
            var wSound= new Audio('sounds/tom-3.mp3');
            wSound.play();
            ev.target.classList.add("pressed");
            setTimeout(()=>{
               ev.target.classList.remove("pressed");
            },200)
       }
       else if(ev.key =='d'){
        
             var wSound= new Audio('sounds/tom-4.mp3');
              wSound.play();
              ev.target.classList.add("pressed");
            setTimeout(()=>{
               ev.target.classList.remove("pressed");
            },200)
        }
        else if(ev.key =='j'){
             var wSound= new Audio('sounds/crash.mp3');
             wSound.play();
             ev.target.classList.add("pressed");
            setTimeout(()=>{
               ev.target.classList.remove("pressed");
            },200)
        }  
        else if(ev.key =='k'){
            var wSound= new Audio('sounds/kick-bass.mp3');
            wSound.play();
            ev.target.classList.add("pressed");
            setTimeout(()=>{
               ev.target.classList.remove("pressed");
            },200)
        }  
       else if(ev.key =='l'){
            var wSound= new Audio('sounds/snare.mp3');
            wSound.play();

            ev.classList.add("pressed");
            setTimeout(()=>{
               ev.classList.remove("pressed");
            },200)
        }   
    });
