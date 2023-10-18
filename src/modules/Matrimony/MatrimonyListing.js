import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../../styles';
import MatrimonyCard from './components/MatrimonyCard';
import {Icon} from 'react-native-elements';

const data = [
  {
    full_name: 'kartik sharma',
    occupation: 'Software Engineer',
    annual_income: '25lpa',
    age: '25',
    height: '5ft 11in',
    weight: '74',
    location: 'Dehradun,Uttarakhand',
  },
  {
    full_name: 'Aman deep',
    occupation: 'Software Engineer',
    annual_income: '20lpa',
    age: '22',
    height: '5ft 8in',
    weight: '60',
    location: 'Dehradun,Uttarakhand',
  },
  {
    full_name: 'Lavi sharma',
    occupation: 'Hr',
    annual_income: '50lpa',
    age: '24',
    height: '5ft 5in',
    weight: '80',
    location: 'Roorkee,Uttarakhand',
  },
  {
    full_name: 'Ramu',
    occupation: 'Hr',
    annual_income: '30lpa',
    age: '24',
    height: '5ft 11in',
    weight: '60',
    location: 'Roorkee,Uttarakhand',
  },
  {
    full_name: 'Ramu',
    occupation: 'Hr',
    annual_income: '30lpa',
    age: '24',
    height: '5ft 11in',
    weight: '60',
    location: 'Roorkee,Uttarakhand',
  },
];

export default function MatrimonyListing({navigation}) {
  return (
    <View style={style.container}>
      {/* Header */}
      <View>
        <View style={style.header}>
          <View></View>
          <View style={{flexDirection: 'row',width:100,justifyContent:"space-around"}}>
            <Icon
              name="search-outline"
              type="ionicon"
              color={colors.black}
              size={25}
            />
            <Icon
              name="heart-outline"
              type="ionicon"
              color={colors.black}
              size={25}
              style={{marginLeft:15}}
              onPress={()=>navigation.navigate("ChatList")}
            />
          </View>
        </View>
      </View>
      <ScrollView>
        <MatrimonyCard data={data} navigation={navigation}/>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffff',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});
