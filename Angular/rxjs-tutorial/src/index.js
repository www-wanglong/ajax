import axios from 'axios'
import { range, fromEvent, from } from 'rxjs'
import { distinctUntilChanged, map, switchMap, throttleTime, debounceTime, takeUntil } from 'rxjs/operators'

const search = document.getElementById('search')

fromEvent(search, 'keyup')
  .pipe(
    debounceTime(1000),
    map(event => event.target.value),
    distinctUntilChanged(),
    switchMap(keyword => from(axios.get(`https://jsonplaceholder.typicode.com/posts?q=${keyword}`)))
  )
  .subscribe(console.log)

// const box = document.getElementById('box')

// fromEvent(box, 'mousedown')
//   .pipe(
//     map(event => ({
//       distanceX: event.clientX - event.target.offsetLeft,
//       distanceY: event.clientY - event.target.offsetTop
//     })),
//     switchMap(({distanceX,  distanceY}) =>
//       fromEvent(document, 'mousemove').pipe(map(event => ({
//         left: event.clientX - distanceX,
//         top: event.clientY - distanceY
//       })),
//       takeUntil(fromEvent(box, 'mouseup'))
//     ))
//   )
//   .subscribe(function ({ left, top}) {
//     box.style.left = left + 'px'
//     box.style.top = top + 'px'
//   })

// fromEvent(box, 'onmouseup')

// box.onmousedown = function (event) {
//   let distanceX = event.clientX - event.target.offsetLeft
//   let distanceY = event.clientY - event.target.offsetTop

//   document.onmousemove = function (event) {
//     let left = event.clientX - distanceX
//     let top =  event.clientY - distanceY
//     box.style.left = left + 'px'
//     box.style.top = top + 'px'
//   }

//   box.onmouseup = function () {
//     document.onmousemove = null
//   }
// }
// const button = document.getElementById('btn')

// fromEvent(button, 'click')
//   .pipe(debounceTime(1000))
//   .subscribe(console.log)


// fromEvent(document, 'mousemove').pipe(
//   takeUntil(fromEvent(button, 'click'))
// ).subscribe(console.log)

// range(1, 10)
//   .pipe(takeWhile( n => n < 3))
//   .subscribe(console.log)

// const button = document.getElementById('btn')

// 切换数据流
// fromEvent(button, 'click')
//   .pipe(
//     switchMap(event => interval(1000))
//   )
//   .subscribe(console.log)

// interval(1000).subscribe(console.log)

// const button = document.getElementById('btn')

// fromEvent(button, 'click')
//   .pipe(pluck('target'))
//   .subscribe(console.log)
// http://localhost:3005/goods
// http://localhost:3005/category

// axios.interceptors.response.use(response => response.data)

// forkJoin({
//   goods: from(axios.get('http://localhost:3005/goods')),
//   category: from(axios.get('http://localhost:3005/category'))
// }).subscribe(console.log)



// import { from } from 'rxjs'

// from(['a', 'b', 'c']).subscribe(console.log)

// function p () {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve({a: 1})
//     }, 2000)
//   })
// }

// from(p()).subscribe(console.log)

// import { range } from 'rxjs'
// import { map } from 'rxjs/operators'

// range(1, 10)
// .pipe(map(n => n * 10))
// .subscribe(function (value) {
//   console.log(value)
// })

// import { ReplaySubject } from 'rxjs'

// const rSubject = new ReplaySubject()

// rSubject.subscribe(value () => {
//   console.log('w')
// })


// import { BehaviorSubject } from 'rxjs'

// const demoBehaviorSubject  = new BehaviorSubject('default')

// demoBehaviorSubject.subscribe({
//   next: function (value) {
//     console.log(value)
//   }
// })

// demoBehaviorSubject.next('hello')

// import { Subject } from 'rxjs'

// const domeSubject = new Subject()

// domeSubject.subscribe({
//   next: function (value) {
//     console.log(value)
//   }
// })

// domeSubject.subscribe({
//   next: function (value) {
//     console.log(value)
//   }
// })

// setTimeout(function () {
//   domeSubject.next('hello')
// }, 2000)

// import { Observable } from 'rxjs'

// const observable = new Observable(function (observer) {
//   setTimeout(function () {
//     observer.next({name: '张三'})
//   }, 2000)
// })

// const observer = {
//   next: function (value) {
//     console.log(value)
//   }
// }

// observable.subscribe(observer)
