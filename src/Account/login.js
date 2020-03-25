import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon,
} from 'native-base';

import {
  Stitch,
  AnonymousCredential,
  UserPasswordCredential,
  UserPasswordAuthProviderClient,
} from 'mongodb-stitch-react-native-sdk';

const client = Stitch.initializeDefaultAppClient('workey-tgxhu');

const QuicksandSM = styled.Text`
  font-family: Quicksand-SemiBold;
`;

const Value = styled(QuicksandSM)`
  font-size: 30px;
  margin-top: 10px;
  text-align: center;
  color: #ffbb30;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      showPassword: false,
      client: undefined,
      currentUserId: undefined,
    };
    this.showPassword = this.showPassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.authentication = this.authentication.bind(this);
    this.loadClient = this.loadClient.bind(this);
  }

  componentDidMount() {
    this.loadClient();
  }

  showPassword() {
    this.setState({showPassword: true});
  }

  hidePassword() {
    this.setState({showPassword: false});
  }

  authentication(email, password) {
    this.state.client.auth
      .loginWithCredential(
        // new UserPasswordCredential('workey@gmail.com', 'password'),
        // new UserPasswordCredential('newemail@gmail.com', 'password'),
        new UserPasswordCredential(email, password),
      )
      .then(user => {
        console.log(`Successfully logged in as user ${user.id}`);
        this.setState({currentUserId: user.id});
        this.props.navigation.navigate('HomeScreen');
      })
      .catch(err => {
        console.log(`Failed to log in anonymously: ${err}`);
        this.setState({currentUserId: undefined});
        alert('Incorrect Email/Password');
      });
  }

  loadClient() {
    client.then(client => {
      this.setState({client});

      if (client.auth.isLoggedIn) {
        this.setState({currentUserId: client.auth.user.id});
      }

      client.close();
    });
  }

  onSubmitHandler(email, password) {
    if (this.state.email) {
      if (this.state.password) {
        this.authentication(email, password);
      } else {
        alert('Please input your password');
      }
    } else {
      alert('Please input your email');
    }
  }

  render() {
    const {navigate} = this.props.navigation;

    const showPasswordButton = (
      <Icon
        active
        type="FontAwesome"
        name="eye-slash"
        style={{paddingRight: 20}}
        onPress={this.showPassword}
      />
    );

    const hidePasswordButton = (
      <Icon
        active
        type="FontAwesome"
        name="eye"
        style={{paddingRight: 20}}
        onPress={this.hidePassword}
      />
    );

    return (
      <Container style={{paddingLeft: 25, paddingRight: 25}}>
        <Content>
          <Image source={require('../image/logo.png')} style={styles.vector} />
          <Value>Selamat Datang!</Value>
          <Form style={{marginTop: 50}}>
            <Label style={{color: '#ffbb30', fontSize: 16}}>
              <QuicksandSM>Email atau Nomor Handphone</QuicksandSM>
            </Label>
            <Item rounded style={{borderColor: '#ffbb30', marginBottom: 20}}>
              <Input
                onChangeText={email => {
                  this.setState({email});
                }}
                value={this.state.email}
              />
            </Item>
            <Label style={{color: '#ffbb30', fontSize: 16}}>
              <QuicksandSM>Password</QuicksandSM>
            </Label>
            <Item rounded style={{borderColor: '#ffbb30'}}>
              <Input
                secureTextEntry={this.state.showPassword ? false : true}
                onChangeText={password => {
                  this.setState({password});
                }}
                value={this.state.password}
              />
              {this.state.showPassword
                ? hidePasswordButton
                : showPasswordButton}
            </Item>
            <Button
              full
              rounded
              style={{
                marginTop: 40,
                marginBottom: 10,
                backgroundColor: '#ffbb30',
                width: '50%',
                alignSelf: 'center',
              }}
              onPress={() =>
                this.onSubmitHandler(this.state.email, this.state.password)
              }>
              <Text style={{fontSize: 20}}>
                <QuicksandSM>Masuk</QuicksandSM>
              </Text>
            </Button>
            <Label
              style={{textAlign: 'center', fontSize: 16, color: '#ffbb30'}}>
              <QuicksandSM>
                Belum punya akun?
                <QuicksandSM onPress={() => navigate('SignupScreen')}>
                  {' '}
                  Daftar Sekarang
                </QuicksandSM>
              </QuicksandSM>
            </Label>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  vector: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default Login;
