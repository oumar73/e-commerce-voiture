
// modele4
const balise_image_honda_noire=document.querySelector(".balise_image_honda_noire");
const honda_noire_image_precedent=document.querySelector(".honda_noire_image_precedent");
const honda_noire_image_suivant=document.querySelector(".honda_noire_image_suivant");
let honda_noire_image=[
    "../honda_noir/presentation.jpg",
    "../honda_noir/devant.jpg",
    "../honda_noir/devant1.jpg",
    "../honda_noir/devant2.jpg",
    "../honda_noir/incline_derrier_gauche.jpg",
    "../honda_noir/incline_derriere_droite.jpg",
    "../honda_noir/incline_devant_droite.jpg",
    "../honda_noir/incline_devant_gauche.jpg",
    "../honda_noir/moteur.jpg",
    "../honda_noir/moteur1.jpg",
    "../honda_noir/volant1.jpg",
    "../honda_noir/volant2.jpg",
    "../honda_noir/volant3.jpg",
    "../honda_noir/volant4.jpg",
    "../honda_noir/seize_toit.jpg",
    "../honda_noir/seize_devant.jpg",
    "../honda_noir/seize_arriere.jpg"
    // "image/honda_noir/.jpg",
    // "image/honda_noir/.jpg",
    // "image/honda_noir/.jpg",
]
let nbr_honda_noire_image=0;
honda_noire_image_suivant.addEventListener("click",()=>{
    nbr_honda_noire_image++;
    if(nbr_honda_noire_image>honda_noire_image.length-1){
        nbr_honda_noire_image=0;
        balise_image_honda_noire.src=honda_noire_image[nbr_honda_noire_image];
    }
    else{
        balise_image_honda_noire.src=honda_noire_image[nbr_honda_noire_image];
    }
})
honda_noire_image_precedent.addEventListener("click",()=>{
    nbr_honda_noire_image--;
    if(nbr_honda_noire_image<0){
        nbr_honda_noire_image=honda_noire_image.length-1;
        balise_image_honda_noire.src=honda_noire_image[nbr_honda_noire_image];
    }
    else{
        balise_image_honda_noire.src=honda_noire_image[nbr_honda_noire_image]
    }
})
// modele numéro 5 : honda bleu fumée
const balise_image_honda_bf=document.querySelector(".balise_image_honda_bf");
const honda_bf_image_precedent=document.querySelector(".honda_bf_image_precedent");
const honda_bf_image_suivant=document.querySelector(".honda_bf_image_suivant");
let honda_bf_image=[
    "../honda_bleu_fume/presentation.jpg",
    "../honda_bleu_fume/devant.jpg",
    "../honda_bleu_fume/arriere_gauche.jpg",
    "../honda_bleu_fume/derriere.jpg",
    "../honda_bleu_fume/volant1.jpg",
    "../honda_bleu_fume/volant.jpg",
    "../honda_bleu_fume/seize_arriere.jpg",
    "../honda_bleu_fume/seize_arriere1.jpg",
]
let nbr_honda_bf_image=0;
honda_bf_image_suivant.addEventListener("click",()=>{
    nbr_honda_bf_image++;
    if(nbr_honda_bf_image>honda_bf_image.length-1){
        nbr_honda_bf_image=0;
        balise_image_honda_bf.src=honda_bf_image[nbr_honda_bf_image];
    }
    else{
        balise_image_honda_bf.src=honda_bf_image[nbr_honda_bf_image];
    }
})
honda_bf_image_precedent.addEventListener("click",()=>{
    nbr_honda_bf_image--;
    if(nbr_honda_bf_image<0){
        nbr_honda_bf_image=honda_bf_image.length-1;
        balise_image_honda_bf.src=honda_bf_image[nbr_honda_bf_image];
    }
    else{
        balise_image_honda_bf.src=honda_bf_image[nbr_honda_bf_image]
    }
})
// modele numéro 5 : honda bleu fumée
const balise_image_mitsibuchi_rouge=document.querySelector(".balise_image_mitsibuchi_rouge");
const mitsibuchi_rouge_image_precedent=document.querySelector(".mitsibuchi_rouge_image_precedent");
const mitsibuchi_rouge_image_suivant=document.querySelector(".mitsibuchi_rouge_image_suivant");
let mitsibuchi_rouge_image=[
    "../mitsibuchi_rouge/presentation.jpg",
    "../mitsibuchi_rouge/derriere.jpg",
    "../mitsibuchi_rouge/coffre.jpg",
    "../mitsibuchi_rouge/coffre1.jpg",
    "../mitsibuchi_rouge/porte_droite.jpg",
    "../mitsibuchi_rouge/porte_gauche.jpg",
    "../mitsibuchi_rouge/moteur.jpg",
    "../mitsibuchi_rouge/moteur1.jpg",
    "..//mitsibuchi_rouge/moteur3.jpg",
    "../mitsibuchi_rouge/detail.jpg",
]
let nbr_mitsibuchi_rouge_image=0;
mitsibuchi_rouge_image_suivant.addEventListener("click",()=>{
    nbr_mitsibuchi_rouge_image++;
    if(nbr_mitsibuchi_rouge_image>mitsibuchi_rouge_image.length-1){
        nbr_mitsibuchi_rouge_image=0;
        balise_image_mitsibuchi_rouge.src=mitsibuchi_rouge_image[nbr_mitsibuchi_rouge_image];
    }
    else{
        balise_image_mitsibuchi_rouge.src=mitsibuchi_rouge_image[nbr_mitsibuchi_rouge_image];
    }
})
mitsibuchi_rouge_image_precedent.addEventListener("click",()=>{
    nbr_mitsibuchi_rouge_image--;
    if(nbr_mitsibuchi_rouge_image<0){
        nbr_mitsibuchi_rouge_image=mitsibuchi_rouge_image.length-1;
        balise_image_mitsibuchi_rouge.src=mitsibuchi_rouge_image[nbr_mitsibuchi_rouge_image];
    }
    else{
        balise_image_mitsibuchi_rouge.src=mitsibuchi_rouge_image[nbr_mitsibuchi_rouge_image]
    }
})

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



// le bouton pour remonter
const btn_remonter_haut=document.querySelector(".btn_remonter_haut");
btn_remonter_haut.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior : "smooth"
    })
})
