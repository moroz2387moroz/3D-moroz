const slider = () => {
  const sliderBlock = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");
  const dotsBlock = document.querySelector(".portfolio-dots");

  dotsBlock.innerHTML = "";
  slides.forEach((slide, index) => {
    const dot = document.createElement("li");
    dot.classList.add("dot");
    if (index === 0) {
      dot.classList.add("dot-active");
    }
    dotsBlock.append(dot);
  });

  const dots = dotsBlock.querySelectorAll(".dot");

  const timerInterval = 2000;

  let currentSlide = 0;
  let interval;

  const prevSlide = (els, idx, str) => {
    els[idx].classList.remove(str);
  };
  const nextSlide = (els, idx, str) => {
    els[idx].classList.add(str);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  };
  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.matches(".portfolio-btn, .dot")) {
      return;
    }

    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");
    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains("dot")) {
      //   currentSlide = Array.from(dots).indexOf(e.target);
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".portfolio-btn, .dot")) {
        stopSlide();
      }
    },
    true,
  );
  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".portfolio-btn, .dot")) {
        startSlide(timerInterval);
      }
    },
    true,
  );

  startSlide(timerInterval);
};
export default slider;
