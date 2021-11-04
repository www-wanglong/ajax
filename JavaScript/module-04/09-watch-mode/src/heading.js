import './heading.css'

export default () => {
  console.log('Heading~')

  const element = document.createElement('h2')

  element.textContent = 'Hellowsw wowwwwrld'
  element.classList.add('heading')
  element.addEventListener('click', () => {
    alert('Hello webpack')
  })

  return element
}
