const items = Array.from(document.querySelectorAll("*")).filter((element) => {
    const style = window.getComputedStyle(element);
    const animationName = style.animationName;
    const animationDuration = parseFloat(style.animationDuration);
    return animationName && animationName !== "none" && !Number.isNaN(animationDuration) && animationDuration > 0;
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
});

items.forEach(item => {
    item.classList.add("animatable");
    observer.observe(item);
});

window.requestAnimationFrame(() => {
    document.documentElement.classList.remove("anim-blocker");
});