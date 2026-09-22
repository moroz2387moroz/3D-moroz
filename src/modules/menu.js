const menu = () => {
  const menuButton = document.querySelector(".menu");
  const menuElement = document.querySelector("menu");

  if (!menuButton || !menuElement) {
    return;
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest(".menu") === menuButton) {
      menuElement.classList.toggle("active-menu");
    }
  });

  menuElement.addEventListener("click", (event) => {
    const target = event.target.closest(".close-btn, ul li a");

    if (target) {
      if (target.classList.contains("close-btn")) {
        event.preventDefault();
      }
      menuElement.classList.remove("active-menu");
    }
  });
};

export default menu;
