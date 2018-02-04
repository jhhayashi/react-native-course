const SLIDE = {
  title: 'React is Declarative',
  bullets: [
    'Imeritive vs Declaraive',
    "The browser APIs are't fun to work with",
    'React allows us to write what we want, and the library will take care of the DOM manipulation',
  ],
}

const CLASSNAMES = {title: 'title', bullet: 'bullet'}

function createSlide(slide) {
  const slideElement = document.createElement('div')

  const title = document.createElement('h1')
  title.className = CLASSNAMES.title
  title.innerHTML = slide.title
  slideElement.appendChild(title)

  const bullets = document.createElement('ul')
  slide.bullets.forEach(bullet => {
    const bulletElement = document.createElement('li')
    bulletElement.className = CLASSNAMES.bullet
    bulletElement.innerHTML = bullet
    bullets.appendChild(bulletElement)
  })
  slideElement.appendChild(bullets)

  return slideElement
}
