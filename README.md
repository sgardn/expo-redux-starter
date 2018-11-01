# expo-redux-starter

To get started run `yarn install` and then either launch the app with the expo CLI (`expo start`) or run the repository with the SDK (https://expo.io/tools#sdk). You'll have to create a free account and log in if you haven't done so already.

You'll also need to install the client app on your phone (https://expo.io/tools#client).

## things included and motivation

#### [react](https://reactjs.org/) + [react-native](https://facebook.github.io/react-native/)
A little obvious, don't you think?

#### [expo](https://expo.io)
Developing apps on your actual device is fun and rewarding. So is using the [extended SDK](https://docs.expo.io/versions/v26.0.0/sdk/) they've been working on. Go check it out!

#### [redux](https://redux.js.org/) + [react-redux](https://github.com/reduxjs/react-redux)
Any app that becomes relatively complex benefits from a more deterministic and organized approach to managing data and state

#### [redux-thunk](https://github.com/reduxjs/redux-thunk)
`getState` is quite useful in actions when you have to pass along user tokens and other data you'd rather not repeat at every action invocation

#### [react-navigation](https://reactnavigation.org/)
Included by default in Expo's boilerplate, seems to do everything I've needed to do so far

#### [wretch](https://github.com/elbywan/wretch)
Pulls in some useful functionality to reduce boilerplate for your actions, makes handling `fetch` calls real easy

#### [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
Easy enough to get up and running with an example (free) API that offers some relational data to set up a few screens
