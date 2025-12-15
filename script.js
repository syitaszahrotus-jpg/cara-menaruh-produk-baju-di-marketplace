// Smooth scroll navbar
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Animasi muncul saat scroll (step)
const steps = document.querySelectorAll(".step");

window.addEventListener("scroll", () => {
    steps.forEach(step => {
        const posisi = step.getBoundingClientRect().top;
        const tinggiLayar = window.innerHeight;

        if (posisi < tinggiLayar - 100) {
            step.style.opacity = "1";
            step.style.transform = "translateY(0)";
        }
    });
});

// Style awal animasi
steps.forEach(step => {
    step.style.opacity = "0";
    step.style.transform = "translateY(30px)";
    step.style.transition = "0.6s ease";
});

// Alert edukasi saat web dibuka
window.onload = () => {
    alert("📢 Pelajari cara upload baju di marketplace agar cepat laku!");
};

// Tombol bantuan WhatsApp (opsional)
function
