/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts

//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  //  Activate Bootstrap scrollspy on the main nav element
  // For the first navbar
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // For the second navbar
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav1");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  //  Activate Bootstrap scrollspy on the main nav element
  // For the first navbar
  const mainNav1 = document.body.querySelector("#mainNav1");
  if (mainNav1) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav1",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler1 = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems1 = [].slice.call(
    document.querySelectorAll("#navbarResponsive1 .nav-link")
  );
  responsiveNavItems1.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler1).display !== "none") {
        navbarToggler1.click();
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-image");
    let currentImageIndex = 0;

    function showImage(index) {
      images.forEach((image, i) => {
        if (i === index) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    }

    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    }

    showImage(currentImageIndex);
    setInterval(nextImage, 5000); // Switch images every 5 seconds (5000 milliseconds).
  });
});
