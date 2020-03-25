import React, {useState} from 'react';
// import {QuicksandReg} from '../CustomText/QuicksandReg';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Icon, Button} from 'native-base';
import styled from 'styled-components';
import {Pages} from 'react-native-pages';

const QuicksandSM = styled.Text`
  font-family: Quicksand-SemiBold;
`;

const Value = styled(QuicksandSM)`
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
`;

class SplashScreenFeature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#f3f3f3',
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View
        style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
        <View
          style={{
            width: '100%',
            height: '80%',
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <Pages style={{backgroundColor: 'white'}} indicatorColor="#ffbb30">
            <View style={styles.content}>
              <Image
                source={require('../image/quality-control.png')}
                style={styles.vector}
              />
              <Value>Pantau Perfoma UMKM Kamu</Value>
            </View>
            <View style={styles.content}>
              <Image
                source={require('../image/prosedur.png')}
                style={styles.vector}
              />
              <Value>Pantau Aktifitas Karyawan</Value>
            </View>
            <View style={styles.content}>
              <Image
                source={require('../image/reward.png')}
                style={styles.vector}
              />
              <Value>Reward dan Punishment terhadap karyawan</Value>
            </View>
          </Pages>
        </View>
        <View>
          <Button
            block
            large
            onPress={() => navigate('LoginScreen')}
            style={{backgroundColor: '#ffbb30'}}>
            <QuicksandSM style={{fontSize: 30, color: 'white'}}>
              Mulai Sekarang
            </QuicksandSM>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  vector: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});

export default SplashScreenFeature;
