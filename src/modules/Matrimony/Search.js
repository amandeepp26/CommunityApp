import { View, Text, StyleSheet, Alert, Dimensions, ScrollView } from 'react-native';
import React, { useCallback, useState } from 'react';
import styles from '../navigation/styles';
import { colors, fonts } from '../../styles';
import { Chip, Icon, Slider } from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';
import Button from '../../components/Button';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import RNSTextInput from '../../components/RNSTextInput';

const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
export default function MatrimonySearch({ navigation }) {
  const [isManglikSelected, setIsManglikSelected] = useState('yes');
  const [complexion, setComplexion] = useState('Fair');
  const [height, setHeight] = useState([121.92, 213.36]);
  const [ageRange, setAgeRange] = useState([18, 40]);
  const [weightRange, setWeightRange] = useState([50, 100]);
  const [incomeRange, setIncomeRange] = useState([30000, 100000]);
  const [selectedEducation, setSelectedEducation] = useState('');
  const [location,setLocation] = useState('');
  const educationOptions = [
    'High School',
    'Associate Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Ph.D.',
    'Other',
  ];
  const selectManglik = e => {
    setIsManglikSelected(e);
  }

  const feetInchesStart = `${Math.floor(height[0] / 30.48)}ft ${Math.round((height[0] % 30.48) / 2.54)}in`;
  const feetInchesEnd = `${Math.floor(height[1] / 30.48)}ft ${Math.round((height[1] % 30.48) / 2.54)}in`;
  return (
    <View style={{flex:1}} >
      <ScrollView>
      <View style={style.container}>
        <Text style={[styles.h1]}>Find the one</Text>
        <Text style={[styles.h6, { color: colors.gray }]}>
          Find the perfect partner who is made for you.
        </Text>
        <View >
          <View style={{ paddingTop: 20 }}>
            <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
              Height
            </Text>
            <Text style={[styles.p]}>
              {feetInchesStart} to {feetInchesEnd}
            </Text>
            <MultiSlider
              isMarkersSeparated={true}
              enabledTwo={true}
              snapped={true}
              showStepLabels
              markerStyle={style.sliderMarker}
              containerStyle={{marginLeft:10}}
              trackStyle={{height:3}}
              values={height}
              sliderLength={Dimensions.get('window').width - 100}
              step={2.54} // 1 inch in centimeters
              min={121.92} // 4ft in centimeters
              max={213.36}
              onValuesChange={(e) => setHeight(e)}

            />
          </View>
          {/* Age range */}
          <View style={{ paddingTop: 10 }}>
            <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
              Age
            </Text>
            <Text style={[styles.p]}>
              {ageRange[0]} to {ageRange[1]} years
            </Text>
            <MultiSlider
              isMarkersSeparated={true}
              enabledTwo={true}
              snapped={true}
              showStepLabels
              markerStyle={style.sliderMarker}
              trackStyle={{height:3}}
              containerStyle={{marginLeft:10}}
              values={ageRange}
              sliderLength={Dimensions.get('window').width - 100}
              step={1}
              min={18}
              max={70} // Adjust max age as needed
              onValuesChange={(values) => setAgeRange(values)}
            />
          </View>

          {/* Weight Range */}
          <View style={{ paddingTop: 10 }}>
            <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
              Weight (kg)
            </Text>
            <Text style={[styles.p]}>
              {weightRange[0]} to {weightRange[1]} kg
            </Text>
            <MultiSlider
              isMarkersSeparated={true}
              enabledTwo={true}
              snapped={true}
              showStepLabels
              containerStyle={{marginLeft:10}}
              markerStyle={style.sliderMarker}
              trackStyle={{height:3}}
              values={weightRange}
              sliderLength={Dimensions.get('window').width - 100}
              step={1}
              min={50} // Adjust min weight as needed
              max={100} // Adjust max weight as needed
              onValuesChange={(values) => setWeightRange(values)}
            />
          </View>

          {/* Income Range */}
          <View style={{ paddingTop: 10 }}>
            <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
              Annual Income (₹)
            </Text>
            <Text style={[styles.p]}>
              ₹{incomeRange[0]} to ₹{incomeRange[1]}
            </Text>
            <MultiSlider
              isMarkersSeparated={true}
              enabledTwo={true}
              snapped={true}
              showStepLabels
              containerStyle={{marginLeft:10}}
              markerStyle={style.sliderMarker}
              trackStyle={{height:3}}
              values={incomeRange}
              sliderLength={Dimensions.get('window').width - 100}
              step={1000} // Adjust the step value as needed
              min={10000} // Adjust the min income as needed
              max={200000} // Adjust the max income as needed
              onValuesChange={(values) => setIncomeRange(values)}
            />
          </View>

          <View style={{ width: '100%', paddingTop: 10 }}>
            <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
              Manglik
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Chip
                title="Yes"
                containerStyle={{ width: 80 }}
                onPress={() => selectManglik('yes')}
                type={isManglikSelected === 'yes' ? 'solid' : 'outline'}
              />
              <Chip
                title="No"
                type={isManglikSelected === 'no' ? 'solid' : 'outline'}
                containerStyle={{ width: 80, marginLeft: 10 }}
                onPress={() => selectManglik('no')}
              />
            </View>
          </View>
          <View style={{ width: '100%', paddingTop: 10 }}>
            <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
              Complexion
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Chip
                title="Fair"
                containerStyle={{ width: 80 }}
                onPress={() => setComplexion('Fair')}
                type={complexion === 'Fair' ? 'solid' : 'outline'}
              />
              <Chip
                title="Dark"
                type={complexion === 'Dark' ? 'solid' : 'outline'}
                containerStyle={{ width: 80, marginLeft: 10 }}
                onPress={() => setComplexion('Dark')}
              />
            </View>
          </View>
          <View style={{ paddingTop: 10 }}>
            <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
              Education
            </Text>
            <SelectDropdown
              data={educationOptions}
              buttonStyle={style.dropdownText}
              buttonTextStyle={style.placeholder}
              onSelect={selectedItem => {
                setSelectedEducation(selectedItem);
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
              defaultButtonText="Select Education/Qualification"
            />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Text style={[styles.h6, { paddingBottom: 10, color: colors.gray }]}>
              Location
            </Text>
            <RNSTextInput
            placeHolder={'Location'}
            onChangeText={e => setLocation(e)}
            value={location}
          />
          </View>
        </View>
        <Button
          onpress={() => navigation.navigate('MatrimonyListing')}
          text={'Search'}
          backgroundColor={colors.primaryColor}
          color={false}></Button>
          
      </View>
      </ScrollView>
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
  sliderMarker:{
    backgroundColor: colors.primaryColor,
    width: 20,
    height: 20,
    borderRadius: 15,
  }
});
