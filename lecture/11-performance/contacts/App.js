import React from 'react'
import {Provider} from 'react-redux'
import {StyleSheet, View} from 'react-native'
import {Constants} from 'expo'

import {PersistGate} from 'redux-persist/integration/react' // eslint-disable-line

// import ContactListScreen from './screens/ContactListScreen'
import PureButtonScreen from './PureButtonScreen'
import store from './redux/store' // eslint-disable-line

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
})

export default () => (
  <Provider store={store}>
    <View style={styles.app}>
      <PureButtonScreen />
    </View>
  </Provider>
)
