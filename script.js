/* ==========================================
   DIGITTECH - SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       MENU LATERAL
    ========================== */

    const sideMenu = document.getElementById("sideMenu");
    const menuBtn = document.querySelector(".menu-btn");

    window.toggleMenu = function () {
        sideMenu.classList.toggle("active");
    };

    // Fermer le menu lorsqu'on clique sur un lien
    document.querySelectorAll("#sideMenu a").forEach(link => {
        link.addEventListener("click", () => {
            sideMenu.classList.remove("active");
        });
    });

    // Fermer le menu lorsqu'on clique ailleurs
    document.addEventListener("click", function (e) {

        if (
            sideMenu &&
            !sideMenu.contains(e.target) &&
            menuBtn &&
            !menuBtn.contains(e.target)
        ) {
            sideMenu.classList.remove("active");
        }

    });


    /* ==========================
       NAVBAR AU SCROLL
    ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.style.background = "rgba(8,12,30,.97)";
            navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";

        } else {

            navbar.style.background = "rgba(8,12,30,.90)";
            navbar.style.boxShadow = "none";

        }

    });


    /* ==========================
       APPARITION DES SECTIONS
    ========================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll("section,.card").forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });


    /* ==========================
       COMPTEURS
    ========================== */

    document.querySelectorAll(".stats h1").forEach(stat => {

        const text = stat.innerText;

        const value = parseInt(text);

        if (isNaN(value)) return;

        let count = 0;

        const step = Math.ceil(value / 70);

        const timer = setInterval(() => {

            count += step;

            if (count >= value) {

                stat.innerText = text;

                clearInterval(timer);

            } else {

                stat.innerText = count + "+";

            }

        }, 30);

    });


    /* ==========================
       BOUTON WHATSAPP
    ========================== */

    const floating = document.querySelector(".floating");

    if (floating) {

        floating.style.display = "none";

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {

                floating.style.display = "flex";

            } else {

                floating.style.display = "none";

            }

        });

    }


    /* ==========================
       DEFILEMENT FLUIDE
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});


/* ==========================================
   MODALS
========================================== */

function openModal(id) {

    const modal = document.getElementById(id);

    if (modal) {

        modal.style.display = "block";

        document.body.style.overflow = "hidden";

    }

}

function closeModal(id) {

    const modal = document.getElementById(id);

    if (modal) {

        modal.style.display = "none";

        document.body.style.overflow = "auto";

    }

}

window.onclick = function (event) {

    document.querySelectorAll(".modal").forEach(modal => {

        if (event.target === modal) {

            modal.style.display = "none";

            document.body.style.overflow = "auto";

        }

    });

};

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        document.querySelectorAll(".modal").forEach(modal => {

            modal.style.display = "none";

        });

        document.body.style.overflow = "auto";

    }

});


/* ==========================================
   AGRANDISSEMENT IMAGE
========================================== */

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", function () {

        const viewer = document.createElement("div");

        viewer.style.position = "fixed";
        viewer.style.left = "0";
        viewer.style.top = "0";
        viewer.style.width = "100%";
        viewer.style.height = "100%";
        viewer.style.background = "rgba(0,0,0,.9)";
        viewer.style.display = "flex";
        viewer.style.alignItems = "center";
        viewer.style.justifyContent = "center";
        viewer.style.zIndex = "99999";

        const image = document.createElement("img");

        image.src = this.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "20px";

        viewer.appendChild(image);

        document.body.appendChild(viewer);

        viewer.onclick = () => viewer.remove();

    });

});


/* ==========================================
   EFFET SUR LES CARTES
========================================== */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});