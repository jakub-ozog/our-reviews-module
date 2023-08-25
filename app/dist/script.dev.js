"use strict";

var devDetails = document.querySelectorAll('.card__devDetails');
console.log(devDetails); // devDetails.forEach(item => {
//     item.addEventListener('click', () => {
//         devDetails.forEach(d => {
//             d.classList.toggle('dNone');
//         })
//         item.classList.toggle('dBlock');
//     });
// });
// const previewReview = document.querySelector('.card__preview')
// previewReview.addEventListener('click', () => {
//     console.log('test')
// })
// const nextReview = document.querySelector('.card__next')
// devDetails.forEach(item => {
//     item.addEventListener('click', () => {
//         console.log(item)
//     })
//     nextReview.addEventListener('click', () => {
//         console.log('test2')
//     })
// })

var reviews = [{
  id: 1,
  name: 'susan smith',
  job: 'web developer',
  text: 'Im meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast eveyrdau carry'
}, {
  id: 2,
  name: 'anna johnson',
  job: 'web developer',
  text: 'Im meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast eveyrdau carry'
}];