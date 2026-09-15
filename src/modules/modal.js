const modal = () => {
  const modalWindow = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  if (!modalWindow) {
    return;
  }

  const closeBts = modalWindow.querySelector(".popup-close");
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  const animateModal = (targetOpacity, targetTranslateY, onComplete) => {
    if (isMobile) {
      modalWindow.style.opacity = String(targetOpacity);
      modalWindow.style.transform = `translateY(${targetTranslateY}px)`;
      if (onComplete) {
        onComplete();
      }
      return;
    }

    const start = performance.now();
    const startOpacity = Number(modalWindow.style.opacity) || 0;

    const startTranslateY =
      Number(
        modalWindow.style.transform
          .replace("translateY(", "")
          .replace("px)", ""),
      ) || 0;

    const tick = (now) => {
      const progress = Math.min((now - start) / 300, 1);
      const eased = 1 - (1 - progress) ** 3;

      modalWindow.style.opacity = (
        startOpacity +
        (targetOpacity - startOpacity) * eased
      ).toFixed(3);
      modalWindow.style.transform = `translateY(${(
        startTranslateY +
        (targetTranslateY - startTranslateY) * eased
      ).toFixed(2)}px)`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else if (onComplete) {
        onComplete();
      }
    };

    requestAnimationFrame(tick);
  };

  const openModal = () => {
    modalWindow.style.display = "block";
    modalWindow.style.opacity = "0";
    modalWindow.style.transform = "translateY(20px)";
    animateModal(1, 0);
  };

  const closeModal = () => {
    animateModal(0, 20, () => {
      modalWindow.style.display = "none";
    });
  };

  buttons.forEach((bts) => {
    bts.addEventListener("click", openModal);
  });

  if (closeBts) {
    closeBts.addEventListener("click", closeModal);
  }
};

export default modal;
