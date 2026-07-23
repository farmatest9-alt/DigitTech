/* ==========================
   DIGITTECH - SCRIPT.JS
========================== */

// ===== Barre de navigation =====

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5,10,35,0.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        navbar.style.background = "rgba(0,0,0,.5)";
        navbar.style.boxShadow = "none";
    }
});


// ===== Animation d'apparition =====

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:0.2});


document.querySelectorAll("section,.card").forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ===== Compteur animé =====

const stats = document.querySelectorAll(".stats h1");

stats.forEach(stat=>{

const finalValue = stat.innerText;

const number = parseInt(finalValue);

if(isNaN(number)) return;

let count = 0;

const speed = Math.ceil(number/80);

const timer = setInterval(()=>{

count += speed;

if(count >= number){

stat.innerText = finalValue;

clearInterval(timer);

}else{

stat.innerText = count + "+";

}

},30);

});


// ===== Boutons =====

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// ===== Message de bienvenue =====

window.addEventListener("load",()=>{

setTimeout(()=>{

alert("👋 Bienvenue sur DigitTech !\n\nRejoignez gratuitement notre Groupe d'Annonce WhatsApp pour découvrir nos formations et recevoir toutes les nouveautés.");

},1000);

});


// ===== Bouton WhatsApp flottant =====

const whatsapp = document.querySelector(".floating");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

whatsapp.style.display="flex";

}else{

whatsapp.style.display="none";

}

});


// ===== Défilement fluide =====

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});