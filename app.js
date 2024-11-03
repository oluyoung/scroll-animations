runObserver(true);

/**
 * 
 * @param {boolean} showAgain
 * @param {number} delayDuration
 */
function runObserver(showAgain = false, delayDuration = 200) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll__shown');
            } else {
                if (showAgain)
                    entry.target.classList.remove('scroll__shown');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.scroll__hidden');

    hiddenElements.forEach((element) => {
        observer.observe(element);
    });

    const delayedChildren = document.querySelectorAll('.scroll__delay');
    delayedChildren.forEach((element, index) => {
        element.style.transitionDelay = `${index * delayDuration}ms`;
    });
}
