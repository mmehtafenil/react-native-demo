import React, { Component } from "react";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";

class Saved extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
         
                
            </View>

            <Button
                icon={
                    <Icon
                    name="arrow-left"
                    size={15}
                    color="white"
                    />
                }
                title="Saved"
            />
            </SafeAreaView>
        );
    }
}
export default Saved;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == 'android' ? 30 : null ,
        alignItems: 'center',
        
        
    }
});