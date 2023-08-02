// Menu data structure
// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];


//task1
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');


//task2
const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');


//task3

menuLinks.forEach((link) => {
    const newLinkEl = document.createElement('a');
    newLinkEl.setAttribute('href', link.href);
    newLinkEl.textContent = link.text;
    topMenuEl.appendChild(newLinkEl);
  });

//task4

var subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';


//task5
const topMenuLinks = topMenuEl.querySelectorAll('a');
let showingSubMenu = false;
topMenuEl.addEventListener('click', (event) => {
  event.preventDefault();
  const clickedElement = event.target;
  
  if (!clickedElement.matches('a')) return;
  
  console.log(clickedElement.textContent);
});

topMenuEl.addEventListener('click', function (event) {
  event.preventDefault();
  if (!event.target.matches('a')) return;
  
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

});

topMenuEl.addEventListener('click', function (event) {
  event.preventDefault();
  if (!event.target.matches('a')) return;

  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

  topMenuLinks.forEach(function (link) {
    link.classList.remove('active');
  });
});


topMenuEl.addEventListener('click', function (event) {
  event.preventDefault();
  if (!event.target.matches('a')) return;

  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

  topMenuLinks.forEach(function (link) {
    link.classList.remove('active');
  });
  event.target.classList.add('active');
  
});

topMenuEl.addEventListener('click', function (event) {
  event.preventDefault();
  if (!event.target.matches('a')) return;

  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

  topMenuLinks.forEach(function (link) {
    link.classList.remove('active');
  });
  event.target.classList.add('active');

  var linkObject = menuLinks.find(function (link) {
    return link.text === event.target.textContent;
  });
  showingSubMenu = linkObject.subLinks !== undefined;
  
});



topMenuEl.addEventListener('click', function (event) {
  event.preventDefault();
  if (!event.target.matches('a')) return;

  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

  topMenuLinks.forEach(function (link) {
    link.classList.remove('active');
  });
  event.target.classList.add('active');

  var linkObject = menuLinks.find(function (link) {
    return link.text === event.target.textContent;
  });
  showingSubMenu = linkObject.subLinks !== undefined;

  if (showingSubMenu) {
    buildSubMenu(linkObject.subLinks);
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0';
  }
});




function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(function (link) {
    var subLink = document.createElement('a');
    subLink.setAttribute('href', link.href);
    subLink.textContent = link.text;
    subMenuEl.appendChild(subLink);
  });
}
