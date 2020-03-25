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
  UserPasswordAuthProviderClient,
} from 'mongodb-stitch-react-native-sdk';

const QuicksandSM = styled.Text`
  font-family: Quicksand-SemiBold;
`;

const Value = styled(QuicksandSM)`
  font-size: 30px;
  margin-top: 10px;
  text-align: center;
  color: #ffbb30;
`;

const client = Stitch.initializeDefaultAppClient('workey-tgxhu');

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phoneNumber: '',
      password: '',
      showPassword: false,
      client: undefined,
      currentUserId: undefined,
    };

    this.showPassword = this.showPassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
    this.loadClient = this.loadClient.bind(this);
    this.authenticateRegistration = this.authenticateRegistration.bind(this);
  }

  componentDidMount() {
    this.loadClient();
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

  authenticateRegistration(email, password) {
    const emailPasswordClient = Stitch.defaultAppClient.auth.getProviderClient(
      UserPasswordAuthProviderClient.factory,
    );

    emailPasswordClient
      .registerWithEmail(email, password)
      .then(() => console.log(`Success ${email} - ${password}`))
      .catch(e => console.log(`${e}`));
  }

  showPassword() {
    this.setState({showPassword: true});
  }

  hidePassword() {
    this.setState({showPassword: false});
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
        <Content showsVerticalScrollIndicator={false}>
          <Image source={require('../image/logo.png')} style={styles.vector} />
          <Value>Buat Akun Baru</Value>
          <Form style={{marginTop: 50}}>
            <Label style={{color: '#ffbb30', fontSize: 16}}>
              <QuicksandSM>Email</QuicksandSM>
            </Label>
            <Item rounded style={{borderColor: '#ffbb30'}}>
              <Input
                onChangeText={email => {
                  this.setState({email});
                }}
                value={this.state.email}
              />
            </Item>
            <Label style={{color: '#ffbb30', fontSize: 16}}>
              <QuicksandSM>Nomor Handphone</QuicksandSM>
            </Label>
            <Item rounded style={{borderColor: '#ffbb30'}}>
              <Input
                onChangeText={phoneNumber => {
                  this.setState({phoneNumber});
                }}
                value={this.state.phoneNumber}
              />
            </Item>
            <Label style={{color: '#ffbb30', fontSize: 16}}>
              <QuicksandSM>Password</QuicksandSM>
            </Label>
            <Item rounded style={{borderColor: '#ffbb30'}}>
              <Input
                onChangeText={password => {
                  this.setState({password});
                }}
                value={this.state.password}
                secureTextEntry={this.state.showPassword ? false : true}
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
                this.authenticateRegistration(
                  this.state.email,
                  this.state.password,
                )
              }>
              <Text style={{fontSize: 20}}>
                <QuicksandSM>Daftar</QuicksandSM>
              </Text>
            </Button>
            <Label
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: '#ffbb30',
                marginBottom: 40,
              }}>
              <QuicksandSM>
                Sudah punya akun?
                <QuicksandSM onPress={() => navigate('LoginScreen')}>
                  {' '}
                  Masuk Sekarang
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

export default Signup;
