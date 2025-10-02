const illustrationImages = []
const portraitImages = []
const landscapeImages = []

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
const backButton = document.getElementById('gallery-back')
const forwardButton = document.getElementById('gallery-forward')
let galleryImage = document.getElementById('gallery-image')
let galleryCurrent = 1
let galleryMax = 9

backButton.addEventListener('click', (event) => {
  galleryBack()
})

forwardButton.addEventListener('click', (event) => {
  galleryForward()
})

function galleryBack() {
  if (galleryCurrent === 1) {
    galleryCurrent = galleryMax
  } else {
    galleryCurrent--
  }
  galleryImage.src = `./images/portfolio/portraits/portrait_${galleryCurrent}.png`
}

function galleryForward() {
  if (galleryCurrent === galleryMax) {
    galleryCurrent = 1
  } else {
    galleryCurrent++
  }
  galleryImage.src = `./images/portfolio/portraits/portrait_${galleryCurrent}.png`
}
