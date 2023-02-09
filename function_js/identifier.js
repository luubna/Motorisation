
const move = document.querySelector(".move_btn");
const connexion = document.querySelector(".connexion_btn");
const inscris = document.querySelector(".inscris_btn")
connexion.addEventListener("click",()=>{
    move.classList.add("move_btn_click");
    form_ins.classList.remove("form_inscris");
    form_con.classList.add("form_conne");
    move.innerHTML="connexion";

})
inscris.addEventListener("click",()=>{
    move.classList.remove("move_btn_click");
    form_ins.classList.add("form_inscris");
    form_con.classList.remove("form_conne");
    move.innerHTML="inscris";
})


const form_ins=document.querySelector(".inscr");
const form_con=document.querySelector(".conexx");

