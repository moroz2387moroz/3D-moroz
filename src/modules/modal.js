import { animate } from "./helpers.js";

const modal = () => {
  const modalWindow = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  if (!modalWindow) {
    return;
  }

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

    const startOpacity = Number(modalWindow.style.opacity) || 0;

    const startTranslateY =
      Number(
        modalWindow.style.transform
          .replace("translateY(", "")
          .replace("px)", ""),
      ) || 0;

    animate({
      duration: 300,
      timing: (progress) => 1 - (1 - progress) ** 3,
      draw: (progress) => {
        modalWindow.style.opacity = (
          startOpacity +
          (targetOpacity - startOpacity) * progress
        ).toFixed(3);
        modalWindow.style.transform = `translateY(${(
          startTranslateY +
          (targetTranslateY - startTranslateY) * progress
        ).toFixed(2)}px)`;

        if (progress === 1 && onComplete) {
          onComplete();
        }
      },
    });
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

  // if (closeBts) {
  //   closeBts.addEventListener("click", closeModal);
  // }

  modalWindow.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      closeModal();
    }
  });
};

export default modal;
