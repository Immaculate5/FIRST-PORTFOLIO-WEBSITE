// header
console.log('connected');

const headerBtn = document.querySelector('.menu-bar');
console.log(headerBtn);
const mobileNav = document.querySelector('.mobile-nav-links');
console.log(mobileNav);
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
console.log(mobileLinks);

//  State
let isMobileNavOpen = false;

headerBtn.addEventListener('click', () => {
  isMobileNavOpen = !isMobileNavOpen;

  if (isMobileNavOpen) {
    mobileNav.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
  } else {
    mobileNav.style.display = 'none';
    document.body.style.overflowY = 'auto';
  }

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      isMobileNavOpen = false;
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });
  })
});