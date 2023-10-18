import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import styles from '../../navigation/styles';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import {colors} from '../../../styles';

const stepStyle = {
  activeStepIconBorderColor: colors.primaryColor,
  activeLabelColor: colors.primaryColor,
  activeStepNumColor: colors.primaryColor,
  activeStepIconColor: '#fff',
  completedStepIconColor: colors.primaryColor,
  completedProgressBarColor: colors.primaryColor,
  completedCheckColor: '#fff',
};
const buttonTextStyle = {
  color: '#fff',
  backgroundColor: colors.primaryColor,
  paddingHorizontal: 30,
  paddingVertical: 7,
  borderRadius: 100,
  position: 'absolute',
  right: -30,
};

const previousButtonTextStyle = {
  color: 'gray',
  backgroundColor:'#f0f0f0',
  borderWidth:1,
  borderColor:"#d3d3d3",
  paddingHorizontal: 30,
  paddingVertical: 7,
  borderRadius: 100,
  position: 'absolute',
  left: -30,
};



const submitButtonStyle = {
  backgroundColor: colors.primaryColor,
  padding: 10,
  borderRadius: 5,
};

const submitButtonTextStyle = {
  color: '#fff',
  fontWeight: 'bold',
};

export default function MatrimonyRegistration({navigation}) {
  return (
    <View style={style.container}>
      <ProgressSteps style={{width: '100%'}} {...stepStyle}>
        <ProgressStep
          label="Personal Details"
          nextBtnTextStyle={buttonTextStyle}>
          <View style={{paddingHorizontal: 25}}>
            <Step1 />
          </View>
        </ProgressStep>
        <ProgressStep label="Family Details"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={previousButtonTextStyle}>
              
          <View style={{paddingHorizontal: 25}}>
            <Step2 />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Professional Details"
            nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={previousButtonTextStyle}
          onSubmit={() => navigation.navigate('Pricing')}>
          <View style={{paddingHorizontal: 25}}>
            <Step3 />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
