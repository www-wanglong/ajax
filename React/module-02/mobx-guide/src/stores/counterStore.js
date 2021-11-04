// 1. 创建store对对象、存储默认状态
// 2. 将store对象放在一个全局的 组件可以够的到的地方
// 3. 让组件获取store对象中的状态， 并将状态显示在组件中
import {
  observable,
  action,
  runInAction,
  flow,
  computed,
  configure,
  autorun,
} from 'mobx'
import axios from 'axios'

// 通过配置强制程序使用action函数更改应用程序中的状态
configure({
  enforceActions: 'observed'
})

class CounterStore {

  constructor() {
    autorun(() => {
      try {
        uniqueUsername(this.username)
        console.log('用户名可用')
      } catch (e) {
        console.log(e.message)
      }
    }, {
      delay: 2000 //延迟2s执行
    })
  }

  // 可观测的数据
  @observable count = 0
  @observable users = []
  @observable username = ''

  @action.bound increment() {
    this.count += 1
  }

  //通过@action 将方法改为action函数 bound绑定this
  @action.bound decrement() {
    this.count -= 1
  }

  // 异步函数不能更新数据 需要使用runInAction更新状态
  // @action.bound async getData() {
  //   let { data } = await axios.get('https://api.github.com/users')
  //   //
  //   runInAction(() => this.users = data)
  // }

  // flow 异步更新本地状态
  getData = flow(function* () {
    let { data } = yield axios.get('https://api.github.com/users')
    this.users = data
  }).bind(this)

  /**
   * 计算属性使用computed装饰
   */
  @computed get getResult() {
    return this.count * 10
  }

  @action.bound changeUserName(username) {
    this.username = username
  }

}

function uniqueUsername (username) {
  return new Promise((resolve, reject) => {
    if (username === 'admin') {
      reject('用户名已存在')
    } else{
      resolve()
    }
  })
}

const counter = new CounterStore()

export default counter