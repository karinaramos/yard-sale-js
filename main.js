const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const asideShoppingCart = document.querySelector('#shopping-cart');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
iconCart.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
  const isShoppingCartClosed = asideShoppingCart.classList.contains('inactive');

  if(!isShoppingCartClosed) {
    asideShoppingCart.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isShoppingCartClosed = asideShoppingCart.classList.contains('inactive');

  if(!isShoppingCartClosed) {
    asideShoppingCart.classList.add('inactive');
  }

  mobileMenu.classList.toggle('active');
}

function toggleCartAside() {
  const isMobileMenuOpen = mobileMenu.classList.contains('active');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if(!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }
  
  if(isMobileMenuOpen) {
    mobileMenu.classList.remove('active');
  }

  asideShoppingCart.classList.toggle('inactive');
}