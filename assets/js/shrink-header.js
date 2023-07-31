const header = document.getElementById('header');
const titleImage = document.getElementById('title-image');
const titleText = document.getElementById('title-text');
const container = document.getElementById('header-inside-container');

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    titleImage.classList.replace('block', 'hidden');
    titleText.classList.replace('hidden', 'block');
    container.classList.replace('p-3', 'p-2');
  } else {
    titleImage.classList.replace('hidden', 'block');
    titleText.classList.replace('block', 'hidden');
    container.classList.replace('p-2', 'p-3');
  }
};
