import React from 'react';

import SplashScreenLogo from './src/SplashScreen/index';
import Navigation from './src/Navigation';

import {
  Stitch,
  AnonymousCredential,
  UserPasswordCredential,
  UserPasswordAuthProviderClient,
} from 'mongodb-stitch-react-native-sdk';

const APP_ID = 'workey-tgxhu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  componentDidMount() {
    // this._loadClient();
    Stitch.hasAppClient(APP_ID)
      ? Stitch.getAppClient(APP_ID)
      : Stitch.initializeDefaultAppClient(APP_ID);
  }

  render() {
    if (this.state.isLogin) {
      return <SplashScreenLogo />;
    }
    return <Navigation />;
  }
}

export default App;
