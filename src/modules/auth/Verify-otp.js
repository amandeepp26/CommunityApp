import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../navigation/styles';
import {colors} from '../../styles';
import Button from '../../components/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function Otp({navigation}) {
  return (
    <View style={style.container}>
            <View>
        <Image
           source={require('../auth/images/lock.jpg')}
           resizeMode='contain'
           style={{width: '100%',height:200}}/>
        </View>
      <View>
        <Text style={[styles.h1, {textAlign: 'left'}]}>
          Verfiy Your Account
        </Text>
        <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
          Verification code has been sent to your mobile phone
        </Text>
        <OTPInputView
            style={{
              width: '70%',
              alignSelf: 'center',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
              height: 30,
              marginBottom:20
            }}
            pinCount={4}
            autoFocusOnLoad
            keyboardType="number-pad"

          />
        <Button
          text={'Verify'}
          backgroundColor={colors.primaryColor}
          color={false}
          onpress={() => navigation.navigate('Matrimony')}
        />

<Text
          style={[styles.h6, {paddingBottom: 10,marginTop:20,alignSelf:'center', color: colors.primaryColor}]}>
          Resend Code
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
});
