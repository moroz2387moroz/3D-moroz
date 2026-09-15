const menu = () => {
  const menuBts = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBts = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    // if (!menu.style.transform) {
    //   menu.style.transform = "translateX(0)";
    // } else {
    //   menu.style.transform = "";
    // }
    menu.classList.toggle("active-menu");
  };

  menuBts.addEventListener("click", handleMenu);

  closeBts.addEventListener("click", handleMenu);

  // for (let i = 0; i < menuItems.length; i++) {
  //   menuItems[i].addEventListener("click", handleMenu);
  // }

  menuItems.forEach((item) => item.addEventListener("click", handleMenu));
};

export default menu;
