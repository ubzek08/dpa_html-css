const items = document.querySelectorAll(".anim");
 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
 
items.forEach(item => observer. Observe(item));