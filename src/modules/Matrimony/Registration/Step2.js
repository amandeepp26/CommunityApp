import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import styles from '../../navigation/styles';
import RNSTextInput from '../../../components/RNSTextInput';
import { colors, fonts } from '../../../styles';

export default function Step2({ navigation }) {
  const [selectedMarriedSister, setSelectedMarriedSister] = useState('');
  const [selectedUnmarriedSister, setSelectedUnmarriedSister] = useState('');
  const [selectedMarriedBrother, setSelectedMarriedBrother] = useState('');
  const [selectedUnmarriedBrother, setSelectedUnmarriedBrother] = useState('');
  const [familyType,setFamilyType] = useState('');
  const [fatherName, setfatherName] = useState('');
  const [fatherOccupation, setfatherOccupation] = useState('');
  const [annualIncome, setannualIncome] = useState('');
  const [phone, setphone] = useState('')

  const marriedSister = ['1 married', '2 married', '3 married', '4 married', '5 married'];
  const unmarriedSister = ['1 unmarried', '2 unmaried', '3 unmarried', '4 unmarried', '5 unmarried']
  const marriedBrother = ['1 married', '2 married', '3 married', '4 married', '5 married'];
  const unmarriedBrother = ['1 unmarried', '2 unmaried', '3 unmarried', '4 unmarried', '5 unmarried'];

  const familyTypeOptions = ['Joint Family', 'Nuclear Family', 'Others'];

  return (
    <ScrollView>
      <View style={style.container}>
        <View style={{ width: '100%', paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Father's Name
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Father Name'}
            onChangeText={e => setfatherName(e)}
            value={fatherName}
          />
        </View>
        <View style={{ width: '100%', paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Father's Occupation
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Fathers Occupation'}
            onChangeText={e => setfatherOccupation(e)}
            value={fatherOccupation}
          />
        </View>
        <View style={{ width: '100%', paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
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
            Mobile No.
          </Text>
          <RNSTextInput
            placeHolder={'Enter Mobile No.'}
            keyboard={'numeric'}
            onChangeText={e => setphone(e)}
            value={phone}
          />
        </View>
        <View style={{ paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Sisters
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <SelectDropdown
              data={marriedSister}
              buttonStyle={style.dropdownText}
              buttonTextStyle={style.placeholder}
              onSelect={selectedItem => {
                setSelectedMarriedSister(selectedItem);
              }}
              // dropdownStyle={{alignItems: 'center',backgroundColor:'red', justifyContent: 'center'}}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text to show after item is selected
                return selectedItem;
              }}
              dropdownStyle={{ borderRadius: 10 }}
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
              data={unmarriedSister}
              buttonStyle={style.dropdownText}
              buttonTextStyle={style.placeholder}
              onSelect={selectedItem => {
                setSelectedUnmarriedSister(selectedItem);
              }}
              // dropdownStyle={{alignItems: 'center',backgroundColor:'red', justifyContent: 'center'}}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text to show after item is selected
                return selectedItem;
              }}
              dropdownStyle={{ borderRadius: 10 }}
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
        <View style={{ paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Brothers
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <SelectDropdown
              data={marriedBrother}
              buttonStyle={style.dropdownText}
              buttonTextStyle={style.placeholder}
              onSelect={selectedItem => {
                setSelectedMarriedBrother(selectedItem);
              }}
              // dropdownStyle={{alignItems: 'center',backgroundColor:'red', justifyContent: 'center'}}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text to show after item is selected
                return selectedItem;
              }}
              dropdownStyle={{ borderRadius: 10 }}
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
              data={unmarriedBrother}
              buttonStyle={style.dropdownText}
              buttonTextStyle={style.placeholder}
              onSelect={selectedItem => {
                setSelectedUnmarriedBrother(selectedItem);
              }}
              // dropdownStyle={{alignItems: 'center',backgroundColor:'red', justifyContent: 'center'}}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text to show after item is selected
                return selectedItem;
              }}
              dropdownStyle={{ borderRadius: 10 }}
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
        <View style={{ paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Family Type
          </Text>
          <SelectDropdown
            data={familyTypeOptions}
            buttonStyle={[style.dropdownText, { width: "100%" }]}
            buttonTextStyle={style.placeholder}
            onSelect={selectedItem => {
              setFamilyType(selectedItem);
            }}
            // dropdownStyle={{alignItems: 'center',backgroundColor:'red', justifyContent: 'center'}}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text to show after item is selected
              return selectedItem;
            }}
            dropdownStyle={{ borderRadius: 10 }}
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
