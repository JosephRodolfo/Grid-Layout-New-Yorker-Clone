let subscribeBanner = document.querySelector(".subscribe-banner-wrapper");
let navFull = document.querySelectorAll("nav, .nav-links-container ul");
let logoImage = document.querySelectorAll(
  ".header-png-container img",
  ".header-png-container"
);

window.onscroll = function (e) {
  console.log(this.oldScroll < this.scrollY);

  if (!(this.oldScroll > this.scrollY)) {
    // console.log("scroll down");

    subscribeBanner.classList.add("opacity-zero");
    navFull.forEach((element) => element.classList.add("shrink-nav-ul"));
    logoImage.forEach((element) => element.classList.add("shrink-logo"));
  }

  if (this.oldScroll > this.scrollY) {
    subscribeBanner.classList.remove("opacity-zero");
    navFull.forEach((element) => element.classList.remove("shrink-nav-ul"));
    logoImage.forEach((element) => element.classList.remove("shrink-logo"));
  }

  this.oldScroll = this.scrollY;
};
