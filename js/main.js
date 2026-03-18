"use strict";

const AK = window.AK || {};
window.AK = AK;

AK.utils = {
  qs(selector) {
    return document.querySelector(selector);
  },

  qsa(selector) {
    return document.querySelectorAll(selector);
  }
};

AK.nav = {
  toggle() {
    const nav = AK.utils.qs(".nav");
    if (nav) {
      nav.classList.toggle("open");
    }
  }
};

