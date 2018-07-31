import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Testing App</Text>
          <Text>How are youu mate?</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow : 1,
    justifyContent : 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: '#FF99FF',
    fontSize: 28
  }
});
