// animation scroll

const mouseDot = document.querySelector('.main__scroll-dot')
const mouseAddAnimation = () => mouseDot.classList.add('active')
const mouseRemoveAnimation = () => mouseDot.classList.remove('active')

window.addEventListener('wheel', e => {
  e.deltaY > 0 ? mouseAddAnimation() : mouseRemoveAnimation()
})

// show popup

const showPopupBtn = document.querySelector('.top-header-contacts__makecall')
const showPopupBtnCalc = document.querySelector('.top-header__calc-btn')
const showPopupBtnMobile = document.querySelector('.mobile-contacts__makecall-btn')
const closePopupBtn = document.querySelector('.popup-close')
const popup = document.querySelector('.popup')
const popupOverlay = document.querySelector('.popup-overlay')
const popupSuccess = document.querySelector('.popup-success')
const popupSubmitBtn = document.querySelector('.popup__form-button')
const formInputCheck = document.querySelector('.popup__form-confcheck')

const formInput = document.querySelector('.popup__form-input')

const formMask = new IMask(formInput, {
  mask: '+{7}(900)000-00-00'
})

const showPopup = () => {
  popup.classList.add('active')
  popupOverlay.classList.add('active')
}
const closePopup = () => {
  popup.classList.remove('active')
  popupOverlay.classList.remove('active')
}

const hideSuccessMsg = () => {
  setTimeout(() => {
    popupSuccess.classList.remove('active')
    popupOverlay.classList.remove('active')
  }, 2000)
}

const sendForm = e => {
  e.preventDefault()
  popupSuccess.classList.add('active')
  popup.classList.remove('active')
  hideSuccessMsg()
}

const isFormValid = target => {
  !target.hasAttribute('checked')
    ? popupSubmitBtn.setAttribute('disabled', 'disabled')
    : popupSubmitBtn.removeAttribute('disabled')
}

showPopupBtn.addEventListener('click', showPopup)
showPopupBtnCalc.addEventListener('click', showPopup)
showPopupBtnMobile.addEventListener('click', showPopup)
popupOverlay.addEventListener('click', closePopup)
closePopupBtn.addEventListener('click', closePopup)
popupSubmitBtn.addEventListener('click', e => sendForm(e))
formInputCheck.addEventListener('change', e => {
  e.target.toggleAttribute('checked')
  isFormValid(e.target)
})

// show burger

const burgerBtn = document.querySelector('.header-mobile__burger-btn')
const mobileMenu = document.querySelector('.mobile-menu')

burgerBtn.addEventListener('click', () => {
  if (burgerBtn.classList.contains('active')) {
    mobileMenu.style.display = 'none'
    mobileMenuHeader.classList.remove('active')
    burgerBtn.classList.remove('active')
    document.querySelector('.items-mobile').style.display = 'grid'
  } else {
    mobileMenu.style.display = 'block'
    mobileMenu.style.paddingTop = '5rem'
    mobileMenuHeader.classList.add('active')
    burgerBtn.classList.add('active')
    document.querySelector('.items-mobile').style.display = 'none'
  }
})

// map

const map = document.querySelector('.map-overlay')
const mapBtn = document.querySelector('.top-header__map')
const mobileMenuHeader = document.querySelector('.header-mobile__top')
const mobileTitle = document.querySelector('.main__title')

const titleCoords = mobileTitle.getBoundingClientRect().y
console.log(titleCoords)

mapBtn.addEventListener('click', () => {
  map.classList.toggle('active')
  mapBtn.classList.toggle('active')
})

window.addEventListener('wheel', e => {
  mobileTitle.getBoundingClientRect().y < 72 && !mobileMenuHeader.classList.contains('active')
    ? (mobileMenuHeader.style.background = 'rgba(42, 42, 42, 0.5)')
    : (mobileMenuHeader.style.background = '')
})

// console.log(2)