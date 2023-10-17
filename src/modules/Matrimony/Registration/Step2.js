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

export default function Step2({navigation}) {
  const [selectedItem, setSelectedItem] = useState('');
  const [fatherName, setfatherName] = useState('');
  const [fatherOccupation, setfatherOccupation] = useState('');
  const [annualIncome, setannualIncome] = useState('');
  const [phone, setphone] = useState('')

  const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={{width: '100%', paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Father's Name
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Father Name'}
            onChangeText={e => setfatherName(e)}
            value={fatherName}
          />
        </View>
        <View style={{width: '100%', paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Father's Occupation
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Fathers Occupation'}
            onChangeText={e => setfatherOccupation(e)}
            value={fatherOccupation}
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
        <View style={{width: '100%', paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Mobile No.
          </Text>
          <RNSTextInput
            placeHolder={'Enter Mobile No.'}
            keyboard={'numeric'}
            onChangeText={e => setphone(e)}
            value={phone}
          />
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Sisters
          </Text>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <SelectDropdown
            data={data}
            buttonStyle={style.dropdownText}
            buttonTextStyle={style.placeholder}
            onSelect={selectedItem => {
              setSelectedItem(selectedItem);
            }}
            // dropdownStyle={{alignItems: 'center',backgroundColor:'red', justifyContent: 'center'}}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text to show after item is selected
              return selectedItem;
            }}
            dropdownStyle={{borderRadius: 10}}
            rowTextStyle={{
              left: 10,
              position: 'absolute',
            }}
            rowTextForSelection={(item, index) => {
              // text to show for each item in the dropdown
              return item;
            }}
            defaultButtonText="Married"
          />
           <SelectDropdown
            data={data}
            buttonStyle={style.dropdownText}
            buttonTextStyle={style.placeholder}
            onSelect={selectedItem => {
              setSelectedItem(selectedItem);
            }}
            // dropdownStyle={{alignItems: 'center',backgroundColor:'red', justifyContent: 'center'}}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text to show after item is selected
              return selectedItem;
            }}
            dropdownStyle={{borderRadius: 10}}
            rowTextStyle={{
              left: 10,
              position: 'absolute',
            }}
            rowTextForSelection={(item, index) => {
              // text to show for each item in the dropdown
              return item;
            }}
            defaultButtonText="Unmarried"
          />
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Brothers
          </Text>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <SelectDropdown
            data={data}
            buttonStyle={style.dropdownText}
            buttonTextStyle={style.placeholder}
            onSelect={selectedItem => {
              setSelectedItem(selectedItem);
            }}
            // dropdownStyle={{alignItems: 'center',backgroundColor:'red', justifyContent: 'center'}}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text to show after item is selected
              return selectedItem;
            }}
            dropdownStyle={{borderRadius: 10}}
            rowTextStyle={{
              left: 10,
              position: 'absolute',
            }}
            rowTextForSelection={(item, index) => {
              // text to show for each item in the dropdown
              return item;
            }}
            defaultButtonText="Married"
          />
            <SelectDropdown
            data={data}
            buttonStyle={style.dropdownText}
            buttonTextStyle={style.placeholder}
            onSelect={selectedItem => {
              setSelectedItem(selectedItem);
            }}
            // dropdownStyle={{alignItems: 'center',backgroundColor:'red', justifyContent: 'center'}}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text to show after item is selected
              return selectedItem;
            }}
            dropdownStyle={{borderRadius: 10}}
            rowTextStyle={{
              left: 10,
              position: 'absolute',
            }}
            rowTextForSelection={(item, index) => {
              // text to show for each item in the dropdown
              return item;
            }}
            defaultButtonText="unmarried"
          />
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Family Type
          </Text>
          <SelectDropdown
            data={data}
            buttonStyle={[style.dropdownText,{width:"100%"}]}
            buttonTextStyle={style.placeholder}
            onSelect={selectedItem => {
              setSelectedItem(selectedItem);
            }}
            // dropdownStyle={{alignItems: 'center',backgroundColor:'red', justifyContent: 'center'}}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text to show after item is selected
              return selectedItem;
            }}
            dropdownStyle={{borderRadius: 10}}
            rowTextStyle={{
              left: 10,
              position: 'absolute',
            }}
            rowTextForSelection={(item, index) => {
              // text to show for each item in the dropdown
              return item;
            }}
            defaultButtonText="Select Family Type"
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
  dropdownText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'left',
    backgroundColor: '#fff',
    width: '47%',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 15,
  },
  placeholder: {
    fontSize: 16,
    textAlign: 'left',
    color: 'gray',
  },
});
