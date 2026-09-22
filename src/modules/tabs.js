const tabs = () => {
  const tabpanel = document.querySelector(".service-header");
  const tabs = document.querySelectorAll(".service-header-tab");
  const tabContent = document.querySelectorAll(".service-tab");

  tabpanel.addEventListener("click", (e) => {
    if (e.target.closest(".service-header-tab")) {
      const tabBts = e.target.closest(".service-header-tab");
      tabs.forEach((tab, i) => {
        if (tab === tabBts) {
          tab.classList.add("active");
          tabContent[i].classList.remove("d-none");
        } else {
          tab.classList.remove("active");
          tabContent[i].classList.add("d-none");
        }
      });
    }
  });
};

export default tabs;
