import React from 'react';

import SplashScreenLogo from './src/SplashScreen/index';
import Navigation from './src/Navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  render() {
    if (this.state.isLogin) {
      return <SplashScreenLogo />;
    }
    return <Navigation />;
  }
}

export default App;
