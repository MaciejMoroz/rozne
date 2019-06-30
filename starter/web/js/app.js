const BODY = this.document.querySelector("body"),
  btn_menu = this.document.querySelector("[data-menu-btn]");

//on scroll events
window.onscroll = () => {
  fixedMenu();
};

// fixed menu
let fixedMenu = () => {
  if (window.pageYOffset > 100) {
    nav.style.paddingTop = "20px";
    nav.style.paddingBottom = "10px";
    nav.style.height = "80px";
    if (window.innerWidth > 1024) {
      nav.style.height = "80px";
    }

    nav.style.background = "rgba(112, 112, 112, 0.9)";
  } else {
    nav.style.paddingTop = "40px";
    nav.style.background = "transparent";
    nav.style.height = "100px";
  }
};

// hamburger menu
btn_menu.onclick = () => {
  if (BODY.classList != "open-menu") {
    BODY.classList.toggle("open-menu");
  }

  if (nav.style.height === "100vh") {
    nav.style.height = "70px";
    if (window.pageYOffset < 100) {
      nav.style.background = "transparent";
      nav.style.height = "100px";
    }
  } else {
    nav.style.background = "rgba(112, 112, 112, 0.9)";
    nav.style.height = "100vh";
  }
};
