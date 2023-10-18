import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from '../../navigation/styles';
import RNSTextInput from '../../../components/RNSTextInput';
import {colors, fonts} from '../../../styles';

export default function Step3({navigation}) {
  const [annualIncome, setannualIncome] = useState('');
  const [occupation, setoccupation] = useState('');
  const [industry, setindustry] = useState('');
  const [partnerPreference, setPartnerPreference] = useState('');

  return (
    <ScrollView>
      <View style={style.container}>
        <View style={{width: '100%', paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Occupation
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Occupation'}
            onChangeText={e => setoccupation(e)}
            value={occupation}
          />
        </View>
        <View style={{width: '100%', paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Industry
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Work Industry '}
            onChangeText={e => setindustry(e)}
            value={industry}
          />
        </View>
        <View style={{width: '100%', paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Annual Income
          </Text>
          <RNSTextInput
            placeHolder={'Enter Annual Income'}
            keyboard={'numeric'}
            onChangeText={e => setannualIncome(e)}
            value={annualIncome}
            maxLength={10}
          />
        </View>
        <View style={{ width: '100%', paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Partner Preference
          </Text>
          <RNSTextInput
            placeHolder={'Enter Partner Preference'}
            onChangeText={e => setPartnerPreference(e)}
            value={partnerPreference}
            multiline={true} // This allows multiple lines for description
            numberOfLines={4} // You can adjust the number of lines as needed
          />
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // width:'400'
    // paddingHorizontal: 25,
    // paddingVertical: 20,
  },
});
