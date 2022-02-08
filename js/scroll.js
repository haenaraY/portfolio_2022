// progress
const progressTag = document.querySelector('.progress');
const progressText = document.querySelector('p');
const bodyTag = document.querySelector('body');

document.addEventListener('scroll', () => {
    const pixels = window.pageYOffset;
    const pageHeight = bodyTag.getBoundingClientRect().height;
    const totalHeight = pageHeight - window.innerHeight;
    const percentage = pixels / totalHeight;

    progressTag.style.width = `${100 * percentage}%`;

});



let viewHeight = window.innerHeight;
let viewWidth = window.innerWidth;

let textContainers = document.querySelectorAll('.headline_txt');

textContainers.forEach((element, index) => {
  let top = element.getBoundingClientRect().top;
  let start = top ;

  let firstText = element.querySelector('.heading:first-child');
  let secondText = element.querySelector('.heading:last-child');

  gsap.to(firstText, {
    scrollTrigger: {
      trigger: element,
      scrub: true,
      start: start + "px bottom",
      end: "bottom top"
    },
    x: '-54vw',
    transformOrigin: "left center", 
    ease: "none"
  });
  gsap.to(secondText, {
    scrollTrigger: {
      trigger: element,
      scrub: true,
      start: start + "px bottom",
      end: "bottom top"
    },
    x: '32vw',
    transformOrigin: "left center", 
    ease: "none"
  });
});