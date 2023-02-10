const navToggleBtn = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggleBtn.addEventListener('click', () => {
  navList.classList.toggle('show-list');
})