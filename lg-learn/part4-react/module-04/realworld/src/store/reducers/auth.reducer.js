const initialState = {
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'loginSuccess':
    case 'loadUserSuccess':
      return {
        success: true,
        user: action.payload,
      }
    default:
      return state
  }

}