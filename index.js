const moveL = document.querySelector('.fa-chevron-left')
const moveR = document.querySelector('.fa-chevron-right')

const carousel = document.querySelector('.carousel')
const imageList = document.querySelectorAll('.carousel__img')

let imgPosition = 0
let currentImage = 0
let imageCount = imageList.length-1

generatePositionTabs(imageCount)

const tabs = document.querySelectorAll('.image-tab')
console.log(tabs)
tabs[0].classList.add('illuminate-tab')

moveL.addEventListener('click', (e) => {
  if (currentImage >= 1) {
    carousel.style.transform = `translate(${imgPosition+=100}vw, 0)`
    
    tabs[currentImage].classList.remove('illuminate-tab')
    currentImage--
    tabs[currentImage].classList.add('illuminate-tab')
  }
  // console.log(currentImage)

})

moveR.addEventListener('click', (e) => {
  if (currentImage < imageCount) {
    carousel.style.transform = `translate(${imgPosition-=100}vw, 0)`
    
    tabs[currentImage].classList.remove('illuminate-tab')
    currentImage++
    tabs[currentImage].classList.add('illuminate-tab')
  }
  // console.log(currentImage)
  
})

function generatePositionTabs(number) {
  const div = document.createElement('div')
  div.classList.add('carousel__bar')

  const ul = document.createElement('ul')

  for (let i = 0; i <= number; i++) {
    const tab = document.createElement('li')
    tab.classList.add('image-tab')
    tab.style.width = `calc(100vw/${imageCount+1})`
    ul.appendChild(tab);
  }

  div.appendChild(ul)
  document.querySelector('main').appendChild(div)
}