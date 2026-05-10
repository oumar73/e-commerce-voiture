// le code de tous les produits se trouvant dans la page principale



// 1-la voiture toyota blanche1
const balise_image_toyota_blanc=document.querySelector(".image_toyota_blanc");
const toyota_blance_image_precdent=document.querySelector(".toyota_blance_image_precdent");
const toyota_blance_image_suivante=document.querySelector(".toyota_blance_image_suivante");
const imgage_toyota_blanche=[
    "toyota_blanc1/presentation.jpg",
    "toyota_blanc1/deriere.jpg",
    "toyota_blanc1/seize.jpg",
    "toyota_blanc1/moteur.jpg",
    "toyota_blanc1/coffre.jpg",
    "toyota_blanc1/compteur.jpg",
    "toyota_blanc1/volant.jpg"  
]
let nbr_images_toyota_blanche=0;
toyota_blance_image_suivante.addEventListener("click",()=>{
    nbr_images_toyota_blanche++;
    if (nbr_images_toyota_blanche>imgage_toyota_blanche.length-1){
        nbr_images_toyota_blanche=0;
        balise_image_toyota_blanc.src=imgage_toyota_blanche[nbr_images_toyota_blanche];
    }
    else{
        balise_image_toyota_blanc.src=imgage_toyota_blanche[nbr_images_toyota_blanche];
    }
})
toyota_blance_image_precdent.addEventListener("click",()=>{
    nbr_images_toyota_blanche--;
    if(nbr_images_toyota_blanche<0){
        nbr_images_toyota_blanche=imgage_toyota_blanche.length-1;
        balise_image_toyota_blanc.src=imgage_toyota_blanche[nbr_images_toyota_blanche];
    }
    else{
        balise_image_toyota_blanc.src=imgage_toyota_blanche[nbr_images_toyota_blanche];
    }
})
// la voiture toyota noire : modele 2
const balise_image_toyota_noire=document.querySelector(".balise_image_toyota_noire");
const toyota_noire_image_precedent=document.querySelector(".toyota_noire_image_precedent");
const toyota_noire_image_suivant=document.querySelector(".toyota_noire_image_suivant");
const imgage_toyota_noire=[
      "toyota_noire1/presentation.jpg",
      "toyota_noire1/cote_droite.jpg",
      "toyota_noire1/cote_gauche.jpg",
      "toyota_noire1/derriere.jpg",
      "toyota_noire1/derriere_droite.jpg",
      "toyota_noire1/derriere_gauche.jpg",
      "toyota_noire1/interieur_devant.jpg",
      "toyota_noire1/volant_cote_droite.jpg",
      "toyota_noire1/volant_cote_gauche.jpg",
      "toyota_noire1/seize.jpg",
      "toyota_noire1/moteur.jpg"
]
let nbr_images_toyota_noire=0;
toyota_noire_image_suivant.addEventListener("click",()=>{
    nbr_images_toyota_noire++;
    if(nbr_images_toyota_noire>imgage_toyota_noire.length-1){
        nbr_images_toyota_noire=0;
        balise_image_toyota_noire.src=imgage_toyota_noire[nbr_images_toyota_noire];
    }
    else{
        balise_image_toyota_noire.src=imgage_toyota_noire[nbr_images_toyota_noire];
    }
})
toyota_noire_image_precedent.addEventListener("click",()=>{
    nbr_images_toyota_noire--;
    if(nbr_images_toyota_noire<0){
        nbr_images_toyota_noire=imgage_toyota_noire.length-1;
        balise_image_toyota_noire.src=imgage_toyota_noire[nbr_images_toyota_noire];
    }
    else{
        balise_image_toyota_noire.src=imgage_toyota_noire[nbr_images_toyota_noire];
    }
})
// la voiture jeep gris noire et blanc
const balise_image_jeep_noire_gris=document.querySelector(".balise_image_jeep_noire_gris");
const jeep_noire_gris_image_precedent=document.querySelector(".jeep_noire_gris_image_precedent");
const jeep_noire_gris_image_suivant=document.querySelector(".jeep_noire_gris_image_suivant");
const image_jeep_noire_gris=[
      "jeep_gris_noire/presentation.jpg",
      "jeep_gris_noire/cote_gauche.jpg",
      "jeep_gris_noire/cote_droite.jpg",
      "jeep_gris_noire/derriere.jpg",
      "jeep_gris_noire/incline_derriere.jpg",
      "jeep_gris_noire/volant1.jpg",
      "jeep_gris_noire/volant2.jpg",
      "jeep_gris_noire/compteur.jpg",
      "jeep_gris_noire/seize1.jpg",
      "jeep_gris_noire/seize2.jpg",
      "jeep_gris_noire/camera.jpg"
]
let nbr_images_jeep_noire_gris=0;
jeep_noire_gris_image_suivant.addEventListener("click",()=>{
    nbr_images_jeep_noire_gris++;
    if(nbr_images_jeep_noire_gris>image_jeep_noire_gris.length-1){
        nbr_images_jeep_noire_gris=0;
        balise_image_jeep_noire_gris.src=image_jeep_noire_gris[nbr_images_jeep_noire_gris];
        console.log(nbr_images_jeep_noire_gris);
    }
    else{
        balise_image_jeep_noire_gris.src=image_jeep_noire_gris[nbr_images_jeep_noire_gris];
    }
    
})
jeep_noire_gris_image_precedent.addEventListener("click",()=>{
    nbr_images_jeep_noire_gris--;
    if(nbr_images_jeep_noire_gris<0){
        nbr_images_jeep_noire_gris=image_jeep_noire_gris.length-1;
        balise_image_jeep_noire_gris.src=image_jeep_noire_gris[nbr_images_jeep_noire_gris];
    }
    else{
        balise_image_jeep_noire_gris.src=image_jeep_noire_gris[nbr_images_jeep_noire_gris];
    }
})
// console.log(image_jeep_noire_gris.length-1);
console.log(window.innerWidth);