var iconBlock=document.querySelector('.share'),
    icon=document.querySelector('.sharesvg'),
    media=document.querySelector('.inside');

    iconBlock.addEventListener('click',function(){

    
        if(media.style.visibility==""){
            media.style.visibility='visible';

            this.style.background="#48556A";
            icon.style.fill="#e0dfdf";
            return
        }

        media.style.visibility="hidden";
        this.style.background="";
        icon.style.fill="";

    })