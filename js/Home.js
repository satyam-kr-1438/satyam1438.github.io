let EE=document.getElementById("EE");
let LEC=document.getElementById("LEC");
let CL=document.getElementById("CL");
let KD=document.getElementById("KD");
let change_img=document.getElementById("change_img");
let change_heading=document.getElementById("change_heading");

EE.addEventListener("click",function(){
    change_img.src="images/eye_exam_700x700.jpg";
    change_heading.innerHTML="Eye Examination";
    LEC.classList.remove("ACTIVE");
    KD.classList.remove("ACTIVE");
    CL.classList.remove("ACTIVE");
    this.classList.add("ACTIVE");
})
LEC.addEventListener("click",function(){
    change_img.src="images/eye_correct_700x700.jpg";
    change_heading.innerHTML="Laser Eye Correction";
    EE.classList.remove("ACTIVE");
    CL.classList.remove("ACTIVE");
    KD.classList.remove("ACTIVE");
    this.classList.add("ACTIVE");

})
CL.addEventListener("click",function(){
    change_img.src="images/contact_lenses_700x700.jpg";
    change_heading.innerHTML="Contact Lenses";
    LEC.classList.remove("ACTIVE");
    KD.classList.remove("ACTIVE");
    EE.classList.remove("ACTIVE");
    this.classList.add("ACTIVE");

})
KD.addEventListener("click",function(){
    change_img.src="images/kids_eye_correct_700x700.jpg";
    change_heading.innerHTML="Kids Diagnostic";
    CL.classList.remove("ACTIVE");
    LEC.classList.remove("ACTIVE");
    EE.classList.remove("ACTIVE");
    this.classList.add("ACTIVE");

})