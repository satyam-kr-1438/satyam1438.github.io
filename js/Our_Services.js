let RMC=document.getElementById("RMC");
let FBP=document.getElementById("FBP");
let MD=document.getElementById("MD");
let X_Ray=document.getElementById("X_Ray");
let change_heading=document.getElementById("change_heading");
let change_img=document.getElementById("change_img");


RMC.addEventListener("click",function()
{
    change_img.src="../images/pediatrics_1000x500.jpg";
    change_heading.innerHTML="Routine Medical Care";
    FBP.classList.remove("add_class");
    MD.classList.remove("add_class");
    X_Ray.classList.remove("add_class");
    this.classList.add("add_class");

})
FBP.addEventListener("click",function()
{
    change_img.src="../images/hematology_1000x500.jpg";
    change_heading.innerHTML="Full Blood Picture";
    RMC.classList.remove("add_class");
    MD.classList.remove("add_class");
    X_Ray.classList.remove("add_class");
    this.classList.add("add_class");
})
MD.addEventListener("click",function()
{
    change_img.src="../images/mri_1000x500.jpg";
    change_heading.innerHTML="MRI Diagnostic";
    RMC.classList.remove("add_class");
    FBP.classList.remove("add_class");
    X_Ray.classList.remove("add_class");
    this.classList.add("add_class");
})
X_Ray.addEventListener("click",function()
{
    change_img.src="../images/x-ray_1000x500.jpg";
    change_heading.innerHTML="X-Ray Diagnostic";
    MD.classList.remove("add_class");
    FBP.classList.remove("add_class");
    RMC.classList.remove("add_class");
    this.classList.add("add_class");
})


