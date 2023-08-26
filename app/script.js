const slider = document.querySelector('.card');
const prevButton = document.querySelector('.card__preview');
const nextButton = document.querySelector('.card__next');


const slides = [{
        id: 1,
        avatar: 'assets/images/person-1.jpg',
        title: 'Susan Smith',
        job: 'Web Developer',
        description: 'Im meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast eveyrdau carry',
    },
    {
        id: 2,
        avatar: 'assets/images/person-2.jpg',
        title: 'Anna Johnson',
        job: 'Product Owner',
        description: 'Ducimus consectetur sint perspiciatis quae ex Suscipit inventore error dignissimos maiores sapiente reprehenderit a distinctio architecto, maxime mollitia veritatis provident asperiores reiciendis sequi?'
    },
    {
        id: 3,
        avatar: 'assets/images/person-3.jpg',
        title: 'Bill Anderson',
        job: 'UX Designer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, fugiat molestiae labore laborum praesentium quae adipisci reiciendis soluta ex modi. Ducimus obcaecati quos quaerat!',
    },
];

let currentIndex = 0;

function renderSlide(index) {
    const slide = slides[index];

    const slideHTML = `
    <div class="card__devDetails">
    <div class="card__devThumb">
      <img src="${slide.avatar}" alt="icon-user">
    </div>
    <h2 class="card__devTitle">${slide.title}</h2>
    <h3 class="card__devSubtitle">${slide.job}</h3>
    <p class="card__devDesc">${slide.description}</p>
  </div>
    `

    slider.innerHTML = slideHTML;
}

function slide(direction) {
    currentIndex += direction

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0
    }

    renderSlide(currentIndex)
}


prevButton.addEventListener('click', () => {
    slide(-1);
});

nextButton.addEventListener('click', () => {
    slide(1)
})

renderSlide(currentIndex);


//Randomize slides

const getRandomNumber = () => Math.floor(Math.random() * 3) + 1;

const randomNumbers = Array.from({length: 10 }, getRandomNumber);

randomNumbers.forEach(item => {
    console.log(item);
})
