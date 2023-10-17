import {View, Text, StyleSheet, Alert, Dimensions} from 'react-native';
import React, {useCallback, useState} from 'react';
import styles from '../navigation/styles';
import {colors, fonts} from '../../styles';
import {Chip, Icon, Slider} from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';
import Button from '../../components/Button';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
export default function Search({navigation}) {
  const [isManglikSelected, setIsManglikSelected] = useState('yes');
  const [sliderValue, setSliderValue] = useState(0);
  const selectManglik = e => {
    setIsManglikSelected(e);
  };
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);
  const handleSliderChange = value => {
    setSliderValue(value);
  };
  return (
    <View style={style.container}>
      <View>
        <Text style={[styles.h1]}>Find the one</Text>
        <Text style={[styles.h6, {color: colors.gray}]}>
          Find the perfect partner who is made for you.
        </Text>
        <View style={{paddingTop: 20}}>
        {/* <MultiSlider
              enabledTwo
              snapped={true}
              showStepLabels
              selectedStyle={{backgroundColor: colors.green}}
              markerStyle={{
                backgroundColor: colors.blue,
                width: 20,
                height: 20,
                borderRadius: 15,
              }}
              containerStyle={{alignSelf: 'center'}}
              values={sliderValue}
              onValuesChange={e => {
                console.warn(e)
              }}
              onValuesChangeFinish={() => console.warn('hy')}
              min={0}
              max={5}
              step={5}
          /> */}

          <View style={{width: '100%', paddingTop: 10}}>
            <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
              Manglik
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Chip
                title="Yes"
                containerStyle={{width: 80}}
                onPress={() => selectManglik('yes')}
                type={isManglikSelected === 'yes' ? 'solid' : 'outline'}
              />
              <Chip
                title="No"
                type={isManglikSelected === 'no' ? 'solid' : 'outline'}
                containerStyle={{width: 80, marginLeft: 10}}
                onPress={() => selectManglik('no')}
              />
            </View>
          </View>
          <View style={{width: '100%', paddingTop: 10}}>
            <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
              Complexion
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Chip
                title="Fair"
                containerStyle={{width: 80}}
                onPress={() => selectManglik('yes')}
                type={isManglikSelected === 'yes' ? 'solid' : 'outline'}
              />
              <Chip
                title="Dark"
                type={isManglikSelected === 'no' ? 'solid' : 'outline'}
                containerStyle={{width: 80, marginLeft: 10}}
                onPress={() => selectManglik('no')}
              />
            </View>
          </View>
          <View style={{paddingTop: 10}}>
            <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
              Education
            </Text>
            <SelectDropdown
              data={data}
              buttonStyle={style.dropdownText}
              buttonTextStyle={style.placeholder}
              // onSelect={selectedItem => {
              //   setSelectedItem(selectedItem);
              // }}
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
              defaultButtonText="Select Education/Qualification"
            />
          </View>
          <View style={{paddingTop: 10}}>
            <Text style={[styles.h6, {paddingBottom: 10, color: colors.gray}]}>
              Location
            </Text>
            <SelectDropdown
              data={data}
              buttonStyle={style.dropdownText}
              buttonTextStyle={style.placeholder}
              // onSelect={selectedItem => {
              //   setSelectedItem(selectedItem);
              // }}
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
              defaultButtonText="Select Location"
            />
          </View>
        </View>
        <Button
          onpress={() => navigation.navigate('MatrimonyListing')}
          text={'Search'}
          backgroundColor={colors.primaryColor}
          color={false}></Button>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 35,
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
