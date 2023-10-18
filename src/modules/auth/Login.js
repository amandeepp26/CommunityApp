//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from '../navigation/styles';
import RNSTextInput from '../../components/RNSTextInput';
import Button from '../../components/Button';
import {colors} from '../../styles';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { setPhoneNumber,requestOtp } from './signin';

// create a component
const Login = ({navigation}) => {
  const phone_number = useSelector(state=>state.signin.phone_number);
  const loading = useSelector(state=>state.signin.loading)
  const dispatch = useDispatch();

  const sendOtp = () => {
    // Check if the phone number is empty
    if (phone_number === "") {
      Toast.show({
        text1: "Please enter a phone number",
        type: "error"
      });
      return null;
    }
    const phoneRegex = /^[0-9]{10}$/; // This example assumes a 10-digit number
  
    if (!phoneRegex.test(phone_number)) {
      Toast.show({
        text1: "Please enter a valid phone number",
        type: "error"
      });
      return null;
    }
  
    // If the phone number is valid, dispatch the requestOtp action
    dispatch(requestOtp(function () {
      navigation.navigate('Otp', {
        phone_number: phone_number
      });
    }));
  };
  
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
            onChangeText={e => dispatch(setPhoneNumber(e))}
            value={phone_number}
            maxLength={10}
          />
        </View>
        {/* <Text style={[styles.h6,{paddingTop:40}]}>A 4 digit OTP will be send via SMS to verify your mobile number.</Text> */}
        {loading ? (
            <Button load={true}
            backgroundColor={colors.primaryColor} />
          ) : (
        <Button
          text={'Login'}
          backgroundColor={colors.primaryColor}
          color={false}
          onpress={() => sendOtp()}
        />
          )}
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
