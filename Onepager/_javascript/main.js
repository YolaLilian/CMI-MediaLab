document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {

  const variable1 = document.getElementById("crSes1-1");
  variable1.addEventListener("click", function(e) {
    const element = this.closest('div')
    const modalElement = element.previousElementSibling;
    modalElement.classList.add("is-active");
  });

  const variable2 = document.getElementById("crSes1-2");
  variable2.addEventListener("click", function(e) {
    const element = this.closest('div')
    const modalElement = element.previousElementSibling;
    modalElement.classList.add("is-active");
  });

  const variable3 = document.getElementById("crSes2-1");
  variable3.addEventListener("click", function(e) {
    const element = this.closest('div')
    const modalElement = element.previousElementSibling;
    modalElement.classList.add("is-active");
  });
  
  const variable4 = document.getElementById("crSes2-2");
  variable4.addEventListener("click", function(e) {
    const element = this.closest('div')
    const modalElement = element.previousElementSibling;
    modalElement.classList.add("is-active");
  });
  
  const closeButton1 = document.getElementById("modal-close-1");
  closeButton1.addEventListener("click", function(e) {
    const element = this.closest('div')
    element.classList.remove("is-active");
  });

  const closeButton2 = document.getElementById("modal-close-2");
  closeButton2.addEventListener("click", function(e) {
    const element = this.closest('div')
    element.classList.remove("is-active");
  });

  const closeButton3 = document.getElementById("modal-close-3");
  closeButton3.addEventListener("click", function(e) {
    const element = this.closest('div')
    element.classList.remove("is-active");
  });

  const closeButton4 = document.getElementById("modal-close-4");
  closeButton4.addEventListener("click", function(e) {
    const element = this.closest('div')
    element.classList.remove("is-active");
  });

});
