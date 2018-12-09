import React, { Component } from 'react';
import Parse from 'parse/react-native';
import { UserConsumer } from '../providers/UserProvider';
import { Container, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class HomeScreen extends Component {

   constructor(props) {
      super(props);
   }

   getMessages = () => {
      const query = new Parse.Query('Messages');
      query.find()
         .then(response => response.map(res => res.toJSON()))
         .catch(e => {
            console.log(e.message);
         })
         .then(res => {
            console.log(res);
         });
   }

   render() {
      return (
         <UserConsumer>
            {({ state, actions }) => (
               <Container>
                  <Grid>
                     <Col>
                        <Text>HomeScreen</Text>
                        <Text>Você está logado como {state.user.username}</Text>
                        <Text onPress={actions.logout}>Logout</Text>
                     </Col>
                  </Grid>
               </Container>
            )}
         </UserConsumer>
      )
   };
}

export default HomeScreen;