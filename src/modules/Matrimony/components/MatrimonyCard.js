import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../../navigation/styles';
import {colors} from '../../../styles';
import {Icon} from 'react-native-elements';
import Button from '../../../components/Button';

export default function MatrimonyCard({data,navigation}) {
  return data.map((user, index) => {
    return (
      <Pressable style={style.container} onPress={()=>navigation.navigate("ProfileDetail")}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#d3d3d3',
            paddingBottom: 10,
          }}>
          <Image
            source={require('../images/user.jpg')}
            resizeMode="contain"
            style={{width: 80, height: 80, borderRadius: 15}}
          />
          <View style={{paddingHorizontal: 20}}>
            <Text
              style={[
                styles.h5,
                {fontWeight: 700, color: colors.primaryColor},
              ]}>
              {user.full_name}
            </Text>
            <Text style={[styles.h6, {fontWeight: 600, color: colors.gray}]}>
              {user.occupation}, {user.annual_income}
            </Text>
            <Text style={[styles.h6, {fontWeight: 600, color: colors.gray}]}>
              {user.age}Yrs, {user.height}, {user.weight}kg
            </Text>
            <Text style={[styles.h6, {fontWeight: 700}]}>{user.location}</Text>
          </View>
          <View style={{marginLeft: 80}}>
            <Icon
              name="ellipsis-horizontal-outline"
              type="ionicon"
              color={colors.black}
              size={20}
            />
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', paddingTop: 11}}>
          <Icon
            name="heart-outline"
            type="ionicon"
            color={colors.primaryColor}
            size={20}
            style={style.icon}
          />
          <Icon
            name="chatbubble-outline"
            type="ionicon"
            color={colors.primaryColor}
            size={18}
            style={style.icon}
          />
          <Pressable style={style.button}>
            <View>
              <Text style={[styles.h6, {color: '#fff', fontWeight: 500}]}>
                Send Interest
              </Text>
            </View>
          </Pressable>
        </View>
      </Pressable>
    );
  });
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 170,
    padding: 20,
    position: 'relative',
    marginTop: 12,
  },
  icon: {
    borderWidth: 1.5,
    borderColor: colors.primaryColor,
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: 'center',
    marginRight: 10,
  },
  button: {
    backgroundColor: colors.primaryColor,
    paddingHorizontal: 25,
    paddingVertical: 6,
    borderRadius: 100,
    position: 'absolute',
    right: 0,
    top: 11,
  },
});
