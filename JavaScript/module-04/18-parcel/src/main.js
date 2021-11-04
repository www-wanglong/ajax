// import $ from 'jquery'
import foo from './foo'
import './style.css'

foo.bar()

import('jquery').then( $ => {
  $(document.body).append('<h1>hello parcel</h1>')
} )



if (module.hot) { //使用hmr的api
  module.hot.accept( () => {
    console.log('hmr')
  })
}