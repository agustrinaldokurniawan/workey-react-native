import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Button} from 'native-base';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.eclipse} />
          <Text style={styles.logoText}>WORKEY!</Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              fontFamily: 'Quicksand-Regular',
            }}>
            Workey
          </Text>
        </View>
        <View
          style={{
            width: 300,
            height: 300,
            backgroundColor: '#f7e5ba',
            alignSelf: 'center',
            marginBottom: 200,
            borderRadius: 10,
          }}>
          <View
            style={{
              justifyContent: 'space-around',
              flex: 1,
              flexDirection: 'column',
              alignItems: 'stretch',
            }}>
            <View
              style={{
                height: 150,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'yellow',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                  }}>
                  <Icon name="menu" />
                </View>
                <Text>SOP Produk</Text>
              </View>
              <View
                style={{
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'yellow',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                  }}>
                  <Icon name="menu" />
                </View>
                <Text>SOP Produk</Text>
              </View>
            </View>
            <View
              style={{
                height: 150,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'yellow',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                  }}>
                  <Icon name="menu" />
                </View>
                <Text>SOP Produk</Text>
              </View>
              <View
                style={{
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'yellow',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                  }}>
                  <Icon name="menu" />
                </View>
                <Text
                  styles={{
                    fontFamily: 'Quicksand-Regular',
                  }}>
                  Workey
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    fontFamily: 'Quicksand-Regular',
  },
  header: {
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  eclipse: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'yellow',
    position: 'absolute',
    right: 50,
  },
  logoText: {
    marginRight: 30,
    fontSize: 20,
    color: '#02bae8',
  },
});

export default HomeScreen;
