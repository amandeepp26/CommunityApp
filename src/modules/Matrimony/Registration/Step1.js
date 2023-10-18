import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import RNSTextInput from '../../../components/RNSTextInput';
import styles from '../../navigation/styles';
import { colors } from '../../../styles';

export default function Step1({ navigation }) {
  const [selectedComplexion, setSelectedComplexion] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [selectedSpectacles, setSelectedSpectacles] = useState('');
  const [selectedMangalik, setSelectedMangalik] = useState('');
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedHobbies, setSelectedHobbies] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [address, setAddress] = useState('');

  const complexionOptions = ['Fair', 'Medium', 'Olive', 'Dark', 'Other'];
  const bloodGroupOptions = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  const spectaclesOptions = ['Yes', 'No'];
  const mangalikOptions = ['Yes', 'No', 'Don\'t Know'];
  const educationOptions = [
    'High School',
    'Associate Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Ph.D.',
    'Other',
  ];
  

  return (
    <ScrollView>
      <View style={style.container}>
        <View style={{ paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Complexion
          </Text>
          <SelectDropdown
            data={complexionOptions}
            buttonStyle={style.dropdownText}
            buttonTextStyle={style.placeholder}
            onSelect={(selectedItem) => setSelectedComplexion(selectedItem)}
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            dropdownStyle={{ borderRadius: 10 }}
            rowTextStyle={{
              left: 10,
              position: 'absolute',
            }}
            rowTextForSelection={(item, index) => item}
            defaultButtonText="Complexion"
          />
        </View>
        <View style={{ paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Blood Group
          </Text>
          <SelectDropdown
            data={bloodGroupOptions}
            buttonStyle={style.dropdownText}
            buttonTextStyle={style.placeholder}
            onSelect={(selectedItem) => setSelectedBloodGroup(selectedItem)}
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            dropdownStyle={{ borderRadius: 10 }}
            rowTextStyle={{
              left: 10,
              position: 'absolute',
            }}
            rowTextForSelection={(item, index) => item}
            defaultButtonText="Blood Group"
          />
        </View>
        <View style={{ paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Spectacles
          </Text>
          <SelectDropdown
            data={spectaclesOptions}
            buttonStyle={style.dropdownText}
            buttonTextStyle={style.placeholder}
            onSelect={(selectedItem) => setSelectedSpectacles(selectedItem)}
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            dropdownStyle={{ borderRadius: 10 }}
            rowTextStyle={{
              left: 10,
              position: 'absolute',
            }}
            rowTextForSelection={(item, index) => item}
            defaultButtonText="Spectacles"
          />
        </View>
        <View style={{ paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Mangalik
          </Text>
          <SelectDropdown
            data={mangalikOptions}
            buttonStyle={style.dropdownText}
            buttonTextStyle={style.placeholder}
            onSelect={(selectedItem) => setSelectedMangalik(selectedItem)}
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            dropdownStyle={{ borderRadius: 10 }}
            rowTextStyle={{
              left: 10,
              position: 'absolute',
            }}
            rowTextForSelection={(item, index) => item}
            defaultButtonText="Mangalik"
          />
        </View>
        <View style={{ width: '100%', paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Height
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Height'}
            keyboard={'numeric'}
            onChangeText={(text) => setHeight(text)}
            value={height}
            maxLength={10}
          />
        </View>
        <View style={{ width: '100%', paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Weight
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Weight'}
            keyboard={'numeric'}
            onChangeText={(text) => setWeight(text)}
            value={weight}
            maxLength={10}
          />
        </View>
        <View style={{ paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Education
          </Text>
          <SelectDropdown
            data={educationOptions}
            buttonStyle={style.dropdownText}
            buttonTextStyle={style.placeholder}
            onSelect={(selectedItem) => setSelectedEducation(selectedItem)}
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            dropdownStyle={{ borderRadius: 10 }}
            rowTextStyle={{
              left: 10,
              position: 'absolute',
            }}
            rowTextForSelection={(item, index) => item}
            defaultButtonText="Select Education"
          />
        </View>
        <View style={{ paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Hobbies
          </Text>
          <SelectDropdown
            data={educationOptions}
            buttonStyle={style.dropdownText}
            buttonTextStyle={style.placeholder}
            onSelect={(selectedItem) => setSelectedHobbies(selectedItem)}
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            dropdownStyle={{ borderRadius: 10 }}
            rowTextStyle={{
              left: 10,
              position: 'absolute',
            }}
            rowTextForSelection={(item, index) => item}
            defaultButtonText="Hobbies"
          />
        </View>
        <View style={{ width: '100%', paddingTop: 10 }}>
          <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
            Address
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Address'}
            keyboard={'numeric'}
            onChangeText={(text) => setAddress(text)}
            value={address}
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
