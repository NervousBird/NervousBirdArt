// Pages
const mainPage = document.getElementById('page')
const portfolioPage = document.getElementById('portfolio-page')
const aboutPage = document.getElementById('about-page')
const contactPage = document.getElementById('contact-page')
const websitesPage = document.getElementById('websites-page')
const body = document.body

// Buttons
document.querySelectorAll('.button-logic-home').forEach((button) => {
  button.addEventListener('click', (event) => {
    loadHome()
  })
})
document.querySelectorAll('.button-logic-portfolio').forEach((button) => {
  button.addEventListener('click', (event) => {
    loadPortfolio()
  })
})
document.querySelectorAll('.button-logic-about').forEach((button) => {
  button.addEventListener('click', (event) => {
    loadAbout()
  })
})
document.querySelectorAll('.button-logic-contact').forEach((button) => {
  button.addEventListener('click', (event) => {
    loadContact()
  })
})
document.querySelectorAll('.button-logic-websites').forEach((button) => {
  button.addEventListener('click', (event) => {
    loadWebsites()
  })
})

function loadHome() {
  mainPage.style.display = 'grid'
  portfolioPage.style.display = 'none'
  aboutPage.style.display = 'none'
  contactPage.style.display = 'none'
  websitesPage.style.display = 'none'
  body.style.backgroundImage = 'url(/images/index/PortfolioBG1.png)'
}

function loadPortfolio() {
  mainPage.style.display = 'none'
  portfolioPage.style.display = 'flex'
  aboutPage.style.display = 'none'
  contactPage.style.display = 'none'
  websitesPage.style.display = 'none'
  body.style.backgroundImage = 'none'
}

function loadAbout() {
  mainPage.style.display = 'none'
  portfolioPage.style.display = 'none'
  aboutPage.style.display = 'flex'
  contactPage.style.display = 'none'
  websitesPage.style.display = 'none'
  body.style.backgroundImage = 'none'
}

function loadContact() {
  mainPage.style.display = 'none'
  portfolioPage.style.display = 'none'
  aboutPage.style.display = 'none'
  contactPage.style.display = 'flex'
  websitesPage.style.display = 'none'
  body.style.backgroundImage = 'none'
}

function loadWebsites() {
  mainPage.style.display = 'none'
  portfolioPage.style.display = 'none'
  aboutPage.style.display = 'none'
  contactPage.style.display = 'none'
  websitesPage.style.display = 'flex'
  body.style.backgroundImage = 'none'
}

const portfolioButtons = document.getElementById('portfolio-buttons')
const portfolioIllustration = document.getElementById('portfolio-illustrations')
const portfolioPortraits = document.getElementById('portfolio-portraits')
const portfolioLandscapes = document.getElementById('portfolio-landscapes')

portfolioIllustration.addEventListener('mouseover', (event) => {
  portfolioButtons.style.backgroundImage =
    'url(/images/portfolio/portfoliotitle_1.png)'
})

portfolioPortraits.addEventListener('mouseover', (event) => {
  portfolioButtons.style.backgroundImage =
    'url(/images/portfolio/portfoliotitle_2.png)'
})

portfolioLandscapes.addEventListener('mouseover', (event) => {
  portfolioButtons.style.backgroundImage =
    'url(/images/portfolio/portfoliotitle_3.png)'
})

// Gallery ---- FIX ALL THIS

