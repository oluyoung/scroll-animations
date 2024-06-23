newFunction(true);

/**
 * 
 * @param {boolean} showAgain 
 */
function newFunction(showAgain) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // observer.unobserve(entry.target);
            } else {
                if (showAgain)
                    entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');

    hiddenElements.forEach((element) => {
        observer.observe(element);
    });

    const delayedChildren = document.querySelectorAll('.hidden__transition__delay');
    delayedChildren.forEach((element, index) => {
        element.style.transitionDelay = `${index * 200}ms`;
    });
}
