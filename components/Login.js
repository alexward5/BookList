import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Container, Header, Content, Form, Item, Input } from 'native-base';

class Login extends React.Component {
  render() {
    return (
      <Container>
        <Text style={styles.titleText}>BookList</Text>
        <Content>
          <Form style={styles.formStyle}>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button rounded 
            style={styles.buttonStyle}
            onPress={() => this.props.switchScreen("account")}
            ><Text style={styles.buttonText}>Log In</Text>
          </Button>
          <Button rounded style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = {
  titleText: {
    alignSelf: 'center',
    fontSize: 40,
    marginTop: '40%'
  },
  formStyle: {
    marginBottom: 30
  },
  buttonStyle: {
    width: '40%',
    marginBottom: 30,
    marginLeft: '30%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  }
};

export default Login;