const illustrationImages = [
  {
    img: './images/portfolio/illustrations/Animals_01.png',
    title: 'True Love',
  },
  {
    img: './images/portfolio/illustrations/Animals_02.png',
    title: 'Space',
  },
  {
    img: './images/portfolio/illustrations/Doodle_03_s.png',
    title: 'Succubus',
  },
  {
    img: './images/portfolio/illustrations/Doodle_07.png',
    title: 'Chilling in 2070',
  },
  {
    img: './images/portfolio/illustrations/Kitty The Tiger_01.png',
    title: 'Kitty the Tiger 2',
  },
  {
    img: './images/portfolio/illustrations/SciFiWomen_01.png',
    title: 'SciFi Doodle 1',
  },
  {
    img: './images/portfolio/illustrations/SciFiWomen_02.png',
    title: 'SciFi Doodle 2',
  },
  {
    img: './images/portfolio/illustrations/TheHunter.png',
    title: 'The Hunter',
  },
]
const portraitImages = [
  { img: './images/portfolio/portraits/portrait_1.png', title: 'Study 1' },
  { img: './images/portfolio/portraits/portrait_2.png', title: 'Study 2' },
  { img: './images/portfolio/portraits/portrait_3.png', title: 'Study 3' },
  { img: './images/portfolio/portraits/portrait_4.png', title: 'Study 4' },
  { img: './images/portfolio/portraits/portrait_5.png', title: 'Study 5' },
  { img: './images/portfolio/portraits/portrait_6.png', title: 'Study 6' },
  { img: './images/portfolio/portraits/portrait_7.png', title: 'Study 7' },
  { img: './images/portfolio/portraits/portrait_8.png', title: 'Study 8' },
  { img: './images/portfolio/portraits/portrait_9.png', title: 'Study 9' },
]
const landscapeImages = [
  {
    img: './images/portfolio/landscapes/DeathByHeat.png',
    title: 'Death by Heat',
  },
  { img: './images/portfolio/landscapes/Fields.png', title: 'Fields' },
  {
    img: './images/portfolio/landscapes/FightingTheWind.png',
    title: 'Fighting the Wind',
  },
  {
    img: './images/portfolio/landscapes/FishandChips.png',
    title: 'Fish and Chips',
  },
  { img: './images/portfolio/landscapes/RainyDays.png', title: 'Rainy Days' },
  {
    img: './images/portfolio/landscapes/Staircase_01.png',
    title: 'Staircase Friends',
  },
  {
    img: './images/portfolio/landscapes/Through The Fields 01.png',
    title: 'Through the Fields',
  },
]

const backButton = document.getElementById('gallery-back')
const forwardButton = document.getElementById('gallery-forward')
const illustrationButton = document.getElementById('portfolio-illustrations')
const portraitButton = document.getElementById('portfolio-portraits')
const landscapeButton = document.getElementById('portfolio-landscapes')
const galleryImage = document.getElementById('gallery-image')
const galleryTitle = document.getElementById('gallery-title')
const previewsContainer = document.getElementById('gallery-image-previews')
let currentGallery = illustrationImages
let galleryIndex = 0
let galleryMax = currentGallery.length - 1

backButton.addEventListener('click', (event) => {
  galleryBack()
})

forwardButton.addEventListener('click', (event) => {
  galleryForward()
})

illustrationButton.addEventListener('click', (event) => {
  changeGallery(illustrationImages)
  illustrationButton.classList.add('colour-magenta')
  portraitButton.classList.remove('colour-magenta')
  landscapeButton.classList.remove('colour-magenta')
})

portraitButton.addEventListener('click', (event) => {
  changeGallery(portraitImages)
  illustrationButton.classList.remove('colour-magenta')
  portraitButton.classList.add('colour-magenta')
  landscapeButton.classList.remove('colour-magenta')
})

landscapeButton.addEventListener('click', (event) => {
  changeGallery(landscapeImages)
  illustrationButton.classList.remove('colour-magenta')
  portraitButton.classList.remove('colour-magenta')
  landscapeButton.classList.add('colour-magenta')
})

function changeGallery(gallery) {
  currentGallery = gallery
  galleryIndex = 0
  galleryTitle.innerHTML = currentGallery[galleryIndex].title
  galleryMax = currentGallery.length - 1
  galleryImage.src = currentGallery[galleryIndex].img
  loadPreviewImages()
}

function galleryBack() {
  if (galleryIndex === 0) {
    galleryIndex = galleryMax
  } else {
    galleryIndex--
  }
  galleryImage.src = currentGallery[galleryIndex].img
  galleryTitle.innerHTML = currentGallery[galleryIndex].title
}

function galleryForward() {
  if (galleryIndex === currentGallery.length - 1) {
    galleryIndex = 0
  } else {
    galleryIndex++
  }
  galleryImage.src = currentGallery[galleryIndex].img
  galleryTitle.innerHTML = currentGallery[galleryIndex].title
}

changeGallery(illustrationImages)

function loadPreviewImages() {
  previewsContainer.innerHTML = ''
  currentGallery.forEach((image, index) => {
    let newDiv = document.createElement('div')
    newDiv.className = 'preview-container'
    let divImg = createPreview(image.img)
    newDiv.appendChild(divImg)
    newDiv.addEventListener('click', (event) => {
      loadClickedImage(image, index)
    })
    previewsContainer.appendChild(newDiv)
  })
}

function createPreview(image) {
  let newImg = document.createElement('img')
  newImg.src = image
  return newImg
}

function loadClickedImage(image, index) {
  galleryImage.src = image.img
  galleryTitle.innerHTML = image.title
  galleryIndex = index
}

loadPreviewImages()
