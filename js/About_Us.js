let Rating_Timer1=document.getElementById("Rating_Timer1");
let Rating_Timer2=document.getElementById("Rating_Timer2");
let Rating_Timer3=document.getElementById("Rating_Timer3");
let Rating_Timer4=document.getElementById("Rating_Timer4");

let clearinterval;
let count1=8972;
let count2=11;
let count3=470;
let count4=159;
function startTimer()
{
    if(count1==9357)
    {
        clearinterval(clearinterval);
    }
    else{
        Rating_Timer1.innerHTML=count1++;
        Rating_Timer2.innerHTML=count2++;
        Rating_Timer3.innerHTML=count3++;
        Rating_Timer4.innerHTML=count4++;

    }
}
window.addEventListener("scroll",function()
{
    if(window.pageYOffset>1500)
    {
        clearinterval=setInterval(startTimer,10);
    }
    else{
        clearinterval(clearinterval);
    }
})

            