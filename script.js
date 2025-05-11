document.addEventListener("wheel", function(e) {
    const sections = Array.from(document.querySelectorAll("header, section"));
    const currentScroll = window.scrollY;

    if (e.deltaY > 0) { // Hacia abajo
        const nextSection = sections.find(section => section.offsetTop > currentScroll + 10);
        if (nextSection) {
            e.preventDefault();
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    } else if (e.deltaY < 0) { // Hacia arriba
        const previousSection = sections.reverse().find(section => section.offsetTop < currentScroll - 10);
        if (previousSection) {
            e.preventDefault();
            previousSection.scrollIntoView({ behavior: "smooth" });
        }
    }
}, { passive: false });