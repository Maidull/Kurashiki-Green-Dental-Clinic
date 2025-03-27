//menu
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const menuOverlay = document.querySelector(".menu-overlay");
  const menuClose = document.querySelector(".menu-close");
  const menuLinks = document.querySelectorAll(".menu-list a");

  menuButton.addEventListener("click", function () {
    menuOverlay.classList.add("active");
  });

  menuClose.addEventListener("click", function () {
    menuOverlay.classList.remove("active");
  });

  document.addEventListener("click", function (event) {
    if (!menuOverlay.contains(event.target) && !menuButton.contains(event.target)) {
      menuOverlay.classList.remove("active");
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      menuOverlay.classList.remove("active");
    });
  });

  document.querySelectorAll(".menu-list a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute("data-section"));
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
});

//header
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  });
});

//tab
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      button.classList.add("active");
      const target = document.getElementById(button.dataset.tab);
      target.classList.add("active");
    });
  });
});

//select days month
document.addEventListener("DOMContentLoaded", function () {

  const monthSelect = document.getElementById("month");
  for (let i = 1; i <= 12; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = `${i}`;
    monthSelect.appendChild(option);
  }

  const daySelect = document.getElementById("day");
  for (let i = 1; i <= 31; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = `${i}`;
    daySelect.appendChild(option);
  }
});

//effect section 4 
document.addEventListener("DOMContentLoaded", function () {
  const reasons = document.querySelectorAll(".reason");

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    reasons.forEach(reason => {
      const rect = reason.getBoundingClientRect();
      if (rect.top < windowHeight * 0.8) {
        reason.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); 
});

//effect section 8
document.addEventListener("DOMContentLoaded", function () {
  const flowContainers = document.querySelectorAll(".flow-container");

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    flowContainers.forEach(flow => {
      const rect = flow.getBoundingClientRect();
      if (rect.top < windowHeight * 0.8) {
        flow.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); 
});

//effect section 9 
document.addEventListener("DOMContentLoaded", function () {
  const section9 = document.querySelector(".section-9");

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    const rect = section9.getBoundingClientRect();

    if (rect.top < windowHeight * 0.8) {
      section9.classList.add("visible");
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
