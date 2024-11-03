runObserver(true);

function runObserver() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const attr = entry.target.getAttribute('data-name');
          if (entry.isIntersecting) {
            console.log(attr);
            entry.target.classList.remove('animate__hidden');
            entry.target.classList.add(attr);
            observer.unobserve(entry.target);
          }
      });
  });

  const hiddenElements = document.querySelectorAll('.animate__hidden');

  hiddenElements.forEach((element) => {
      observer.observe(element);
  });

  const delayedChildren = document.querySelectorAll('.animate__delay');
  delayedChildren.forEach((element, index) => {
      element.style.setProperty('--animate-duration', `${(index + 1) * 0.2}s`);
  });
}
