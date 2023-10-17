import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Icon} from 'react-native-elements';
import {CheckBox} from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import styles from '../../navigation/styles';
import RNSTextInput from '../../../components/RNSTextInput';
import {colors, fonts} from '../../../styles';
import Button from '../../../components/Button';

export default function Step3({navigation}) {
  const [selectedItem, setSelectedItem] = useState('');
  const [fatherName, setfatherName] = useState('');
  const [fatherOccupation, setfatherOccupation] = useState('');
  const [annualIncome, setannualIncome] = useState('');
  const [phone, setphone] = useState('');
  const [occupation, setoccupation] = useState('');
  const [industry, setindustry] = useState('');
  const [partnerPreference, setPartnerPreference] = useState('');

  const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
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
