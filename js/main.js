document.querySelector('.open-nav').addEventListener('click', () => {
  document.querySelector('.nav-container').style.display = 'grid';
});

document.querySelector('.close-nav').addEventListener('click', () => {
  document.querySelector('.nav-container').style.display = 'none';
});