import createHeading from './heading.js'
import './main.css'
import icon from './icon.png'

const heading = createHeading()

const image = new Image()
image.src = icon

document.body.append(image)

// import './main.css'

// import footerHtml from './footer.html'

// document.write(footerHtml)