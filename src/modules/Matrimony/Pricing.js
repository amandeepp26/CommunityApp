import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../styles';
import styles from '../navigation/styles';
import Button from '../../components/Button';
import {Icon} from 'react-native-elements';

export default function Pricing({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.circle}></View>
      <View
        style={{
          borderWidth: 1,
          width: 70,
          paddingHorizontal: 10,
          paddingVertical: 3,
          borderRadius: 100,
          borderColor: '#d3d3d3',
          backgroundColor: '#f0f0f0',
        }}>
        <Text style={[styles.p, {fontWeight: '700'}]}>Pricing</Text>
      </View>
      <View>
        <Text style={style.pricingText}>$2.50</Text>
        <Text style={[styles.h6, {fontWeight: '600', paddingLeft: 5}]}>
          Per User Per Month
        </Text>
      </View>
      <View style={{paddingTop: 20}}>
        <Button
          text={'Purchase Plan'}
          backgroundColor={colors.primaryColor}
          onpress={() => navigation.navigate('matrimonySearch')}
        />
      </View>
      <View style={{paddingVertical: 20}}>
        <Text style={[styles.h6]}>Includes :</Text>
        <View style={style.infoText}>
          <Icon
            name="checkmark-circle-outline"
            type="ionicon"
            color={colors.black}
            size={22}
            style={{marginRight: 8}}
          />
          <Text style={[styles.p, {color: '#000'}]}>
            Unlimited profile access
          </Text>
        </View>
        <View style={style.infoText}>
          <Icon
            name="checkmark-circle-outline"
            type="ionicon"
            color={colors.black}
            size={22}
            style={{marginRight: 8}}
          />
          <Text style={[styles.p, {color: '#000'}]}>Priority matching</Text>
        </View>
        <View style={style.infoText}>
          <Icon
            name="checkmark-circle-outline"
            type="ionicon"
            color={colors.black}
            size={22}
            style={{marginRight: 8}}
          />
          <Text style={[styles.p, {color: '#000'}]}>Enhanced visibility</Text>
        </View>
        <View style={style.infoText}>
          <Icon
            name="checkmark-circle-outline"
            type="ionicon"
            color={colors.black}
            size={22}
            style={{marginRight: 8}}
          />
          <Text style={[styles.p, {color: '#000'}]}>Instant messaging</Text>
        </View>
        <View style={style.infoText}>
          <Icon
            name="checkmark-circle-outline"
            type="ionicon"
            color={colors.black}
            size={22}
            style={{marginRight: 8}}
          />
          <Text style={[styles.p, {color: '#000'}]}>
            Advanced search filters
          </Text>
        </View>
        <View style={style.infoText}>
          <Icon
            name="checkmark-circle-outline"
            type="ionicon"
            color={colors.black}
            size={22}
            style={{marginRight: 8}}
          />
          <Text style={[styles.p, {color: '#000'}]}>Verified profiles</Text>
        </View>
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
  circle: {
    height: 220,
    width: 200,
    backgroundColor: '#f5d142',
    borderRadius: 70,
    position: 'absolute',
    top: -60,
    right: -70,
  },
  pricingText: {
    fontSize: 70,
    fontWeight: '600',
    paddingTop: 35,
  },
  infoText: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
