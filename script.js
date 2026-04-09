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
        currentFolder = "home"; // /
    } else if (parts.length === 1) {
        // could be homepage OR direct folder
        if (parts[0].includes(".html")) {
            currentFolder = "home";
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

        // Home link
        if (href === "../" || href === "./" || href === "/") {
            linkFolder = "home";
        }

        if (linkFolder === currentFolder) {
            link.classList.add("text-emerald-600", "border-b-2", "border-emerald-600");
            link.classList.remove("text-slate-600");
        }

    });

});

link.classList.add("active");