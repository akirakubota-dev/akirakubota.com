"use strict";

function init() {

  const menuButton = AK.utils.qs("#menu-button");
  if (menuButton) {
    menuButton.addEventListener("click", AK.nav.toggle);
  }

  const externalLinks = AK.utils.qsa("a.external");
  for (const link of externalLinks) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

}

document.addEventListener("DOMContentLoaded", init);

