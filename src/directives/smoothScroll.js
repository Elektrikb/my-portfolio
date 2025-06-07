export default {
  mounted(el) {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = el.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  }
}