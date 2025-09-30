const illustrationImages = []
const portraitImages = []
const landscapeImages = []

// Pages
const mainPage = document.getElementById('page')
const portfolioPage = document.getElementById('portfolio-page')
const aboutPage = document.getElementById('about-page')
const contactPage = document.getElementById('contact-page')
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
// document.querySelectorAll('.button-logic-websites').forEach((button) => {
//   button.addEventListener('click', (event) => {
//     websites()
//   })
// })

function loadHome() {
  mainPage.style.display = 'grid'
  portfolioPage.style.display = 'none'
  aboutPage.style.display = 'none'
  contactPage.style.display = 'none'
  body.style.backgroundImage = 'url(/images/index/PortfolioBG1.png)'
}

function loadPortfolio() {
  mainPage.style.display = 'none'
  portfolioPage.style.display = 'flex'
  aboutPage.style.display = 'none'
  contactPage.style.display = 'none'
  body.style.backgroundImage = 'none'
}

function loadAbout() {
  mainPage.style.display = 'none'
  portfolioPage.style.display = 'none'
  aboutPage.style.display = 'flex'
  contactPage.style.display = 'none'
  body.style.backgroundImage = 'none'
}

function loadContact() {
  mainPage.style.display = 'none'
  portfolioPage.style.display = 'none'
  aboutPage.style.display = 'none'
  contactPage.style.display = 'flex'
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
