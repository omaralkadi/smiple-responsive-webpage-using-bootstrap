var Btn=document.querySelector("#topBtn");

var spinner=document.querySelector("#spin");

window.onscroll=function(){

        if(document.documentElement.scrollTop>500)
        {
            Btn.style.display="block";

        }
        else{
             Btn.style.display="none";

        }
}

Btn.addEventListener("click",function(){

    window.scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })

});

window.onload=function(){

    document.body.style.overflow="hidden";

    setTimeout(function(){
        document.body.style.overflow="auto";
        spinner.style.display="none";

    },3000)


}



