import React from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';


export default class Searchscreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity>
          <Icon name="search-outline" size={30}></Icon>
          <Text>Search</Text>
          </TouchableOpacity>
         
        </View>
      );
    }
  }