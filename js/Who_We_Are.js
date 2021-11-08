let Ped=document.getElementById("Ped");
let Hem=document.getElementById("Hem");
let MD=document.getElementById("MD");
let X_Ray=document.getElementById("X_Ray");
let change_img=document.getElementById("change_img");
let change_heading=document.getElementById("change_heading");

Ped.addEventListener("click",function(){
    change_img.src="images/pediatrics_700x700.jpg";
    change_heading.innerHTML="Pediatrics";
    Hem.classList.remove("ACTIVE");
    X_Ray.classList.remove("ACTIVE");
    MD.classList.remove("ACTIVE");
    this.classList.add("ACTIVE");
})
Hem.addEventListener("click",function(){
    change_img.src="images/hematology_700x700.jpg";
    change_heading.innerHTML="Hematology";
    Ped.classList.remove("ACTIVE");
    MD.classList.remove("ACTIVE");
    X_Ray.classList.remove("ACTIVE");
    this.classList.add("ACTIVE");

})
MD.addEventListener("click",function(){
    change_img.src="images/mri_700x700.jpg";
    change_heading.innerHTML="MRI Diagnostic";
    Hem.classList.remove("ACTIVE");
    X_Ray.classList.remove("ACTIVE");
    Ped.classList.remove("ACTIVE");
    this.classList.add("ACTIVE");

})
X_Ray.addEventListener("click",function(){
    change_img.src="images/x-ray_700x700.jpg";
    change_heading.innerHTML="X-Ray Diagnostic";
    MD.classList.remove("ACTIVE");
    Hem.classList.remove("ACTIVE");
    Ped.classList.remove("ACTIVE");
    this.classList.add("ACTIVE");

})