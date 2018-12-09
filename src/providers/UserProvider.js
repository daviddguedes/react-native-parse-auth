import React, { Component } from 'react';
import { Alert } from 'react-native';
const { Provider, Consumer } = React.createContext();
import Parse from 'parse/react-native';

export const UserConsumer = Consumer;

export class UserProvider extends Component {
   state = {
      user: null,
      loading: false,
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
      this.setState({ loading: true });
      try {
         const user = await Parse.User.logIn("daviddguedes", "lalala");
         this.setState({ user: user.toJSON(), loading: false });
      } catch (error) {
         this.setState({ loading: false });
         Alert.alert(error.message);
      } finally {
         this.setState({ loading: false });
      }
   };

   logout = async () => {
      this.setState({ loading: true });
      try {
         const out = await Parse.User.logOut();
         this.setState({ user: null, loading: false });
      } catch (error) {
         this.setState({ loading: false });
         Alert.alert(error.message);
      } finally {
         this.setState({ loading: false });
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
