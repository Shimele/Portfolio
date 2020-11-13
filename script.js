//set a CSS custom property that knows the percentage of the page scrolled:
//for CSS scroll animation
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
//for AOS animation
AOS.init();


