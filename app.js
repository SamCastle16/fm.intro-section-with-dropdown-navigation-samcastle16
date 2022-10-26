const navMobile = document.getElementById('nav-mobile');
const navFeatures = document.querySelector('.features');
const navCompany = document.querySelector('.company');
const navFeaturesDesk = document.querySelector('.features-desktop');
const navCompanyDesk = document.querySelector('.company-desktop');

navFeatures.addEventListener('click', () => {
  document
    .querySelector('.nav-list-features')
    .classList.toggle('nav-list--active');

  document
    .querySelector('.icon-arrow-nav-features')
    .classList.toggle('icon-arrow-nav--active');
});

navCompany.addEventListener('click', () => {
  document
    .querySelector('.nav-list-company')
    .classList.toggle('nav-list--active');

  document
    .querySelector('.icon-arrow-nav-company')
    .classList.toggle('icon-arrow-nav--active');
});

navFeaturesDesk.addEventListener('click', () => {
  document
    .querySelector('.nav-list-features-desktop')
    .classList.toggle('nav-list--active');

  document
    .querySelector('.icon-arrow-nav-desktop-features')
    .classList.toggle('icon-arrow-nav--active');
});

navCompanyDesk.addEventListener('click', () => {
  document
    .querySelector('.nav-list-company-desktop')
    .classList.toggle('nav-list--active');

  document
    .querySelector('.icon-arrow-nav-desktop-company')
    .classList.toggle('icon-arrow-nav--active');
});

toggleNav = () => navMobile.classList.toggle('nav-mobile-burger--show');
