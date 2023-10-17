import {StyleSheet, Text, View, Pressable, ScrollView,} from 'react-native';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Icon} from 'react-native-elements';
import {CheckBox} from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import styles from '../../navigation/styles';
import RNSTextInput from '../../../components/RNSTextInput';
import { colors, fonts } from '../../../styles';
import Button from '../../../components/Button';

export default function Step1({navigation}) {
  const [selectedItem, setSelectedItem] = useState('');
  const [dob, set_dob] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMaleSelected, setIsMaleSelected] = useState(false);
  const [isFemaleSelected, setIsFemaleSelected] = useState(false);
  const [chosenDate, setChosenDate] = useState('');

  const handleDateChange = newDate => {
    setChosenDate(newDate);
  };
  const handlePicker = date => {
    if (dob == '') {
      set_dob(dob);
    }
    setIsVisible(false);
    console.warn(date);
    set_dob(moment(date).format('DD/MMM/yyyy'));
  };
  const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  return (
    <ScrollView>
      <View style={style.container}>
      <View style={{paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Complexion
          </Text>
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
            defaultButtonText="Complexion"
          />
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Blood Group
          </Text>
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
            defaultButtonText="Blood Group"
          />
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Spectacles
          </Text>
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
            defaultButtonText="Spectacles"
          />
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Mangalik
          </Text>
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
            defaultButtonText="Mangalik"
          />
        </View>
        <View style={{width: '100%', paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Height
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Height'}
            keyboard={'numeric'}
            onChangeText={e => setPhoneNumber(e)}
            value={''}
            maxLength={10}
          />
        </View>

        <View style={{width: '100%', paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Weight
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Weight'}
            keyboard={'numeric'}
            onChangeText={e => setPhoneNumber(e)}
            value={''}
            maxLength={10}
          />
        </View>

        <View style={{paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Education
          </Text>
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
            defaultButtonText="Select Education"
          />
        </View>
          
        <View style={{paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Hobbies
          </Text>
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
            defaultButtonText="Hobbies"
          />
        </View>
        <View style={{width: '100%', paddingTop: 10}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Address
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Address'}
            keyboard={'numeric'}
            onChangeText={e => setPhoneNumber(e)}
            value={''}
            maxLength={10}
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
    width: '100%',
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
