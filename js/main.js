// Open full-screen nav on Burger click
document.querySelector('.open-nav').addEventListener('click', () => {
  document.querySelector('.nav-container').style.display = 'grid';
});

// Close Nav on X click
document.querySelector('.close-nav').addEventListener('click', () => {
  document.querySelector('.nav-container').style.display = 'none';
});