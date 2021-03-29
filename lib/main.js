'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {

  var variable1 = document.getElementById("crSes1-1");
  variable1.addEventListener("click", function (e) {
    var element = this.closest('div');
    var modalElement = element.previousElementSibling;
    modalElement.classList.add("is-active");
  });

  var variable2 = document.getElementById("crSes1-2");
  variable2.addEventListener("click", function (e) {
    var element = this.closest('div');
    var modalElement = element.previousElementSibling;
    modalElement.classList.add("is-active");
  });

  var variable3 = document.getElementById("crSes2-1");
  variable3.addEventListener("click", function (e) {
    var element = this.closest('div');
    var modalElement = element.previousElementSibling;
    modalElement.classList.add("is-active");
  });

  var variable4 = document.getElementById("crSes2-2");
  variable4.addEventListener("click", function (e) {
    var element = this.closest('div');
    var modalElement = element.previousElementSibling;
    modalElement.classList.add("is-active");
  });

  var closeButton1 = document.getElementById("modal-close-1");
  closeButton1.addEventListener("click", function (e) {
    var element = this.closest('div');
    element.classList.remove("is-active");
  });

  var closeButton2 = document.getElementById("modal-close-2");
  closeButton2.addEventListener("click", function (e) {
    var element = this.closest('div');
    element.classList.remove("is-active");
  });

  var closeButton3 = document.getElementById("modal-close-3");
  closeButton3.addEventListener("click", function (e) {
    var element = this.closest('div');
    element.classList.remove("is-active");
  });

  var closeButton4 = document.getElementById("modal-close-4");
  closeButton4.addEventListener("click", function (e) {
    var element = this.closest('div');
    element.classList.remove("is-active");
  });
});