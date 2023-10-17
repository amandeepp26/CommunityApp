//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from '../navigation/styles';
import NotSubscribed from '../../components/NotSubscribed';

// create a component
function Home({navigation}) {
  
  return (
    <View style={style.container}>
      <NotSubscribed
        navigation={navigation}
        text={
          "You're not Subscribed, Please Subscribe for the matrimony registration."
        }
        buttonText={'Subscribe'}
      />
    </View>
  );
}

// define your styles
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Home;
