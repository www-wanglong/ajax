import axios from 'axios'

export const SAVA_USER = 'save_user';

// 创建请求 获取用户列表数据
export const fetchUser = () => async dispatch => {
  //let response = await axios.get('https://jsonplaceholder.typicode.com/users');
  let response = {
    data: [{id: 1, name: '<script>alert(1)</script>'}]
  }
  dispatch({
    type: SAVA_USER,
    response: response
  })
}