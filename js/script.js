// function drop() {
//     document.getElementById("langDropdown").classList.toggle("show");
// }

// window.onclick = function(event) {
//   if (!event.target.matches('.button__dropdown')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// };

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
        this.classList.toggle("active");
        var menumenu = this.nextElementSibling;
        if (menumenu.style.maxHeight) {
          menumenu.style.maxHeight = null;
        } else {
          menumenu.style.maxHeight = menumenu.scrollHeight + "px";
        }
    });
}

