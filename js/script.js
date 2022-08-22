var hamburger = document.querySelector('.hamburger');
var menu__list = document.querySelector('.menu__list');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  menu__list.classList.toggle('active');

});

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params){
    for (let index=0; index < animItems.length; index++){
      const animItem = animItems [index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);

}

var acc = document.getElementsByClassName("questions__item-menu");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active_q");
        var menumenu = this.nextElementSibling;
        if (menumenu.style.maxHeight) {
          menumenu.style.maxHeight = null;
        } else {
          menumenu.style.maxHeight = menumenu.scrollHeight + "px";
        }
    });
}

var acc = document.getElementsByClassName("laws__item-menu");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active_q");
        var menumenu = this.nextElementSibling;
        if (menumenu.style.maxHeight) {
          menumenu.style.maxHeight = null;
        } else {
          menumenu.style.maxHeight = menumenu.scrollHeight + "px";
        }
    });
}

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  //Get inner elements from each dropdown
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    //Add the clicked select styles to the select element
    select.classList.toggle('select-clicked');
    //Add the rotate styles to the caret element
    caret.classList.toggle('caret-rotate');
    //Add the open styles to the menu element
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {

    option.addEventListener('click', () => {

      selected.innerText = option.innerText;

      select.classList.remove('select-clicked');

      caret.classList.remove('caret-rotate');

      menu.classList.remove('menu-open');

      options.forEach(option => {
        option.classList.remove('active-menu');
      });

      option.classList.add('active-menu');
    });
  });
});



