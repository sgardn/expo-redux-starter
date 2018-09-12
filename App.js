import React from 'react'
import AppNavigator from './navigation/AppNavigator'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

export default class App extends React.Component {
  render() {
    const store = createStore(rootReducer, applyMiddleware(thunk))

    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
