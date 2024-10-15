document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const loginLink = document.querySelector('.login-link');
  const registerLink = document.querySelector('.register-link');
  const btnPopup = document.querySelector('.btnLogin-popup');
  const iconClose = document.querySelector('.icon-close');

  if (wrapper && loginLink && registerLink && btnPopup && iconClose) {
      registerLink.addEventListener('click', () => {
          wrapper.classList.add('active');
      });

      loginLink.addEventListener('click', () => {
          wrapper.classList.remove('active');
      });

      btnPopup.addEventListener('click', () => {
          wrapper.classList.add('active-popup');
      });

      iconClose.addEventListener('click', () => {
          wrapper.classList.remove('active-popup');
      });
  } else {
      console.error('One or more elements not found');
  }
});
