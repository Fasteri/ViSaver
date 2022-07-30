window.addEventListener("DOMContentLoaded", function(){

    const videoItem = document.querySelector('.video__item');
    const animItems = document.querySelectorAll('.elipse');
    const block = document.querySelector('.blocks');
    const blocks = document.querySelectorAll('.blocks__item');
    const blocksTitle = document.querySelectorAll('.blocks__title');
    const blocksDescr = document.querySelectorAll('.blocks__descr');


    animOnScroll();
    videoItem.pause();

    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
            let animItem = animItems[index];
            let animItemHeight = animItem.offsetHeight;
            let animItemOffset = offset(animItem).top;
            let animStart = 6;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < ( animItemOffset + animItemHeight)){
                animItem.classList.add('_animate');
            }

            
        }
    }

    // ------------- scroll pause / load
    function videoOnScroll(){
            let animItemHeight = videoItem.offsetHeight;
            let animItemOffset = offset(videoItem).top;
            let animStart = 2;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            // if (animItemHeight > window.innerHeight){
            //     animItemPoint = window.innerHeight - window.innerHeight / animStart;
            // }

            if ((scrollY > animItemOffset - animItemPoint ) && ( scrollY < animItemOffset + animItemPoint/1.5   )){
                videoItem.play();
            
            }
            else{
                videoItem.pause();
            }

               
            

            

    }

    function blocksAnim(){
        let animItemHeight = block.offsetHeight;
        let animItemOffset = offset(block).top;
        let animStart = 2;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
       

       


        if ((scrollY > animItemOffset - animItemPoint ) && ( scrollY < animItemOffset + animItemPoint/1.9 )){
            for (let index = 0; index < blocks.length; index++) {
                
                let b = blocks[index];  
                 b.classList.add('blocks_animate');
           
                let t = blocksTitle[index];
                setTimeout(() => {
                    t.classList.add('blocks_animate');
                }, 500);
      

                let d = blocksDescr[index];
                setTimeout(() => {
                    d.classList.add('blocks_animate');
                }, 1000);
   
             }
                      
            }
            else if (scrollY < animItemOffset - animItemPoint ) { 
                for (let index = 0; index < blocks.length; index++) {

                    let b = blocks[index];   
                    let t = blocksTitle[index];            
                    let d = blocksDescr[index];               
              
                    b.classList.remove('blocks_animate');   
                    setTimeout(() => {
                        t.classList.remove('blocks_animate');
                    }, 500);
                     

                 
                    setTimeout(() => {
                        d.classList.remove('blocks_animate');
                    }, 1000);
                    
                 }
            }
        
      

  
        
    }
    



    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX,
        scrollTop = window.scrollY;
        return{ top: rect.top + scrollTop, left: rect.left + scrollLeft };

        
    }
  
 

    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        if (value<400){
            document.querySelector('.promo__vector').style.transform = 'rotateZ(' + value*0.05 + 'deg)'+'translateY(' + '-'+ value*0.06 + '%)';

        }
        if (animItems.length > 0) {
            animOnScroll();
        }
        videoOnScroll();
        blocksAnim();
      
    });

// ---------------------------------------------------------
    let c = document.querySelectorAll('.scene').length;
    if (c > 0) {
        for ( i = 0; i!=c; i++){
            new Parallax(document.querySelectorAll('.scene')[i]);
        } 
    
    }
 
    
// ---------------------------------------------------------
    new Rellax('.rellax');

    new Rellax('.parellax', { horizontal: true});


// ---------------------------------------------------------




    






      
});

  
