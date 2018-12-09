import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Parse from 'parse/react-native';
import { UserProvider, UserConsumer } from './UserProvider';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { APP_ID, JAVASCRIPT_KEY, SERVER_URL } from './Config';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    Parse.setAsyncStorage(AsyncStorage);
    Parse.initialize(APP_ID, JAVASCRIPT_KEY);
    Parse.serverURL = SERVER_URL;
  }

  render() {
    return (
      <UserProvider>
        <UserConsumer>
          {({ state }) => (
            state.user ? <AppNavigator /> : <AuthNavigator />
          )}
        </UserConsumer>
      </UserProvider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
