lucide.createIcons();

        // Navbar Scroll Logic
        const nav = document.getElementById('main-nav');
        const logoText = document.getElementById('logo-text');
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.querySelectorAll('.nav-link');
        const taglineText = document.getElementById('tagline-text');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled-nav');
                logoText.classList.remove('text-white');
                logoText.classList.add('text-slate-900');
              
                taglineText.classList.remove('text-white/80');
                taglineText.classList.add('text-slate-600');
                menuToggle.classList.remove('text-white');
                menuToggle.classList.add('text-slate-900');
                navLinks.forEach(link => {
                    link.classList.remove('text-white/90');
                    link.classList.add('text-slate-600');
                });
            } else {
                nav.classList.remove('scrolled-nav');
                logoText.classList.remove('text-slate-900');
                logoText.classList.add('text-white');
                menuToggle.classList.remove('text-slate-900');
                menuToggle.classList.add('text-white');
                taglineText.classList.remove('text-slate-600');
                taglineText.classList.add('text-white/80');
                navLinks.forEach(link => {
                    link.classList.remove('text-slate-600');
                    link.classList.add('text-white/90');
                });
            }
        });

        // Mobile Menu Logic
        const mobileMenu = document.getElementById('mobile-menu');
        const menuBtn = document.getElementById('menu-toggle');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close menu on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        // Simple Form Submission
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const box = document.createElement('div');
            box.className = "fixed top-20 right-6 bg-emerald-600 text-white p-4 rounded-lg shadow-xl z-[100] animate-bounce";
            box.innerText = "Inquiry sent successfully! We will contact you soon.";
            document.body.appendChild(box);
            setTimeout(() => box.remove(), 4000);
            e.target.reset();
        });
document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".nav-link");

    let path = window.location.pathname;

    let parts = path.split("/").filter(Boolean);

    let currentFolder = "";

    // Always take LAST folder (this is the key fix)
    if (parts.length === 0) {
        currentFolder = "AgroSail-Website/index"; // /
    } else if (parts.length === 1) {
        // could be indexpage OR direct folder
        if (parts[0].includes(".html")) {
            currentFolder = "AgroSail-Website/index";
        } else {
            currentFolder = parts[0];
        }
    } else {
        currentFolder = parts[parts.length - 1];
    }

    navLinks.forEach(link => {

        let href = link.getAttribute("href");

        let linkParts = href.split("/").filter(Boolean);
        let linkFolder = linkParts[linkParts.length - 1];

        // index link
        if (href === "../" || href === "./" || href === "/") {
            linkFolder = "AgroSail-Website/index";
        }

        if (linkFolder === currentFolder) {
            link.classList.add("text-emerald-600", "border-b-2", "border-emerald-600");
            link.classList.remove("text-slate-600");
        }

    });

});
//hover nav
//link.classList.add("active");

const isGitHub = window.location.hostname.includes("vahishi.github.io");

// replace with your repo name
const base = isGitHub ? "/AgroSail-Website" : "";

document.querySelectorAll("a[href^='/']").forEach(link => {
    link.setAttribute("href", base + link.getAttribute("href"));
});


document.addEventListener("DOMContentLoaded", () => {

    const heroImage = document.getElementById("hero-image");
    if (!heroImage) return;

    const images = [
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000",
        
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=2000"
    ];

    let index = 0;

    function startZoom() {
        // trigger zoom
        heroImage.style.transform = "scale(1.1)";
    }

    function changeImage() {
        // reset instantly
        heroImage.style.transition = "none";
        heroImage.style.transform = "scale(1)";

        // change image
        index = (index + 1) % images.length;
        heroImage.src = images[index];

        // wait a tiny bit → then animate
        setTimeout(() => {
            heroImage.style.transition = "transform 5s linear";
            heroImage.style.transform = "scale(1.1)";
        }, 50);
    }

    // initial zoom
    setTimeout(startZoom, 100);

    // loop
    setInterval(changeImage, 5000);

});


document.addEventListener("DOMContentLoaded", () => {

    const img1 = document.getElementById("about-img-1");
    const img2 = document.getElementById("about-img-2");

    if (!img1 || !img2) return;

    const images = [
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000",
        "../img/packaging.webp",
        "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=1000"
       
    ];

    let index = 0;
    let isImg1Active = true;

    setInterval(() => {
        index = (index + 1) % images.length;

        if (isImg1Active) {
            img2.src = images[index];
            img2.classList.remove("opacity-0");
            img1.classList.add("opacity-0");
        } else {
            img1.src = images[index];
            img1.classList.remove("opacity-0");
            img2.classList.add("opacity-0");
        }

        isImg1Active = !isImg1Active;

    }, 4000);

});