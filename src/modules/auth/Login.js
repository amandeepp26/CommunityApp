//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from '../navigation/styles';
import RNSTextInput from '../../components/RNSTextInput';
import Button from '../../components/Button';
import {colors} from '../../styles';

// create a component
const Login = ({navigation}) => {
  return (
    <View style={style.container}>
      <View>
        <Image
          source={require('../auth/images/login.png')}
          resizeMode="contain"
          style={{width: '100%', height: 250}}
        />
      </View>
      <View>
        <Text style={[styles.h1, {textAlign: 'left'}]}>Hello,</Text>
        <Text style={[styles.h1, {textAlign: 'left'}]}>Welcome Back!</Text>

        <View style={{width: '100%', paddingTop: 40}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Phone number
          </Text>
          <RNSTextInput
            placeHolder={'Enter your number'}
            keyboard={'numeric'}
            onChangeText={e => setPhoneNumber(e)}
            value={''}
            maxLength={10}
          />
        </View>
        {/* <Text style={[styles.h6,{paddingTop:40}]}>A 4 digit OTP will be send via SMS to verify your mobile number.</Text> */}
        <Button
          text={'Login'}
          backgroundColor={colors.primaryColor}
          color={false}
          onpress={() => navigation.navigate('Otp')}
        />
        <Text
          style={[
            styles.h6,
            {paddingTop: 40, textAlign: 'center', color: colors.gray},
          ]}>
          Don't have an account?{' '}
          <Text
            style={[styles.h6, {paddingTop: 40, color: colors.primaryColor}]}
            onPress={() => navigation.navigate('Signup')}>
            Signup
          </Text>
        </Text>
      </View>
    </View>
  );
};

// define your styles
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
});

//make this component available to the app
export default Login;
