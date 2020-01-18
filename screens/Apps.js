import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";


class Apps extends Component {
  render() {
      return (
          <View style={styles.container}>
              <Text>Apps from Screen</Text>
          </View>
      );
  }
}
export default Apps;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
