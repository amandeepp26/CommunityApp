import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from '../navigation/styles';
import RNSTextInput from '../../components/RNSTextInput';
import {colors, fonts} from '../../styles';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-datepicker';
import Button from '../../components/Button';
import {Icon} from 'react-native-elements';
import {CheckBox} from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import * as ImagePicker from 'react-native-image-picker';
import {Toast} from 'react-native-toast-message';
import {Image} from 'react-native';

export default function Signup({navigation}) {
  const [selectedItem, setSelectedItem] = useState('');
  const [dob, set_dob] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMaleSelected, setIsMaleSelected] = useState(false);
  const [isFemaleSelected, setIsFemaleSelected] = useState(false);
  const [chosenDate, setChosenDate] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [image, setImage] = useState(null);

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

  //function to launch gallery
  const gallery = () => {
    let options = {
      title: 'Select Image',
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality: 0.5,
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
        // alert('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        // alert('ImagePicker Error: ' + response.error);
      } else {
        // const fileSize = response.data.length * (3 / 4) - 2;
        // console.log('filesize', fileSize);
        if (response.fileSize > 314572) {
          alert('hyy');
        } else {
          let source = response.data;
          setImage(response.uri);
          // console.warn(source);
        }
      }
    });
  };

  const camera = () => {
    let options = {
      title: 'Select Image',
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality: 0.5,
    };
    ImagePicker.launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
        // alert('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        // alert('ImagePicker Error: ' + response.error);
      } else {
        // const fileSize = response.data.length * (3 / 4) - 2;
        // console.log('filesize', fileSize);
        if (response.fileSize > 314572) {
          alert('hy');
        } else {
          let source = response.data;
          setImage(response.assets[0].uri);
          console.warn('cam res', response);
        }
      }
    });
  };

  const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="person-add-outline"
            type="ionicon"
            color={colors.black}
            size={30}
          />
          <Text style={[styles.h1, {textAlign: 'center', paddingLeft: 10}]}>
            Create New Account
          </Text>
        </View>
        <View
          style={{
            borderWidth: 2,
            width: 80,
            height: 80,
            borderRadius: 50,
            alignSelf: 'center',
            marginVertical: 20,
            borderColor: colors.grey,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {image == null ? (
            <Icon
              name="person-outline"
              type="ionicons"
              size={35}
              color={colors.primaryBlue}
            />
          ) : (
            <Image
              source={{uri: image}}
              style={{height: '100%', width: '100%', borderRadius: 50}}
            />
          )}
          <Pressable
            onPress={() => camera()}
            style={{
              position: 'absolute',
              backgroundColor: '#696969',
              padding: 7,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              bottom: -5,
              right: -5,
            }}>
            <Icon
              name="create-outline"
              type="ionicon"
              size={15}
              color={colors.white}
            />
          </Pressable>
        </View>
        <View style={{width: '100%', paddingTop: 20}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Full Name
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Full Name'}
            keyboard={'numeric'}
            onChangeText={e => setPhoneNumber(e)}
            value={''}
            maxLength={10}
          />
        </View>

        <View style={{paddingTop: 20}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Select Caste
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
            defaultButtonText="Select Caste/Religion"
          />
        </View>

        <View style={{width: '100%', paddingTop: 20}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Email address
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Email Address'}
            keyboard={'numeric'}
            onChangeText={e => setPhoneNumber(e)}
            value={''}
            maxLength={10}
          />
        </View>

        <View style={{width: '100%', paddingTop: 20}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Mobile Number
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Mobile Number'}
            keyboard={'numeric'}
            onChangeText={e => setPhoneNumber(e)}
            value={''}
            maxLength={10}
          />
        </View>

        <View style={{width: '100%', paddingTop: 20}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Password
          </Text>
          <RNSTextInput
            placeHolder={'Enter your Password'}
            keyboard={'numeric'}
            onChangeText={e => setPhoneNumber(e)}
            value={''}
            maxLength={10}
          />
        </View>

        <Pressable
          onPress={() => setIsVisible(true)}
          style={{width: '100%', paddingTop: 20}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Enter Date of Birth
          </Text>
          <Pressable onPress={() => setIsVisible(true)}>
            <RNSTextInput placeHolder={'Select Date of Birth'} value={dob} />
            <View style={{position: 'absolute', right: 10, bottom: 10}}>
              <Icon name="calendar-outline" type="ionicon" color={'#696969'} />
            </View>
          </Pressable>
        </Pressable>
        <DateTimePicker
          isVisible={isVisible}
          mode={'date'}
          is24Hour={false}
          maximumDate={new Date()}
          // minimumDate={new Date()}
          onConfirm={handlePicker}
          onCancel={() => setIsVisible(false)}
        />
        <View style={{width: '100%', paddingTop: 20}}>
          <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
            Gender
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CheckBox
              title="Male"
              checked={isMaleSelected}
              containerStyle={{
                backgroundColor: isMaleSelected ? colors.primaryBlue : '#fff',
                borderWidth: 0,
                flex: 1,
                marginRight: 10,
              }}
              textStyle={{color: isMaleSelected ? '#fff' : colors.gray}}
              checkedColor={isMaleSelected ? '#fff' : colors.primaryBlue}
              onPress={() => {
                setIsMaleSelected(!isMaleSelected);
                setIsFemaleSelected(false); // Deselect female if male is selected
              }}
            />
            <CheckBox
              title="Female"
              checked={isFemaleSelected}
              containerStyle={{
                backgroundColor: isFemaleSelected ? 'pink' : '#fff',
                borderWidth: 0,
                flex: 1,
                marginLeft: 10,
              }}
              textStyle={{color: isFemaleSelected ? '#fff' : colors.gray}}
              checkedColor={isFemaleSelected ? '#fff' : colors.primaryPink}
              onPress={() => {
                setIsFemaleSelected(!isFemaleSelected);
                setIsMaleSelected(false); // Deselect male if female is selected
              }}
            />
          </View>
        </View>
        {/* <View style={{width: '100%', paddingTop: 20}}>
          <CheckBox
            title="Love to help in Senior Care"
            containerStyle={{
              backgroundColor: '#fff',
              padding: 10,
              borderWidth: 0,
            }}
          />
          <CheckBox
            title="Senior Care Assistance Require"
            containerStyle={{
              backgroundColor: '#fff',
              padding: 10,
              borderWidth: 0,
            }}
          />
        </View> */}

        <Button
          text={'Register'}
          backgroundColor={colors.primaryColor}
          color={false}
          onpress={() => navigation.navigate('Otp')}
        />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 20,
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
