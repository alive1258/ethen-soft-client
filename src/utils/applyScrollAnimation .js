export const applyScrollAnimation = (elementSelector, revealClass) => {
  const handleScrollAnimation = () => {
    const elements = document.querySelectorAll(elementSelector);
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
      let elementRectTop = element.getBoundingClientRect().top;
      let elementRectBottom = element.getBoundingClientRect().bottom;

      if (elementRectTop < windowHeight && elementRectBottom > 0) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }

      const reveals = element.querySelectorAll(revealClass);
      reveals.forEach((reveal, index) => {
        let revealRectTop = reveal.getBoundingClientRect().top;
        let revealRectBottom = reveal.getBoundingClientRect().bottom;

        if (revealRectTop < windowHeight && revealRectBottom > 0) {
          const delay = 300;
          setTimeout(() => {
            reveal.classList.add("active");
          }, index * delay);
        } else {
          reveal.classList.remove("active");
        }
      });
    });
  };

  // Attach event listeners
  window.addEventListener("scroll", handleScrollAnimation);
  window.addEventListener("load", handleScrollAnimation);

  // Clean up listeners on unmount
  return () => {
    window.removeEventListener("scroll", handleScrollAnimation);
    window.removeEventListener("load", handleScrollAnimation);
  };
};
