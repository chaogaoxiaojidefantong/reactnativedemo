import React, { Component } from 'react';
import { ScrollView,Text,Image, View,Button } from 'react-native';
export default class Login extends Component{
    componentDidMount(){
        debugger
    }
    render(){
        return(
            <View>
                <Text>logn</Text>
                <Button
      title="Go to regist"
      onPress={() => this.props.navigation.navigate('Profile')}
    />
            </View>
        )
    }
}