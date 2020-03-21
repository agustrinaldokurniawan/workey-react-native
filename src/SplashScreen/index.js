import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Animated} from 'react-native';

const FadeView = props => {
  const [fadeAnim] = useState(new Animated.Value(0));

  const animateImage = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 0.3,
        duration: 1000,
      }).start(animateImage);
    });
  };

  React.useEffect(() => {
    animateImage();
  }, []);

  return (
    <Animated.View style={{...props.style, opacity: fadeAnim}}>
      {props.children}
    </Animated.View>
  );
};

class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FadeView>
          <Image
            source={require('../image/logo.png')}
            style={{width: 250, height: 250}}
          />
        </FadeView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  eclipse: {
    position: 'absolute',
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 50,
    color: '#02bae8',
  },
});

export default SplashScreen;
