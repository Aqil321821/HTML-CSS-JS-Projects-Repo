// slideshow
/*
5 d/f divs banao or unko ek ek krke slideshow div me show krwao,
un newly created divs me bg images daal do using loop


*/
const slidesShow = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement('div');
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;
    i === 1 && div.classList.add('active');
    document.querySelector('.slideshow').appendChild(div);
  }
};
slidesShow();

const divs = document.querySelectorAll('.slideshow div');
let a = 1;
const slideImages = () => {
  setInterval(() => {
    a++;
    const div = document.querySelector('.slideshow .active');
    div.classList.remove('active');
    if (a < divs.length) {
      div.nextElementSibling.classList.add('active');
    } else {
      divs[0].classList.add('active');
      a = 1;
    }
  }, 10000);
};
slideImages();
