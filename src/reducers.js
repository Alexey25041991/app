const initialState = { userStatus: 'unauthorized' }

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { userStatus: 'authorized' }

    case 'LOGOUT':
      return { userStatus: 'unauthorized' }

    default:
      return state
  }
}
