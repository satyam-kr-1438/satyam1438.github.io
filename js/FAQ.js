let accordian_FAQ=document.getElementsByClassName("accordian_FAQ");
for(let i=0;i<accordian_FAQ.length;i++)
{
    accordian_FAQ[i].addEventListener("click",function()
    {
        accordian_FAQ[i].classList.toggle("active_accordian");
    })
}

 