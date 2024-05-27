const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const asideShoppingCart = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

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

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Cellphone',
  price: 440,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Laptop',
  price: 800,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
  for(product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.classList.add('product-img');
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+product.price;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const imgIconCart = document.createElement('img');
    imgIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(imgIconCart);
    
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);
    
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);