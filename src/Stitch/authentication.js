import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  Stitch,
  AnonymousCredential,
  UserPasswordCredential,
  UserPasswordAuthProviderClient,
} from 'mongodb-stitch-react-native-sdk';

const client = Stitch.initializeDefaultAppClient('workey-tgxhu');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserId: undefined,
      client: undefined,
    };
    this._loadClient = this._loadClient.bind(this);
    this._onPressLogin = this._onPressLogin.bind(this);
    this._onPressLogout = this._onPressLogout.bind(this);
    this._onPressSignup = this._onPressSignup.bind(this);
  }

  componentDidMount() {
    this._loadClient();
  }

  render() {
    let loginStatus = 'Currently logged out.';

    if (this.state.currentUserId) {
      loginStatus = `Currently logged in as ${this.state.currentUserId}!`;
    }

    const loginButton = <Button onPress={this._onPressLogin} title="Login" />;

    const signupButton = (
      <Button onPress={this._onPressSignup} title="Signup" />
    );

    const logoutButton = (
      <Button onPress={this._onPressLogout} title="Logout" />
    );

    return (
      <View style={styles.container}>
        <Text> {loginStatus} </Text>
        {this.state.currentUserId !== undefined ? logoutButton : loginButton}
        {/* {signupButton} */}
      </View>
    );
  }

  _loadClient() {
    client.then(client => {
      this.setState({client});

      if (client.auth.isLoggedIn) {
        this.setState({currentUserId: client.auth.user.id});
      }

      client.close();
    });
  }

  _onPressSignup() {
    Stitch.defaultAppClient.auth
      .getProviderClient(UserPasswordAuthProviderClient.factory)
      .registerWithEmail('newemail@gmail.com', 'password')
      .then(() => console.log('Successfully sent account confirmation'))
      .catch(err => console.log('Error: ', err));
  }

  _onPressLogin() {
    this.state.client.auth
      .loginWithCredential(
        // new UserPasswordCredential('workey@gmail.com', 'password'),
        new UserPasswordCredential('newemail@gmail.com', 'password'),
      )
      .then(user => {
        console.log(`Successfully logged in as user ${user.id}`);
        this.setState({currentUserId: user.id});
      })
      .catch(err => {
        console.log(`Failed to log in anonymously: ${err}`);
        this.setState({currentUserId: undefined});
      });
  }

  _onPressLogout() {
    this.state.client.auth
      .logout()
      .then(user => {
        console.log(`Successfully logged out`);
        this.setState({currentUserId: undefined});
      })
      .catch(err => {
        console.log(`Failed to log out: ${err}`);
        this.setState({currentUserId: undefined});
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
