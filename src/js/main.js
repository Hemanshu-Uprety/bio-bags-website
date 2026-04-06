/**
 * Main JavaScript: Site-wide UI behaviors and interactions (plain JS, no frameworks).
 */
(function () {
  "use strict";

  // Configuration constants for header behavior
  var SCROLL_THRESHOLD_PX = 10; // Scroll distance before header changes
  var HEADER_SCROLLED_CLASSES = ["shadow-sm", "bg-white/90"]; // Classes added when scrolled

  // Initialize sticky header behavior with scroll-based styling changes
  function initStickyHeader() {
    var header = document.getElementById("site-header");
    if (!header) return;

    // Sync header shadow and background based on scroll position
    function syncShadow() {
      var pastThreshold = window.scrollY > SCROLL_THRESHOLD_PX;
      HEADER_SCROLLED_CLASSES.forEach(function (cls) {
        header.classList.toggle(cls, pastThreshold);
      });
    }

    window.addEventListener("scroll", syncShadow, { passive: true });
    syncShadow();
  }

  // Initialize mobile navigation toggle functionality
  function initMobileNav() {
    var toggle = document.getElementById("nav-toggle");
    var panel = document.getElementById("mobile-nav");
    if (!toggle || !panel) return;

    var openIcon = toggle.querySelector(".open-icon");
    var closeIcon = toggle.querySelector(".close-icon");

    // Set mobile menu visibility and update accessibility attributes
    function setMenuHidden(hidden) {
      panel.classList.toggle("hidden", hidden);
      toggle.setAttribute("aria-expanded", hidden ? "false" : "true");
      toggle.setAttribute("aria-label", hidden ? "Open menu" : "Close menu");
      if (openIcon && closeIcon) {
        openIcon.classList.toggle("hidden", !hidden);
        closeIcon.classList.toggle("hidden", hidden);
      }
    }

    // Toggle menu on button click
    toggle.addEventListener("click", function () {
      var isOpen = !panel.classList.contains("hidden");
      setMenuHidden(isOpen);
    });

    // Close menu when navigation links are clicked
    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuHidden(true);
      });
    });
  }
});
