document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('active');
  document.querySelector('.hamburger-menu').classList.toggle('active');
});

// change menu color
let above100vh = false;

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const threshold1 = window.innerHeight; // 100vh
  const threshold2 = 2600; // 2600px
  // const threshold3 = 2619;
  const lines = document.querySelectorAll('.hamburger-menu .line');

  const shouldBeDark = scrolled >= threshold1 || scrolled >= threshold2;

  if (shouldBeDark) {
    lines.forEach((line) => line.classList.add('dark-line'));
  } else {
    lines.forEach((line) => line.classList.remove('dark-line'));
  }
});

window.addEventListener('scroll', () => {
  const body = window.scrollY;
  console.log(body);
});
