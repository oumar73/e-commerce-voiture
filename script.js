// responsive de la navebarre
const navebarre=document.querySelector(".navebarre");
const btn_navebarre=document.querySelector(".btn_navbarre");
// fonction qui permet de verifier la largeur de l'ecran
const a_contacter_maintenant1=document.querySelector(".a_contacter_maintenant1");
const a_contacter_maintenant2=document.querySelector(".a_contacter_maintenant2");
const headeru=document.querySelector(".headeru");
function verifier_largeur(){
    if (window.innerWidth<=700){
        navebarre.style.display="none";
        // navebarre.classList.add("hidden");
        btn_navebarre.classList.remove("hidden");
        a_contacter_maintenant1.classList.remove("hidden");
        a_contacter_maintenant2.classList.add("hidden");
    }
    else{
        navebarre.style.display="flex";
        // navebarre.classList.remove("hidden");
        btn_navebarre.classList.add("hidden");
        a_contacter_maintenant1.classList.add("hidden");
        a_contacter_maintenant2.classList.remove("hidden");
    }
}
document.addEventListener("DOMContentLoaded",verifier_largeur())
window.addEventListener("resize",verifier_largeur);
btn_navebarre.addEventListener("click",()=>{
    if(navebarre.style.display==="flex"){
        btn_navebarre.innerHTML="&#9776";
        navebarre.style.opacity = "0";
        navebarre.style.width="0";
        setTimeout(()=>{
            navebarre.style.display="none";
        },1000)
        
    }
    else{
        navebarre.style.display="flex";
        navebarre.style.opacity = "0";
        navebarre.style.width="0";
        // navebarre.style.height="0";
        setTimeout(()=>{
            navebarre.style.opacity="1";
            navebarre.style.width = "50%";
            // navebarre.style.height="10px";
        },0)
        btn_navebarre.textContent="❌";
    }
})
// le bouton qui permet de remonter en haut apprès quelque scroll
const btn_remonter_haut=document.querySelector(".btn_remonter_haut");
btn_remonter_haut.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})
// programme qui fait apparaitre et disparaitre les bouton (remonter et whatsapp)
window.addEventListener("scroll",()=>{
    if (window.scrollY>200){
        btn_remonter_haut.classList.remove("hidden");
    }
    else{
        btn_remonter_haut.classList.add("hidden");
    }
})
// code des produit 
const detaile=document.querySelector(".detaile");
console.log(window.innerWidth);
// animation au scroll
const observateur1= new IntersectionObserver(entrys =>{
    entrys.forEach(entry=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show1");
        }
        // else{
        //     entry.target.classList.remove("show1");
        // }
    })
})
const elems_observatuer1=document.querySelectorAll(".elems_observatuer1");
elems_observatuer1.forEach(el => observateur1.observe(el));

// // animation au scroll 2
// const observateur2= new IntersectionObserver(entrys =>{
//     entrys.forEach(entry => {
//         if (entry.isIntersecting){
//             entry.target.classList.add("show2");
//         }
//         else{
//             entry.target.classList.remove("show2");
//         }
//     });
// })
// const elems_observateur2=document.querySelectorAll(".elems_observateur2");
// elems_observateur2.forEach(el => observateur2.observe(el));