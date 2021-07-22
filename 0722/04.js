const container = document.querySelector('.container')
const spanSize = 40

const heightSpanQty = Math.ceil(window.screen.availHeight / spanSize)
const widthSpanQty = Math.ceil(window.screen.availWidth / spanSize)
const total = heightSpanQty * widthSpanQty

for (let i = 0; i < total; i++) {
  container.insertAdjacentHTML('beforeend', '<span class="container__light-bulb"></span>')
}
