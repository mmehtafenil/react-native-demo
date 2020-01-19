import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Explore from  './Explore';

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Explore/>
                <Text>Profile</Text>
            </View>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});