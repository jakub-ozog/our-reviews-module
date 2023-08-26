"use strict";

var slider = document.querySelector('.card');
var prevButton = document.querySelector('.card__preview');
var nextButton = document.querySelector('.card__next');
var slides = [{
  id: 1,
  avatar: 'assets/images/person-1.jpg',
  title: 'Susan Smith',
  job: 'Web Developer',
  description: 'Im meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast eveyrdau carry'
}, {
  id: 2,
  avatar: 'assets/images/person-2.jpg',
  title: 'Anna Johnson',
  job: 'Product Owner',
  description: 'Ducimus consectetur sint perspiciatis quae ex Suscipit inventore error dignissimos maiores sapiente reprehenderit a distinctio architecto, maxime mollitia veritatis provident asperiores reiciendis sequi?'
}, {
  id: 3,
  avatar: 'assets/images/person-3.jpg',
  title: 'Bill Anderson',
  job: 'UX Designer',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, fugiat molestiae labore laborum praesentium quae adipisci reiciendis soluta ex modi. Ducimus obcaecati quos quaerat!'
}];
var currentIndex = 0;

function renderSlide(index) {
  var slide = slides[index];
  var slideHTML = "\n    <div class=\"card__devDetails\">\n    <div class=\"card__devThumb\">\n      <img src=\"".concat(slide.avatar, "\" alt=\"icon-user\">\n    </div>\n    <h2 class=\"card__devTitle\">").concat(slide.title, "</h2>\n    <h3 class=\"card__devSubtitle\">").concat(slide.job, "</h3>\n    <p class=\"card__devDesc\">").concat(slide.description, "</p>\n  </div>\n    ");
  slider.innerHTML = slideHTML;
}

function slide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  renderSlide(currentIndex);
}

prevButton.addEventListener('click', function () {
  slide(-1);
});
nextButton.addEventListener('click', function () {
  slide(1);
});
renderSlide(currentIndex); //Randomize slides

var getRandomNumber = function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
};

var randomNumbers = Array.from({
  length: 10
}, getRandomNumber);
randomNumbers.forEach(function (item) {
  console.log(item);
});