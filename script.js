console.log("Welcome to Shubham Kumar's Portfolio 🚀");

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(function(section) {
    section.classList.add("hidden");
    observer.observe(section);
});
// Back to Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});