const { doc_query, doc_query_all } = require("./query_method");

doc_query;
window.addEventListener("DOMContentLoaded", () => {
  const baybayinLogo = doc_query(".baybayin__logo"); // <- ganito
  const circleVector = doc_query(".circle__vector");
  const handGestures = doc_query_all(".hand__gestures");
  const bannerTwoImage = doc_query_all(".banner__2-image");
  const cardLinkIcon = doc_query_all(".card__link-icon");

  // Banner 1 images
  for (let i = 0; i < handGestures.length; i++) {
    handGestures[i].src = `../assets/landing-page/banner-1/hand_gest-${
      i + 1
    }.svg`;
    handGestures[i].classList.add("z-index-1");
  }

  //Banner 2
  for (let i = 0; i < bannerTwoImage.length; i++) {
    bannerTwoImage[i].src = `../assets/landing-page/banner-2/icon${i + 1}.svg`;
  }

  //Banner 3
  for (let i = 0; i < cardLinkIcon.length; i++) {
    cardLinkIcon[i].src = `../assets/landing-page/banner-3/card-link-icon-${
      i + 1
    }.svg`;
  }

  baybayinLogo.src = "../assets/logo/logo.png";
  if (circleVector !== null) {
    circleVector.src = "../assets/landing-page/banner-1/Ellipse_1.svg";
  }
});
