import React, { Component } from 'react';
import { Alert } from 'react-native';
const { Provider, Consumer } = React.createContext();
import Parse from 'parse/react-native';

export const UserConsumer = Consumer;

export class UserProvider extends Component {
   state = {
      user: null,
   };

   componentDidMount() {
      this._getUser();
   }

   _getUser = async () => {
      try {
         const user = await Parse.User.currentAsync();
         return this.setState({ user: user.toJSON() });
      } catch (error) {
         return error;
      }
   }

   login = async () => {
      try {
         const user = await Parse.User.logIn("daviddguedes", "lalala");
         this.setState({ user: user.toJSON() });
      } catch (error) {
         Alert.alert(error.message);
      }
   };

   logout = async () => {
      try {
         const out = await Parse.User.logOut();
         this.setState({ user: null });
      } catch (error) {
         Alert.alert(error.message);
      }
   };

   render() {
      return (
         <Provider value={{
            state: this.state,
            actions: {
               login: this.login,
               logout: this.logout,
            },
         }}>
            {this.props.children}
         </Provider>
      )
   }
}
