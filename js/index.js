
                                        //   NAV JQUERY PLUGIN 

$(document).ready(function () {
    $('#menu-toggle').click(function(){
    if($('#menu').hasClass('open')){
    $('#menu').removeClass('open');
    $('#menu-toggle').removeClass('open');
    }else{
    $('#menu').addClass('open');
    $('#menu-toggle').addClass('open');
    }
    });
    });

    let Toggle=document.getElementById("menu-toggle");
    window.addEventListener("scroll",function()
    {
        if(window.pageYOffset>200)
        {
            Toggle.style.right="0px";
        }
        else{
            Toggle.style.right="-100px";
        }
    })



                            //  OWL CAROUSEL 
    
$(document).ready(function()
{
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        nav: true,
       margin: 30,
         mouseDrag:true,
         touchDrag:true,
         slideBy:3,
         autoplay: true,
         autoplayTimeout: 3050,
         responsive:{
            0:{
               items:1,
               nav:true
              },
             800:{
                items:2,
                nav:true
              },
              1200:{
                items:3,
                nav:true
              },           
           }
    });
});

                                                    //   SCROLL UP 
 window.addEventListener("scroll",function(){
     if(window.pageYOffset>300){
         let store=document.getElementsByClassName("scrollUp");
         for(let i=0;i<store.length;i++){
             store[i].style.display="block";
         }
     }
     else{
        let store=document.getElementsByClassName("scrollUp");
        for(let i=0;i<store.length;i++){
            store[i].style.display="none";
        }     }
 })
$(function ()
{
    $(".scrollUp").click(function(){
        window.scrollTo(0,0);
    })
    $(".scrollUp").mouseenter(function()
    {
        $(this).css(
            {
                "opacity":"0.7"
            }
        )
    })
    $(".scrollUp").mouseleave(function()
    {
        $(this).css(
            {
                "opacity":"1"
            }
        )
    })
});