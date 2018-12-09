import React, { Component } from 'react';
import { Alert } from 'react-native';
import Parse from 'parse/react-native';
import { UserConsumer } from '../providers/UserProvider';
import { Container, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class LoginScreen extends Component {

   doLogin = async () => {
      try {
         const user = await Parse.User.logIn("daviddguedes", "lalala");
      } catch (error) {
         Alert.alert(error.message);
      }
   }

   render() {
      return (
         <UserConsumer>
            {({ state, actions }) => (
               <Container>
                  <Grid>
                     <Col>
                        <Text onPress={actions.login}>LoginScreen</Text>
                     </Col>
                  </Grid>
               </Container>
            )}
         </UserConsumer>
      )
   };
}

export default LoginScreen;