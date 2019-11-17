(function() {

  function assignEvents(elems, type, func) {

    for(var i = 0; i < elems.length; i++) {
      elems[i].addEventListener(type, func, false);
    }

  }

  function changeColor(e) {
    if(e.target.getAttribute('title') === "first") {
      first.classList.add("first");
    } else if(e.target.getAttribute('title') === "second") {
        second.classList.add("second");
    } else {
        third.classList.add("third");
    }
  }

  function defaultColor(e) {
    first.classList.remove("first");
    second.classList.remove("second");
    third.classList.remove("third");
  }

  function init(elems) {

      assignEvents(elems, "mouseenter", changeColor);
      assignEvents(elems, "mouseleave", defaultColor);

  }

window.animati0n = init;

}())


const divHam = document.querySelector(".hamburger"),
      first = divHam.firstElementChild,
      second = first.nextElementSibling,
      third = second.nextElementSibling;

divHam.addEventListener("click", function hamAnimation() {

  first.classList.toggle("firstAnimation");
  second.classList.toggle("secondAnimation");
  third.classList.toggle("thirdAnimation");

}, false)
