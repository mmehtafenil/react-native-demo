import React, { Component } from "react";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from "react-native";

export default class Login extends Component {
    render() {
      return (
        <View style={styles.wrapper}>
          <ScrollView>
            <Text>Login</Text>
          </ScrollView>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    wrapper: {
      display: "flex",
      flex: 1,
      backgroundColor: '#123123'
    }
  });