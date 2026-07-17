/* ===========================================
   HERO TYPING EFFECT
=========================================== */

const words = [
    "UX Writer.",
    "SEO Strategist.",
    "Content Designer.",
    "AI Prompt Engineer.",
    "Market Researcher.",
    "Digital Copywriter."
];

const heroTitle = document.querySelector(".hero h1");

let wordIndex = 0;

function changeTitle() {

    heroTitle.style.opacity = 0;

    setTimeout(() => {

        heroTitle.innerHTML =
            `Psychology meets<br>${words[wordIndex]}`;

        heroTitle.style.opacity = 1;

        wordIndex++;

        if (wordIndex >= words.length)
            wordIndex = 0;

    }, 400);

}

setInterval(changeTitle, 2500);



/* ===========================================
   SCROLL REVEAL
=========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});



/* ===========================================
   STATS COUNTER
=========================================== */

const counters = document.querySelectorAll(".stats h3");

counters.forEach(counter => {

    const update = () => {

        const target = Number(counter.innerText.replace(/\D/g, ""));

        let current = Number(counter.dataset.count || 0);

        const increment = target / 50;

        if (current < target) {

            current += increment;

            counter.dataset.count = current;

            if (counter.innerText.includes("%")) {

                counter.innerText = Math.floor(current) + "%";

            }

            else if (counter.innerText.includes("+")) {

                counter.innerText = Math.floor(current) + "+";

            }

            else {

                counter.innerText = Math.floor(current);

            }

            requestAnimationFrame(update);

        }

        else {

            if (counter.innerText.includes("%"))
                counter.innerText = target + "%";

            else if (counter.innerText.includes("+"))
                counter.innerText = target + "+";

            else
                counter.innerText = target;

        }

    };

    observer.observe(counter);

    update();

});



/* ===========================================
   NAVBAR BACKGROUND
=========================================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "rgba(10,10,10,.90)";

    }

    else {

        header.style.background = "rgba(10,10,10,.45)";

    }

});



/* ===========================================
   ACTIVE MENU
=========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 180;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* ===========================================
   FLOATING CARDS
=========================================== */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 18;

        const rotateY = (x - rect.width / 2) / 18;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";

    });

});



/* ===========================================
   SMOOTH SCROLL
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



/* ===========================================
   PARALLAX HERO
=========================================== */

window.addEventListener("mousemove", e => {

    const hero = document.querySelector(".hero");

    const x = (window.innerWidth / 2 - e.pageX) / 90;
    const y = (window.innerHeight / 2 - e.pageY) / 90;

    hero.style.backgroundPosition = `${x}px ${y}px`;

});



/* ===========================================
   BUTTON RIPPLE
=========================================== */

document.querySelectorAll(".btn-primary,.btn-secondary")
.forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";

        circle.style.left =
            e.offsetX - diameter / 2 + "px";

        circle.style.top =
            e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        },600);

    });

});
